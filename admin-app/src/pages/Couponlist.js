import React from 'react'
import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { useEffect } from 'react';
import { getAllcoupons,resetState } from '../features/coupon/couponSlice';
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
      title: 'Discount',
      dataIndex: 'discount',
    },
    {
      title: 'Expiry',
      dataIndex: 'expiry',
    },
    {
        title: 'Action',
        dataIndex: 'action',
      },
  ];
const Couponlist= () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getAllcoupons())},[]);
  const couponsState=useSelector((state)=>state.coupon.coupons);
  const data1=[];
  for (let i = 0; i < couponsState.length; i++) {
    data1.push({
      key: i+1,
      name: couponsState[i].name,
      discount:couponsState[i].discount,
      expiry:new Date(couponsState[i].expiry).toLocaleString(),
      action:(<>
        <Link to='/' className='fs-3 text-danger'>
            <BiEdit/>
        </Link>
        <Link to="/" className="ms-3 fs-3 text-danger">
          <AiFillDelete/>
        </Link>
        </>)
  
      });
    }
  return (
    <div>
    <h3 className="mb-4 title">Coupon List </h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
  }
export default Couponlist 