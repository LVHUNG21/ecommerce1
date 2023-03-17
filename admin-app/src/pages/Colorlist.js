import React from 'react'
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
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
        title: 'Status',
        dataIndex: 'status',
      },
  ];
  const Colorlist =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getColors());
    },[]);
    const colorState=useSelector((state)=>{
      state.color.colors;
    })
  
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
const Colorlist = () => {
  return (
    <div>
    <h3 className="mb-4 title">Colorlist</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}
  }

export default Colorlist