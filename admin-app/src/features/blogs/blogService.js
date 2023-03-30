import axios from "axios"
import { base_url } from "../../untils/base_url"

import {config} from '../../untils/axiosconfig'
const getBlogs=async() =>{
    const response=await axios.get(`${base_url}blog/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const createBlog=async(blog)=>{
    const response=await axios.post(`${base_url}blog/`,blog,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const blogService={
    getBlogs,
    createBlog
}
export default blogService;