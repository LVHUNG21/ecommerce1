import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getProductCategories=async() =>{
    const response=await axios.get(`${base_url}category/`);
// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createCategorys=async(category)=>{
    const response=await axios.post(`${base_url}category/`,category,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const pCategoriesService={
    getProductCategories,
    createCategorys
}
export default pCategoriesService;