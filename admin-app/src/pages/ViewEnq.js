import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi";
import { getAEnq } from '../features/enq/enqSlice';
const ViewEnq = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const getEnqId = location.pathname.split("/")[3];
    const enqState = useSelector((state) => state.enquiry);
    const { enquiryName, enquiryEmail, enquiryMobile, enquiryComment, enquiryStatus } = enqState;
    useEffect(() => {
        dispatch(getAEnq(getEnqId));
    })
    const goBack=()=>{
        navigate(-1);

    }
    return (
        <div>
           <div className='d-flex justify-content-between align-items-center'>
               <h3 className='mb-4 title'>
                   View Enquiry

               </h3>
               <button className='bg-transparent border-0 fs-6 mb-0 d-flex align-items-center gap-1' onClick={goBack}>
                   <BiArrowBack className='fs-5'/>Go Back
               </button>

           </div>
            <div className='mt-5 bg-white p-4 d-flex gap-3 flex-column rounded-3'>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Name:</h6>
                    <p className='mb-0'>{enquiryName}</p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h5 className='mb-0'>Mobile:</h5>
                    <p className='mb-0'>{enquiryMobile}</p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Mobile:</h6>
                    <p className='mb-0'>
                        <a href={`tel:+84${enquiryMobile}`}>

                            {enquiryMobile}

                        </a>
                    </p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Email:</h6>
                    <p className='mb-0'>
                        <a href={`mailto:${enquiryEmail}`}>{enquiryEmail}</a>
                    </p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Comment:</h6>
                    <p className='mb-0'>
                        <a href={`mailto:${enquiryComment}`}>{enquiryComment}</a>
                    </p>
                </div>

                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Status:</h6>
                    <p className='mb-0'>
                        <a href={`mailto:${enquiryStatus}`}>{enquiryStatus}</a>
                    </p>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <h6 className='mb-0'>Change Status:</h6>
                <div>
                    <select className='form-control form-select' id='' defaultValue={enquiryStatus?enquiryStatus:"Submitted "}>
                        <option value='default'> 
                        Submited
                        </option>
                        <option value=''> 
                        Resolved
                        </option>
                        <option value=''> 
                        Contacted
                        </option>
                        <option value=''> 
                        In progress
                        </option>
                    </select>
                </div>
                </div>



            </div>
        </div>
    )
}

export default ViewEnq
