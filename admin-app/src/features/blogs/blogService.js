import axios from "axios"
import { base_url } from "../../untils/base_url"

const getBlogs=async() =>{
    const response=await axios.get(`${base_url}blog/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const blogService={
    getBlogs,
}
export default blogService;