import React from 'react'
import CustomInput from '../components/CustomInput';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import {resgisterUser} from '../features/user/userSlice';
import * as yup from 'yup';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
let signUpSchema= yup.object({
    firstname: yup.string().required('first name is required'),
    lastname: yup.string().required('last name is required'),
    email: yup.string().email("Moi nhap dung email").required("Email is Required"),
    mobile:yup.number().required('mobile No is Required'),
    password:yup.string().required('password is required'),

  });

const Signup = () => {
    const dispatch=useDispatch();
    // const [isSuccess,createdUser]=useSelector((state)=>state.);
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        mobile:'',
        password:'',

      },
      validationSchema:signUpSchema,

      onSubmit: values => {
               dispatch(resgisterUser(values));
        // if(isSuccess && createdUser){
        //     toast.info('User Createdd successfullly')
        // }
      }});
  return (
    <>
    <Container class1="login-wrapper  py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
                <h3 className="text-center mb-3">Signup</h3>
                    <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15" >
                        <CustomInput type="text" name='firstname' placeholder='first Name' values={formik.values.firstName} onChange={formik.handleChange('firstname')} onBlur={formik.handleBlur('firstname')}/>
                        <div className='error'>{formik.touched.firstName && formik.errors.firstName}</div>
                        <CustomInput type="text" name='lastname' placeholder='last Name' values={formik.values.lastName} onChange={formik.handleChange('lastname')} onBlur={formik.handleBlur('lastname')}/>
                        <div className='error'>{formik.touched.lastName && formik.errors.lastName}</div>
                        <CustomInput type="email" name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange('email')} onBlur={formik.handleBlur('email')}/>
                        <div className='error'>{formik.touched.email&& formik.errors.email}</div>
                        <CustomInput type="tel" name='mobile' placeholder='mobile' value={formik.values.mobile} onChange={formik.handleChange('mobile')} onBlur={formik.handleBlur('mobile')}/>
                        <div className='error'>{formik.touched.mobile&& formik.errors.mobile}</div>
                        <CustomInput type="password" name='password' placeholder='Password' values={formik.values.password} onChange={formik.handleChange('password')} onBlur={formik.handleBlur('password')}/>
                        <div className='error'>{formik.touched.password&& formik.errors.password}</div>
                        <div>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button type='submit' className='button border-0'>
                                   Sign Up 
                                </button>
                                 
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</Container>
</>
    )
}

export default Signup
