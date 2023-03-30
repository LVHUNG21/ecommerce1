import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { createCategorys } from '../features/pcategory/pcategorySlice';

let userSchema = Yup.object({
    title: Yup.string().required("Category name is Required"),
});
const Addcat = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const newCategory=useSelector((state)=>state.pCategory);
    const {isSuccess,isLoading,isError,createdCategorys}=newCategory;
    useEffect(()=>{
        if(isSuccess && createdCategorys){          
            toast.success('🦄 Category Added Successfully!' );
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
            dispatch(createCategorys(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
                    navigate('/admin/list-category');
            },3000)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">Add  Catagory</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type="text" label="Enter Category" 
                id='Category' 
                onChng={formik.handleChange('title')}
                onBlr={formik.handleBlur('title')}
                val={formik.values.title}
                />
                     <div className='error'>
                            {
                                formik.touched.title && formik.errors.title
                            }
                        </div>   
                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                        Add  Category
                    </button>

            </form>
        </div>
    </div>
  )
}

export default Addcat