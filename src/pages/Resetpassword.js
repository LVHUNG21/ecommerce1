import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container';
const Resetpassword = () => {
    return (
        <>
            <Container class1="login-wrapper  py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3"></h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div className="">
                                    <input type="password" name='password' placeholder='Password' className='form-control' />
                                </div>
                                <div className="mt-3">
                                    <input type="password" name='confpassword' placeholder='Confirm Password' className='form-control' />

                                </div>
                                <div>
                                    <div className='mt-3 d-flex jusitfy-content-center gap-15 align-items-center'>
                                        <button className='botton border-0'>
                                            OK
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

export default Resetpassword
