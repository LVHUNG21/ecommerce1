

import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getCoupon=async() =>{
    const response=await axios.get(`${base_url}coupon/`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createCoupon=async(coupon)=>{
    const response=await axios.post(`${base_url}coupon/`,coupon,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const couponService={
getCoupon,createCoupon
}
export default couponService;