import axios from "axios"
import { base_url } from "../../untils/base_url"

const getBrands=async() =>{
    const response=await axios.get(`${base_url}brand/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const productService={
    getBrands,
}
export default productService;