import { Box, Button } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { getWeatherByLocation } from "./WeatherAPI/WeatherAPI";
const Weather = () => {
    const [data, setData] = useState<any>(null);
    const [location, setLocation] = useState<string>("");
    const [notFound, setNotFound] = useState<boolean>(false);
    const [day, setDay] = useState<string | null>(null)
    const [fiveDay, setFiveDay] = useState<string[]>()


// api.openweathermap.org/data/2.5/response?lat={lat}&lon={lon}&appid={API key}
    // https://api.openweathermap.org/data/2.5/forecast?lat=40.1811&lon=44.5136&appid=6305c8aba12d4697bca415a04fa335fb
   
    const searchLocation = async(buttonName:any) => {
        

                try {
                    const response = await  getWeatherByLocation(location, buttonName);
                    console.log(response)
                for(let i=0; i<=response.length; i++){
                    let date = new Date(response[i].dt * 1000)
                  
    
    console.log(`Day ${i + 1}:`);
    console.log(`Date: ${date.toDateString()}`);
 
                    console.log(date)
                }
                    if (response && response.name) {
                        console.log(response.name)
                        setData(response);
                        setNotFound(false); 
                    } else {
                        setNotFound(true); 
                    }
                } catch (error) {
                    setNotFound(true)
                    console.log(error)
                }
            
          
    }
    const handleClick = (ev:any)=>{
        console.log(ev.target.name)
        setDay(ev.target.name)
        searchLocation(ev.target.name)
    }
const handleKey = (ev: React.KeyboardEvent<HTMLInputElement>)=>{
    
        if (ev.key === 'Enter') {
            searchLocation(day)
        }
}

    return (
        <Box>
            hello weather page
            <Button onClick={handleClick} name='oneDay'>one day</Button>
            <Button onClick={handleClick} name='fiveDay'>5 days</Button>
            <input
                type="search"
                value={location}
                onKeyPress={handleKey}
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





