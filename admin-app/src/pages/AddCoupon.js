import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { createBrands } from '../features/brand/brandSlice';
import { resetState } from '../features/brand/brandSlice';
import { createcoupons } from '../features/coupon/couponSlice';
let userSchema = Yup.object({
    name: Yup.string().required("Coupon name is Required"),
    expiry:Yup.string().required("expiry required"),
    discount:Yup.string().required("Discount required"),
});
const AddCoupon = () => {
  const dispatch=useDispatch();
    const newCoupon=useSelector((state)=>state.coupon.coupons);
    const {isSuccess,isLoading,isError,createdCoupons}=newCoupon;
    useEffect(()=>{
        if(isSuccess && createdCoupons){          
            toast.success('🦄 Coupons Added Successfully!' );
        }
        if(isError){
            toast.error('🦄 something  went  Wrong when add brand!' );
        }
    },[isSuccess,isLoading,isError])

    const formik = useFormik({
        initialValues: {
        name:'',
        expiry:'',
        discount:''
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
            dispatch(createcoupons(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
            dispatch(resetState());
            },3000)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">Add Coupon</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type="text" label="Enter name" name ='name' id='name' 
                        onChng={formik.handleChange('name')}
                        onBlr={formik.handleBlur('name')}
                        val={formik.values.name } />
                     <div className='error'>
                            {
                                formik.touched.name && formik.errors.name
                            }
                        </div>   
                <CustomInput type="date" label="Enter Expiry Date" name ='expiry' id='expiry' 
                        onChng={formik.handleChange('expiry')}
                        onBlr={formik.handleBlur('expiry')}
                        val={formik.values.expiry} />
                     <div className='error'>
                            {
                                formik.touched.expiry&& formik.errors.expiry
                            }
                        </div>   
                <CustomInput type="number" label="Enterdiscount" name ='discount' id='discount' 
                        onChng={formik.handleChange('discount')}
                        onBlr={formik.handleBlur('discount')}
                        val={formik.values.discount } />
                     <div className='error'>
                            {
                                formik.touched.discount && formik.errors.discount
                            }
                        </div>   
                <button type="submit" className='btn btn-success border-0 rounded-3 my-5'>
Add COupon 
                    </button>

            </form>
        </div>
    </div>
  )
}

export default AddCoupon