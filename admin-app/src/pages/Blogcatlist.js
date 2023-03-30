import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogCategory } from '../features/bcategory/bcategorySlice';
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'name',
    },
  
    {
        title: 'Action',
        dataIndex: 'action',
      },
  ];
const Blogcatlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getBlogCategory())
  })
  const bcatState=useSelector((state) => state.bCategory.bCategories);
  const data1=[];

  for (let i = 0; i <bcatState.length ; i++) {
    data1.push({
      key: i+1,
      name: bcatState[i].title,
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
    <h3 className="mb-4 title">Blog category list</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Blogcatlist