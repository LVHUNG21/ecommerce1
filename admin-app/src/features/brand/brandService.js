import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getBrands=async() =>{
    const response=await axios.get(`${base_url}brand/`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const getBrand=async(id) =>{
    const response=await axios.get(`${base_url}brand/${id}`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const deleteBrand=async(id) =>{
    const response=await axios.delete(`${base_url}brand/${id}`,config);

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
const updateBrands=async(brand)=>{
    const response=await axios.put(`${base_url}brand/${brand.id}`,{title:brand.brandData.title},config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const brandService={
    updateBrands,
    getBrand,
    getBrands,
    createBrands,
    deleteBrand
}
export default brandService;