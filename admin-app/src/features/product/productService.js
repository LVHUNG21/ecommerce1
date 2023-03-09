import axios from "axios"
import { base_url } from "../../untils/base_url"

const getProducts=async() =>{
    const response=await axios.get(`${base_url}product/`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const productService={
    getProducts,
}
export default productService;