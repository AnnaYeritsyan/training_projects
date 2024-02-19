import { Box } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const Weather = () => {
    const [data, setData] = useState<any>(null);
    const [location, setLocation] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [fiveDay, setFiveDay] = useState<any>(null)
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6305c8aba12d4697bca415a04fa335fb`;
    const urlFive = 'http://api.openweathermap.org/data/2.5/weather?'
    const api_Key = '6305c8aba12d4697bca415a04fa335fb'
    let lat:number = 0
    let lon:number = 0

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    // https://api.openweathermap.org/data/2.5/forecast?lat=40.1811&lon=44.5136&appid=6305c8aba12d4697bca415a04fa335fb
    const searchLocation = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (location !== '') {
            if (event.key === 'Enter') {
                // try {
                //     const response = await axios.get(url);
                //     if (response.data && response.data.name) {
                //         setData(response.data);
                //         setNotFound(false); 
                //     } else {
                //         setNotFound(true); 
                //     }
                // } catch (error) {
                //     if ((error as AxiosError)?.response?.status === 404) {
                //         setNotFound(true); 
                //     } else {
                //         console.error(error); 
                //     }
                // }
                setLocation('');
            }
        }
    }


    return (
        <Box>
            hello weather page
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
