import axios from 'axios';
import { base_url } from '../../utils/axiosConfig';
 
const register=async(userData)=>{
    const respone=await axios.post(`${base_url}user/register`,userData);
    if(respone.data){
        if(respone.data){
            localStorage.setItem('customer',JSON.stringify(respone.data))
        }
        return respone.data;    
    }
}
const login=async(userData)=>{
    const respone=await axios.post(`${base_url}user/login`,userData);
    if(respone.data){
        return respone.data;    
    }
}
const getUserWishlist=async()=>{
    const respone=await axios.get(`${base_url}user/wishlist`,config);

    if(respone.data){
        return respone.data;    
    }
}

export const userService={
    register ,
    getUserWishlist,
    login
}