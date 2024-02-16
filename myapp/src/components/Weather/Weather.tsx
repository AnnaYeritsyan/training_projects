import { Box } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const Weather = () => {
    const [data, setData] = useState<any>(null);
    const [location, setLocation] = useState("");
    const [notFound, setNotFound] = useState(false);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6305c8aba12d4697bca415a04fa335fb`;
    const searchLocation = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (location !== '') {
            if (event.key === 'Enter') {
                try {
                    const response = await axios.get(url);
                    if (response.data && response.data.name) {
                        setData(response.data);
                        setNotFound(false); 
                    } else {
                        setNotFound(true); 
                    }
                } catch (error) {
                    if ((error as AxiosError)?.response?.status === 404) {
                        setNotFound(true); 
                    } else {
                        console.error('An error occurred:', error); // Log other errors
                    }
                }
                setLocation('');
            }
        }
    }


    return (
        <Box>
            hello weather
            <input
                type="search"
                value={location}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                onChange={event => setLocation(event?.target.value)} />
            {
                data ? (
                    <Box>
                        <h1>{data.name}</h1>
                        <h1>{data.main.temp.toFixed()}F</h1>
                        <h1>{((data.main.temp - 32) * (5 / 9)).toFixed()} C</h1>
                    </Box>
                ) : notFound ? (
                    <Box>
                        Not found
                    </Box>
                ) : null
            }
        </Box>
    );
};
export default Weather;
