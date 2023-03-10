

import React, { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

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
      title: 'Product',
      dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
      },
  ];
 
const Orders= () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getOrders());
  },[])
  const orderState=useSelector((state)=>state.auth.orders);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i+1,
      title: orderState[i].title,
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
    <h3 className="mb-4 title">Orders</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Orders 