import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { createBrands, getABrand, updateBrand } from '../features/brand/brandSlice';
import { resetState } from '../features/brand/brandSlice';
let userSchema = Yup.object({
    title: Yup.string().required("Brand name is Required"),
});
const AddBrand = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const location=useLocation();
//   console.log(`brand:${location}`)
  const getBrandId=location.pathname.split("/")[3];
  console.log(`brand:${getBrandId}`)
    const newBrand=useSelector((state)=>state.brand);
    const {isSuccess,isLoading,isError,createdBrands,brandName,updatedBrand}=newBrand;
  useEffect(()=>{
  if(getBrandId!==undefined){
        dispatch(getABrand(getBrandId));
        formik.values=brandName;
  }else{
    dispatch(resetState());
  }
  },[getBrandId])

  console.log(location);
    useEffect(()=>{
        if(isSuccess && createdBrands){          
            toast.success('🦄 Brand Added Successfully!' );
        }
        if(isError){
            toast.error('🦄 something  went  Wrong when add brand!' );
        }
        if(updatedBrand && isSuccess){
            toast.success("Brand UPDATE successfully");
            navigate('/admin/list-brand')
        }
    },[isSuccess,isLoading,isError])

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            title: brandName || "",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            if(getBrandId!==undefined){
                const data={id:getBrandId,brandData:values}
                    dispatch(updateBrand(data));
            }else{
                dispatch(createBrands(values));
            formik.resetForm();
            setTimeout(()=>{
                dispatch(resetState())
            },400)

            }
            // alert(JSON.stringify(values));
            // dispatch(createBrands(values));
            // alert(JSON.stringify(values, null, 2));
            setTimeout(()=>{
            dispatch(resetState());
            },300)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">{getBrandId!==undefined?"Edit":"ADD"} Brand</h3>
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