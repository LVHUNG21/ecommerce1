import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { createColor} from '../features/color/colorSlice';

let userSchema = Yup.object({
    title: Yup.string().required("Color name is Required"),
});
const Addcolor= () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const newColor=useSelector((state)=>state.color);
    const {isSuccess,isLoading,isError,createdColor}=newColor;
    useEffect(()=>{
        if(isSuccess && createdColor){          
            toast.success('🦄 Color Added Successfully!' );
        }
        if(isError){
            toast.error('🦄 something  went  Wrong when add brand!' );
        }
    },[isSuccess,isLoading,isError,createdColor])

    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
          dispatch(createColor(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
                    navigate('/admin/list-color');
            },3000)
        },
    });
  return (
    <div>
        <h3 className="mb-4title">Add Color</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput  type="color"  label="Enter Product Color" 
                id='color' 
                onChng={formik.handleChange('title')}
                onBlr={formik.handleBlur('title')}
                val={formik.values.title}/>
                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
                        Add Color
                    </button>

            </form>
        </div>
    </div>
  )
}

export default Addcolor