import axios from 'axios';
import { base_url } from '../../utils/axiosConfig';
 
const register=async(userData)=>{
    const respone=await axios.post(`${base_url}user/register`,userData);
    if(respone.data){
        return respone.data;    
    }
}
const login=async(userData)=>{
    const respone=await axios.post(`${base_url}user/login`,userData);
    if(respone.data){
        return respone.data;    
    }
}

export const userService={
    register ,
    login
}