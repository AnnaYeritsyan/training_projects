import axios, {AxiosError} from "axios";

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6305c8aba12d4697bca415a04fa335fb`;
  

    export const getWeather = async()=>{
        try{
            const res = await axios.get(url) ;
            if(res.data){
                return res.data;
            }
        }catch(error){
            if ((error as AxiosError)?.response?.status === 404){
                console.log('if')
            }
            else{
                console.log('error')
            }
            
        }
    }
    

