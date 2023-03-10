import axios from "axios"
import { base_url } from "../../untils/base_url"
const getProductCategories=async() =>{
    const response=await axios.get(`${base_url}category/`);
// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const pCategoriesService={
    getProductCategories,
}
export default pCategoriesService;