import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
const Login = () => {
  return (
  <>
        <Container class1="login-wrapper  py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Login</h3>

                            <form action="" className="d-flex flex-column gap-15" >
                                <CustomInput type="email" name='email' placeholder='email' />
                                <CustomInput type="password" name='password' placeholder='Password' />
                                <CustomInput type="email" name='email' placeholder='email' />
                                <div>
                                    <Link to='/forgot-password'>Forgot Password</Link>
                                    <div className='mt-3 d-flex jusitfy-content-center gap-15 align-items-center'>
                                        <button className='botton border-0' type='submit'>
                                            Login
                                        </button>
                                        <Link to='/signup' className='button singup'>
                                        SignUp
                                        </Link>
                                         
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

export default Login
