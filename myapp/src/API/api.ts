import axios, { AxiosError, isAxiosError } from 'axios'

export const DATA_API_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/users'


export type BasicResponse<T>={
    data?:T[]
    error?:string
}

export type PlaceholderData= {
    name:string
    surname:string
}
export type PlaceholderResponse = BasicResponse<PlaceholderData>

export const getPlaceholderData = async()=>{
    try{
        const res = await axios.get(DATA_API_PLACEHOLDER)
        return res.data
   
  }
  catch (error:any) {
   throw new Error(error)
  }

}


export const postPlaceholderData = ()=>{
    const postRequest = 'http://localhost:8080/post'
    const options = {
        method:'POST',
        body:JSON.stringify({
            name:'seroj',
            userName:'valodikyan'
        }),
        headers:{
            'Content-Type':'appl/json'
        }

    };

fetch(postRequest, options)
.then(res=>res.json())
.then((data:any)=>{
    console.log(data)
})

//     try{
//         const res = await axios.post(postRequest)
//         console.log(res)
    
//     if (res.status === 200) return { data: res.data }
//     else {
//       if (isAxiosError(res)) return { error: (res as AxiosError).message }
//       else return { error: 'Unknown error' }
//     }
//   }
//   catch (error) {
//     return { error: 'Request failed' };
//   }

}
