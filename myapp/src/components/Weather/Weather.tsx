import { Box, Button } from "@mui/material";
import { useState } from "react";
import { getWeatherByLocation } from "./WeatherAPI/WeatherAPI";
const Weather = () => {
    const [data, setData] = useState<any>(null);
    const [location, setLocation] = useState<string>("");
    const [notFound, setNotFound] = useState<boolean>(false);
    const [day, setDay] = useState<string | null>(null)
    const [five, setFive] = useState<boolean>(false)
    const [allData, setAllData] = useState<any[]>([])
// api.openweathermap.org/data/2.5/response?lat={lat}&lon={lon}&appid={API key}
    // https://api.openweathermap.org/data/2.5/forecast?lat=40.1811&lon=44.5136&appid=6305c8aba12d4697bca415a04fa335fb
   
    const searchLocation = async(buttonName:any) => {
        

                try {
                    const response = await  getWeatherByLocation(location, buttonName);
                    console.log(response)
                    let prevDate:string = ""; 
                    let loopData:string[] = [];
                    for (let i = 0; i < response.length; i++) {
                        const currentDate = response[i].dt_txt.slice(0, 10);
                        if (currentDate !== prevDate) {
                            loopData.push(response[i])
                            prevDate = currentDate; 
                        }
                    }
                    setAllData(loopData)
   
    
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

        setDay(ev.target.name)
        searchLocation(ev.target.name)
        if(ev.target.name === 'fiveDay'){
            setFive(true)  
        }
        else{
            setFive(false)
        }
    }
const handleKey = (ev: React.KeyboardEvent<HTMLInputElement>)=>{
    
        if (ev.key === 'Enter') {
            searchLocation(day)
          

        }

}

console.log(allData)
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
            <Box>
               {
                five?<Box>
                    Five Day
                    {
                        allData.map((e:any, id:number)=>{
                            console.log(e)
                            return (
                                <Box key={id}>
                                <h1> {e.dt_txt}</h1>   
                                <h1>{e.main.temp.toFixed()}Kelvin</h1>
                                <h1>{((e.main.temp -273.15)).toFixed()} C</h1>
                                </Box>
                            )
                        })
                    }
                   
                    </Box>:<Box>one day</Box>
               }
            </Box>
        </Box>
    );
};
export default Weather;





