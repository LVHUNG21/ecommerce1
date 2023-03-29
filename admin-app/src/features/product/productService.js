import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getProducts=async() =>{
    const response=await axios.get(`${base_url}product/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createProducts=async(product)=>{
    const response=await axios.post(`${base_url}product/`,product,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}

const productService={
    getProducts,
    createProducts
}
export default productService;