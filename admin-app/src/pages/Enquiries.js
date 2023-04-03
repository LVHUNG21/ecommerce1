import { React, useEffect, useState } from 'react'
import { Table } from "antd";
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { resetState ,deleteAEnq,getEnqs,updateAEnq} from '../features/enq/enqSlice';
import CustomModal from '../component/CustomModal';


const columns = [
  {
    title: 'Sno',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Moblie',
    dataIndex: 'mobile',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
  dataIndex: 'action',
  },
];
const Enquiries = () => {
  const [open, setOpen] = useState(false);
  const [enquiryId, setenquiryId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setenquiryId(e);
  }
  const hideModal = () => {
    setOpen(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(
      getEnqs())
  }, []);
  const enquiryState = useSelector((state) => state.enquiry.enquirys);
  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i+1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      status: (
        <>
          <select className='form-control form-select' id=''
          onChange={(e)=>setEnquiryStatus(e.target.value,enquiryState[i]._id)}
           defaultValue={enquiryState[i].status?enquiryState[i].status:"Submitted "}>
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
        </>
      ),
      action: (
        <>
          <Link to={`/admin/enquiries/${enquiryState[i]._id}`}className='fs-3 text-danger'>
            <AiOutlineEye/>
          </Link>
          <button to="/" className="ms-3 fs-3 text-danger bg-transparent border-0" 
              onClick={()=>showModal(enquiryState[i]._id)}>
          <AiFillDelete/>
        </button>
        </>
      )
    });
  }
const setEnquiryStatus=async(e)=>{
  const data={id:i,enquiryData:e};
  dispatch(updateAEnq(data))

}
  const deleteEnq  =async(e)=>{
    await dispatch(deleteAEnq(e));
    setOpen(false);
   const getall= await dispatch(getEnqs());
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquires</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal hideModal={hideModal} open ={open}   performAction={()=>{deleteEnq(enquiryId)}} 
     title="Are you sure you want to delete enquiry ?" 
      />

    </div>
  )
}
export default Enquiries