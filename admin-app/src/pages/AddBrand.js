import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { createBrands } from '../features/brand/brandSlice';
import { resetState } from '../features/brand/brandSlice';
let userSchema = Yup.object({
    title: Yup.string().required("Brand name is Required"),
});
const AddBrand = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const newBrand=useSelector((state)=>state.brand);
    const {isSuccess,isLoading,isError,createdBrands}=newBrand;
    useEffect(()=>{
        if(isSuccess && createdBrands){          
            toast.success('🦄 Brand Added Successfully!' );
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
            dispatch(createBrands(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
            dispatch(resetState());
            },3000)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">Add Brand</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type="text" label="Enter brand" id='brand' 
                        onChng={formik.handleChange('title')}
                        onBlr={formik.handleBlur('title')}
                        val={formik.values.title} />
                     <div className='error'>
                            {
                                formik.touched.title && formik.errors.title
                            }
                        </div>   
                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                        Add Brand
                    </button>

            </form>
        </div>
    </div>
  )
}

export default AddBrand