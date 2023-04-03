


import React, { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {getOrders,getOrderById} from "../features/auth/authSlide"
i
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Count',
      dataIndex: 'count',
    },
    {
      title:'Color',
      dataIndex:'color',
    },
    {
      title:'Amount',
      dataIndex:'amount',
    },
    {
      title:'Date',
      dataIndex:'date',
    },
    {
        title: 'Action',
        dataIndex: 'action',
      },
  ]; 
const ViewOrder= () => {
  const location=useLocation();
  const userId=location.pathname.split("/")[3];

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getOrderById(userId));
  },[]);
  const orderState=useSelector((state)=>state.auth.orderbyuser[0].products);
  // console.log(orderState[3].orderby.firstname);
  console.log(orderState.length);

  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i+1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count:orderState[i].count,
      amount:orderState[i].product.price,
      color:orderState[i].product.color,
      date:orderState[i].product.createAt,
      action:(<>
      <Link to='/' className='fs-3 text-danger'>
          <BiEdit/>
      </Link>
      <Link to="/" className="ms-3 fs-3 text-danger">
        <AiFillDelete/>
      </Link>
      </>)
    });}

  return (
    <div>
    <h3 className="mb-4 title">View Orders</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default ViewOrder