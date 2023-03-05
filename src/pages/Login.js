import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
  <>
        <div className="login-wrapper  py-5 home-wrapper-2">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className="text-center mb-3">Login</h3>

                            <form action="" className="d-flex flex-column gap-15" >
                                <div className="">
                                    <input type="email" name='email' placeholder='email' className='form-control'/>
                                </div>
                                <div className="mt-3">
                                    <input type="password" name='password' placeholder='password' className='form-control'/>
                                </div>
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

        </div>
        </div>
  </>

  )
}

export default Login
