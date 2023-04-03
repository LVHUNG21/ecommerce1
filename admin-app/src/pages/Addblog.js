import { React, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Dropzone from 'react-dropzone'
import { uploadImg } from '../features/upload/uploadSilde';
import { delImg } from '../features/upload/uploadSilde';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput'
import ReactQuill from 'react-quill';
import {InboxOutlined} from "@ant-design/icons"
import {  toast } from 'react-toastify';
import {getBlogCategory, resetState} from '../features/bcategory/bcategorySlice'
// import "react-quill/dist/quill.snow.css"
// import { Stepper } from 'react-form-stepper';


import { message, Upload } from 'antd';
import { createBlog, updateBlog,getABlog } from '../features/blogs/blogSlice';
const { Dragger } = Upload;
let userSchema = Yup.object({
    title: Yup.string().required("tite is Required"),
    description: Yup.string().required("Description is Required"),
  
    category: Yup.string().required("category is required"),
   
});
const Addblog = () => {
    const dispatch = useDispatch();
    
    const navigate=useNavigate();
    const location=useLocation();
      const getBlogId=location.pathname.split("/")[3];
        const newBlog=useSelector((state)=>state.blogs);
        const {isSuccess,isLoading,isError,createdBlog,updatedBlog,blogName,blogDes,blogCategory,blogImages}=newBlog;
      useEffect(()=>{
      if(getBlogId!==undefined){
            dispatch(getABlog(getBlogId));
            // formik.values=blogName;
            img.push(blogImages);
      }else{
        dispatch(resetState());
      }
      },[getBlogId])

    const [image, setImages] = useState([]);
    useEffect(() => {
        dispatch(resetState());
        dispatch(getBlogCategory());
    }, []);

    const imgState=useSelector((state)=>state.upload.images);
    const bCatState=useSelector((state)=>state.bCategory.bCategories);
    useEffect(()=>{
        if(isSuccess && createdBlog){          
            toast.success('🦄 Blog Added Successfully!' );
            navigate('/admin/blog-list')
        }
        if(isError){
            toast.error('🦄 something  went  Wrong!' );
        }
         if(updatedBlog && isSuccess){
            toast.success("Blog UPDATE successfully");
            navigate('/admin/blog-list')
        }
    },[isSuccess,isLoading,isError])
    
    const img= []
    imgState.forEach((element) => {
        img.push({
            public_id: element.public_id,
            url: element.url,
        })
    });
    useEffect(()=>{
        formik.values.images=img;
},[blogImages])
  
    const formik = useFormik({
        initialValues: {
            title: blogName ||'',
            description: blogDes ||'',
           
            category:blogCategory || '',
           
            images: "",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            if(getBlogId!==undefined){
                const data={id:getBlogId,blogData:values}
                    dispatch(updateBlog(data));
                    dispatch(resetState())
            }else{
                dispatch(createBlog(values));
            formik.resetForm();
            setTimeout(()=>{
                dispatch(resetState())
            },400)

            }
           
        },
    });
   
    return (
        <div><h3 className="mb-4 title">{getBlogId !== undefined ? "Edit" :"Add"} Blog</h3>
            
            <div className=''>
                <form action="" onSubmit={formik.handleSubmit}>
                    
                    <div className="mt-4">
                    <CustomInput type='text'
                    name='title' 
                     label='Enter blog title'  
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")} 

                        val={formik.values.title}/>
                    </div>
                     <div className='error'>
                            {
                                formik.touched.title && formik.errors.title
                            }
                        </div>
                    <select className="form-control py-3  mt-3"  
                        name="category"
                        onChange={formik.handleChange('category')}
                        onBlur={formik.handleBlur('category')}
                        value={formik.values.category}>
                        <option value="">
                            Select Blog Category
                        </option>
                         {bCatState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}
                    </select>
                    <div className='error'>
                        {
                            formik.touched.category && formik.errors.category
                        }
                    </div>
                    <ReactQuill theme="snow" className='mt-3'
                     name="description"
                        onChange={formik.handleChange('description')}
                        value={formik.values.description}
                     />
                      <div className='error'>
                            {
                                formik.touched.description && formik.errors.description
                            }
                        </div>
                     <div className='bg-white border-1 p-5 text-center mt-3'>
                        <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages d-flex flex-wrap mt-3 gap-3"> 
                    {imgState.map((i,j)=>{
                        return  <div className='position-relative' key={j}>
                            <button type='button' onClick={()=>dispatch(delImg(i.public_id))} className='btn-close position-absolute' style={{top:"10px",right:"10px"}}>

                            </button>
                        <img src={i.url} alt='' width={200} height={200}/>
                        </div>
                    })}
                       
                    </div>
                    <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                        Add Blog
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Addblog