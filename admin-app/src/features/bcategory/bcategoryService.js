import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getBlogCategory=async() =>{
    const response=await axios.get(`${base_url}blogCategory/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createBlogCategory=async(blogcategory)=>{
    const response=await axios.post(`${base_url}blogCategory/`,blogcategory,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const bcategoryService={
    getBlogCategory,
    createBlogCategory
}
export default bcategoryService;