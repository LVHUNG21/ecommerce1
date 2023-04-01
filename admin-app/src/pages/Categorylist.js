import {useState,React} from 'react'
import {Table} from "antd";
import {BiEdit} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { getBrands } from '../features/brand/brandSlice';
import { deleteACategory } from '../features/pcategory/pcategorySlice';

import { useEffect } from 'react';
import { getCategories } from '../features/pcategory/pcategorySlice';
import CustomModal from '../component/CustomModal';
import { resetState } from '../features/pcategory/pcategorySlice';
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
  const [open,setOpen] =useState(false);
  const [catId,setCatId]=useState("");
  const showModal=(e)=>{
    setOpen(true);
    setCatId(e);
  }
  const hideModal=()=>{
    setOpen(false);
  }
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(resetState());
    dispatch(getCategories())},[]);
    const pCatState=useSelector((state)=>state.pCategory.pCategories);
    const data1=[];
    for (let i = 0; i < pCatState.length; i++) {
      data1.push({
        key: i+1,
        name: pCatState[i].title,
        action:(<>
          <Link to={`/admin/category/${pCatState[i]._id}`}className='fs-3 text-danger'>
              <BiEdit/>
          </Link>
          <button to="/" className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick={()=>showModal(pCatState[i]._id)}>
            <AiFillDelete/>
          </button>
          </>)
      });
    }
    const deleteCategory = async (e) => {
      try {
        await dispatch(deleteACategory(e));
        setOpen(false);
        const updatedCategories = await dispatch(getCategories());
        // console.log(updatedCategories); // check if categories array is updated
      } catch (error) {
        console.log(error);
      }
    };
    

  return (
    <div>
    <h3 className="mb-4 title ">Product category</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
    <CustomModal hideModal={hideModal} open ={open} 
    title="Are you sure you want to delete category"
    performAction={()=>{deleteCategory(catId)}}
    />
</div>
  )
}

export default Categorylist