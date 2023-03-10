import React from 'react'
import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { getBrands } from '../features/brand/brandSlice';
import { useEffect } from 'react';
import { getCategories } from '../features/pcategory/pcategorySlice';
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
const Categorylist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCategories())},[]);
    const pCatState=useSelector((state)=>state.pCategory.pCategories);
    const data1=[];
    for (let i = 0; i < pCatState.length; i++) {
      data1.push({
        key: i+1,
        name: pCatState[i].title,
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
    <h3 className="mb-4 title ">Product category</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Categorylist