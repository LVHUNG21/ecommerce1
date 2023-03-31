import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { newBlogCategory, resetState } from '../features/bcategory/bcategorySlice';
let userSchema = Yup.object({
    title: Yup.string().required("Blog category name is Required"),
});

const Addblogcat = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const newBlogCategory1=useSelector((state)=>state.bCategory);
    const {isSuccess,isLoading,isError,createdBlogCategory}=newBlogCategory1;
    useEffect(()=>{
        if(isSuccess && createdBlogCategory){          
            toast.success('🦄 Blog Category Added Successfully!' );
        }
        if(isError){
            toast.error('🦄 something  went  Wrong when add brand!' );
        }
    },[isSuccess,isLoading,isError])

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
            dispatch(newBlogCategory(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
                dispatch(resetState());

                    navigate('/admin/blog-category-list');
            },3000)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">Add Blog Catagor</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type="text" label="Enter Blog category" id='blogcat' 
                        onChng={formik.handleChange('title')}
                        onBlr={formik.handleBlur('title')}
                        val={formik.values.title}/>
                        
                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                        Add Blog Category
                    </button>

            </form>
        </div>
    </div>
  )
}

export default Addblogcat