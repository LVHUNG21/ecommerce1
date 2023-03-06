import React from 'react'
import CustomInput from '../components/CustomInput';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
const Signup = () => {
  return (
    <>
    <Container class1="login-wrapper  py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
                <h3 className="text-center mb-3">Signup</h3>
                    <form action="" className="d-flex flex-column gap-15" >
                        <CustomInput type="text" name='name' placeholder='Name'/>
                        <CustomInput type="email" name='email' placeholder='email'/>
                        <CustomInput type="tel" name='mobile' placeholder='Moblie number'/>
                        <CustomInput type="password" name='password' placeholder='password'/>
                        <div>
                            <div className='mt-3 d-flex jusitfy-content-center gap-15 align-items-center'>
                                <button className='botton border-0'>
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
