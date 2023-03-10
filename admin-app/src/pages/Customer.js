import React, { useEffect } from 'react'
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../features/customer/customerSlide';
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
        title: 'Moblie',
        dataIndex: 'mobile',
      },
  ];

const Customers = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getUser())
  })
  const customerstate=useSelector((state)=>state.customer.customers)
  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if(customerstate[i].role !== "admin"){
    data1.push({
      key: i+1,
      name:customerstate[i].firstname + "" +customerstate[i].lastname,
      email: customerstate[i].email,
      mobile:customerstate[i].mobile,
    });
  }
  }
  const {data}=customerstate;
  return (
    <div>
    <h3 className="mb-4 title">Customers</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Customers 