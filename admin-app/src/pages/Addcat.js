import { React, useEffect, useState } from 'react'
import {  toast } from 'react-toastify';
import CustomInput from './CustomInput'
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { updateCategory,createCategorys,getCategories,getACategory } from '../features/pcategory/pcategorySlice';
import { resetState } from '../features/coupon/couponSlice';

let userSchema = Yup.object({
    title: Yup.string().required("Category name is Required"),
});
const Addcat = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location =useLocation();
  const getCatId=location.pathname.split("/")[3];
    const newCategory=useSelector((state)=>state.pCategory);
    const {isSuccess,isLoading,isError,createdCategorys,updatedCategory,categoryName,deletedCategory}=newCategory;
    useEffect(()=>{
        if(getCatId!==undefined)
        {
            dispatch(getACategory(getCatId));
            formik.values=categoryName;
        }
        else{
            dispatch(resetState());
            // navigate('/admin/list-category')
        }
    },[getCatId])

    useEffect(()=>{
        if(isSuccess && createdCategorys){          
            toast.success('🦄 Category Added Successfully!' );
        }
        if(isError){
            toast.error('🦄 something  went  Wrong when add brand!' );
        }
          if(updatedCategory && isSuccess){
            toast.success("category UPDATE successfully");
            navigate('/admin/list-category')
        }
    },[isSuccess,isLoading,isError])

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            title: categoryName || '',
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
             if(getCatId!==undefined){
                 const data={id:getCatId,categoryData:values}
                 dispatch(updateCategory(data))
                dispatch(resetState());
             }else{
                 dispatch(createCategorys(values));
                 formik.resetForm();
                 setTimeout(()=>{
                     dispatch(resetState())
                 },400)
             } 
            
            // alert(JSON.stringify(values));
            dispatch(createCategorys(values));
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            setTimeout(()=>{
                    // navigate('/admin/list-category');
                    dispatch(resetState());
            },300)
        },
    });
  return (
    <div>
        <h3 className="mb-4 title">{getCatId!==undefined? "Edit ":"Add "}Category</h3>
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <CustomInput type="text" label="Enter Category" 
                id='category' 
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