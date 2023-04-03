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
const getBlog=async(id) =>{
    const response=await axios.get(`${base_url}blog/${id}`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
console.log(`errorlog:${response}`)
return response.data;
}
const createBlog=async(blog)=>{
    const response=await axios.post(`${base_url}blog/`,blog,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const deleteBlog=async(id) =>{
    const response=await axios.delete(`${base_url}blog/${id}`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const updateBlog=async(blog)=>{
    const response=await axios.put(`${base_url}blog/${blog.id}`,
    {title:blog.blogData.title,description:blog.blogData.description,
    category:blog.blogData.category,
    images:blog.blogData.images},
    
    config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const blogService={
    getBlogs,
    createBlog,getBlog,updateBlog,
    deleteBlog,
}
export default blogService;