import React from 'react'


import CustomInput from './CustomInput';

const Resetpassword= () => {

    return (
        <div className='py-5' style={{ backgroud: "#ffd333", minHeight: "100" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className="text-center">Forgotpassword</h3>
                <p className="text-center">Please Enter new password</p>
                <form action="">
                    <CustomInput type="password" label="New Password" id="pass" />
                    <CustomInput type="password" label="Confirm Password" id="Confirmpass" />
                    <button className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ background: "ffd333" }} type="submit">
                       Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Resetpassword 