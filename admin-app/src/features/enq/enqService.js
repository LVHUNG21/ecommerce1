
import axios from "axios"
import { base_url } from "../../untils/base_url"
import {config} from '../../untils/axiosconfig'
const getEnqs=async() =>{
    const response=await axios.get(`${base_url}enq/`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const getEnq=async(id) =>{
    const response=await axios.get(`${base_url}enq/${id}`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const deleteEnq=async(id) =>{
    const response=await axios.delete(`${base_url}enq/${id}`,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;
}
const updateEnqs=async(enquiry)=>{
    const response=await axios.put(`${base_url}enq/${enquiry.id}`,{status:enquiry.enquiryData},config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const createEnqs=async(enquiry)=>{
    const response=await axios.post(`${base_url}enq/`,enquiry,config);

// if(response.data){
//     localStorage.setItem('user',JSON.stringify(response.data))
// }
return response.data;

}
const enquiryService={
    updateEnqs,
    getEnq,
    getEnqs,
    createEnqs,
    deleteEnq
}
export default enquiryService;