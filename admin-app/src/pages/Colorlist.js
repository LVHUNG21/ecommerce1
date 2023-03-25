import React from 'react'
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getColors } from '../features/color/colorSlice';
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
  const Colorlist =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getColors());
    },[]);
    const colorState=useSelector((state)=>
      state.color.colors
    )
  
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i+1,
      name:colorState[i].title, 
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
const Colorlist = () => {
  return (
    <div>
    <h3 className="mb-4 title">Color list</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}
  }

export default Colorlist