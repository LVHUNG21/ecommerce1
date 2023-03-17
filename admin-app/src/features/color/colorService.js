import axios from "axios"
import { base_url } from "../../untils/base_url"

const getColors=async() =>{
    const response=await axios.get(`${base_url}user/get-colors`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const customerService={
    getColors,
}
export default colorService;