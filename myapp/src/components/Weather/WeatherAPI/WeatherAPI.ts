    
import axios from 'axios';

    // https://api.openweathermap.org/data/2.5/forecast?lat=40.1811&lon=44.5136&appid=6305c8aba12d4697bca415a04fa335fb

const apiKey = '6305c8aba12d4697bca415a04fa335fb';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
const fiveDaysUrl = 'https://api.openweathermap.org/data/2.5/forecast'
export const getWeatherByLocation = async (location: string, buttonName:string) => {

    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: location,
                units: 'imperial',
                appid: apiKey
            }
        })
        console.log(( response).data.coord.lon)
        console.log(( response).data.coord.lat)
        let latValue = response.data.coord.lat
        let lonValue = response.data.coord.lon
        if(buttonName === 'oneDay'){
             const response = await axios.get(apiUrl, {
            params: {
                q: location,
                units: 'imperial',
                appid: apiKey
            }
        }); 
        console.log(response.data)
        return response.data;
        }
        else{
            // const fiveDaysresponse = await axios.get(`
            // https://api.openweathermap.org/data/2.5/forecast?lat=${latValue}&lon=${lonValue}&appid=6305c8aba12d4697bca415a04fa335fb
            // `); 
            // console.log(fiveDaysresponse.data.coord.lat)
            const fiveDaysresponse = await axios.get(fiveDaysUrl, {
                params: {
                    lat: latValue,
                    lon: lonValue,
                    appid: apiKey
                }
            }); 
            
            // console.log(fiveDaysresponse.data.list);
            return fiveDaysresponse.data.list;
        }
       
       
    } catch (error) {
        throw error;
    }
};

