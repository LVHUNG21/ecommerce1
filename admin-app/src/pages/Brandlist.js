import {React,useState} from 'react'
import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { useEffect } from 'react';
import { resetState } from '../features/coupon/couponSlice';
import CustomModal from '../component/CustomModal';
import { deleteABrand } from '../features/brand/brandSlice';
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
        title: 'Action',
        dataIndex: 'action',
      },
  ];
const Brandlist= () => {
  const [open,setOpen]=useState(false);
  const [brandId,setbrandId]=useState("");
  const showModal=(e)=>{
    setOpen(true);
    setbrandId(e);
  }
  const hideModal=()=>{
    setOpen(false);
  }
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(resetState()); 
    dispatch(
    getBrands())},[]);
  const brandState=useSelector((state)=>state.brand.brands);
  const data1=[];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i+1,
      name: brandState[i].title,
      action:(<>
        <Link to={`/admin/brand/${brandState[i]._id}`}   className='fs-3 text-danger'>
            <BiEdit/>
        </Link>
        <button to="/" className="ms-3 fs-3 text-danger bg-transparent border-0" 
        onClick={()=>showModal(brandState[i]._id)}>
          <AiFillDelete/>
        </button>
        </>)
  
      });
    }
    const deleteBrand= async (e)=>{
      await dispatch(deleteABrand(e));
      setOpen(false);
     const getall= await dispatch(getBrands());
     
    }
  return (
    <div>
    <h3 className="mb-4 title">Brandlist</h3>
    <div>

    <Table columns={columns} dataSource={data1} />
    </div>
    <CustomModal hideModal={hideModal} open ={open}   performAction={()=>{deleteBrand(brandId)}} 
     title="Are you sure you want to delete brand ?" 
      />

</div>
  )
  }
export default Brandlist 