import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getBrands=async() =>{
    const response=await axios.get(`${base_url}brand/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createBrands=async(brand)=>{
    const response=await axios.post(`${base_url}brand/`,brand,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const brandService={
    getBrands,
    createBrands
}
export default brandService;