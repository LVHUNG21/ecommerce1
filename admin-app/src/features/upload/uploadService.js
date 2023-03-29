import axios from 'axios';
import { config } from '../../untils/axiosconfig';
import { base_url } from '../../untils/base_url';
import { defaultLocale } from 'yup';


const uploadImg= async (data)=>{
    const response=await axios.post(`${base_url}upload/`,data,config);
    return response.data
};
const deleteImg= async (id)=>{
    const response=await axios.delete(`${base_url}upload/delete-img/${id}`,config);
    return response.data
};

const uploadService={
    uploadImg,
    deleteImg
}

export default uploadService;

