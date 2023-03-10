import React, { useEffect } from 'react'
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import {Table} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {getProduct} from "../features/product/productSlice";
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
     
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
    title:"Categor",
    dataIndex:'category',
    sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title:"Color",
      dataIndex:'color',
    },
    {
        title: 'Price',
        dataIndex: 'price',sorter: (a, b) => a.price.length - b.price.length,
      },
      {
        title:"Action",
        dataIndex:"action",
  
      }
  ];

const Productlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProduct());
  },[])
  const productState=useSelector((state)=>state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i+1,
      title: productState[i].title,
      brand:productState[i].brand,
      category:productState[i].category,
      price: `$ ${productState[i].price}`,
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
    <h3 className="mb-4">Bloglist</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Productlist