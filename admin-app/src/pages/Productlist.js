import React, { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getaProduct } from '../../../Backend/controller/productCtrl';
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
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

const Productlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getaProducts());
  },[])
  const productState=useSelector((state)=>state.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i+1,
      title: productState[i].title,
      price: `$ ${productState[i].price}`,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div>
    <h3 className="mb-4">Bloglist</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Productlist