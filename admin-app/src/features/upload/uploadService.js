import axios from 'axios';
import {config} from "../../utils/axiosconfig"
import { base_url } from '../../untils/base_url';
import { defaultLocale } from 'yup';


const uploadImg= async (data)=>{
    const response=await axios.post(`${base_url}`,data,config);
    return   response.data
};

const uploadService={
    uploadImg,
}

export default uploadService;

