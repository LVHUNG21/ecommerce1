import axios from "axios"
import { base_url } from "../../untils/base_url"

import {config} from '../../untils/axiosconfig'
const getColors=async() =>{
    const response=await axios.get(`${base_url}color/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createColor=async(color)=>{
    const response=await axios.post(`${base_url}color/`,color,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const colorService={
    getColors,
    createColor
}
export default colorService;