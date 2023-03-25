import axios from "axios"
import { base_url } from "../../untils/base_url"

const getColors=async() =>{
    const response=await axios.get(`${base_url}color/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const colorService={
    getColors,
}
export default colorService;