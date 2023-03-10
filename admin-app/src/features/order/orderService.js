import axios from "axios"
import { base_url } from "../../untils/base_url"

const getOrders=async() =>{
    const response=await axios.get(`${base_url}user/get-orders`);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}

const orderService={
    getOrders,
}
export default orderService;