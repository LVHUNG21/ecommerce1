import { React, useEffect, useState } from 'react'
import CustomInput from './CustomInput'
import { InboxOutlined } from "@ant-design/icons"
import ReactQuill from 'react-quill';
import { Upload, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getCategories } from '../features/pcategory/pcategorySlice';
import Multiselect from "react-widgets/Multiselect";
import Combobox from 'react-widgets/Combobox';
import "react-widgets/styles.css";
import { getBrands } from '../features/brand/brandSlice';
import "react-quill/dist/quill.snow.css";
import { getColors } from '../features/color/colorSlice';
import Dropzone from 'react-dropzone'
import { uploadImg } from '../features/upload/uploadSilde';
import { delImg } from '../features/upload/uploadSilde';
import { createProducts } from '../features/product/productSlice';
const { Dragger } = Upload;
let userSchema = Yup.object({
    title: Yup.string().required("tite is Required"),
    description: Yup.string().required("Description is Required"),
    price: Yup.number().required("pRICE IS REQUIRED"),
    brand: Yup.string().required("brand is required"),
    category: Yup.string().required("category is required"),
    color: Yup.array().required('color is required'),
    quantity: Yup.number().required('Quantity is required '),
});
const AddProduct = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState([]);
    const [image, setImages] = useState([]);
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
    }, []);

    const brandState = useSelector((state) => state.brand.brands);
    const catState = useSelector((state) => state.pCategory.pCategories);
    const colorState = useSelector((state) => state.color.colors);
    const imgState=useSelector((state)=>state.upload.images);

    const colors = []
    colorState.forEach((element) => {
        colors.push({
            _id: element._id,
            color: element.title
        })
    });
    const img= []
    imgState.forEach((element) => {
        img.push({
            _id: element.public_id,
            url: element.url,
        })
    });
    useEffect(()=>{
        formik.values.color=color;
        formik.values.images=img;
    },[color,img])
  
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            category: '',
            color: '',
            quantity: '',
            images:"",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
            dispatch(createProducts(values));
            // alert(JSON.stringify(values, null, 2));
        },
    });
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
        console.log(e);

    }
    return (
        <div>
            <h3 className="mb-4 title">AddProduct
            </h3>
            <div>
                <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
                    <CustomInput name='title' onChng={formik.handleChange('title')} onBlr={formik.handleBlur('title')} type='text' label='Enter Product title' />
                    <div className='error'>
                        {
                            formik.touched.title && formik.errors.title
                        }
                    </div>
                    <div className='mb-3'>
                        <ReactQuill theme="snow"
                            type='text'
                            name="description"
                            onChange={formik.handleChange('description')}
                            value={formik.values.description} />

                        <div className='error'>
                            {
                                formik.touched.description && formik.errors.description
                            }
                        </div>
                    </div>
                    <CustomInput name='price' type='number'
                        onChng={formik.handleChange("price")}
                        onBlr={formik.handleBlur("price")}
                        label='Enter Product price' />
                    <div className='error'>
                        {
                            formik.touched.price && formik.errors.price
                        }
                    </div>
                    <select className="form-control py-3 mb-3" name="brand"
                        onChange={formik.handleChange('brand')}
                        onBlur={formik.handleBlur('brand')}
                        value={formik.values.brand}>
                        <option value="">
                            Select Brand
                        </option>
                        {brandState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}
                    </select>
                    <div className='error'>
                        {
                            formik.touched.brand && formik.errors.brand
                        }
                    </div>

                    <select className="form-control py-3 mb-3"
                        name="category"
                        onChange={formik.handleChange('category')}
                        onBlur={formik.handleBlur('category')}
                        val={formik.values.category}>
                        <option value="">
                            Select Category
                        </option>

                        {catState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}

                    </select>
                    <div className='error'>
                        {
                            formik.touched.category && formik.errors.category
                        }
                    </div>
                    <Multiselect
                        dataKey="id"
                        textField="color"
                        defaultValue={[1]}
                        onChange={(e) => { setColor(e) }}
                        data={
                            colors
                        }
                    />;
                    <div className='error'>
                        {
                            formik.touched.color && formik.errors.color
                        }
                    </div>

                    <CustomInput name='quantity' type='number'
                        label='Enter Product Quantity'
                        onChng={formik.handleChange('quantity')}
                        onBlr={formik.handleBlur('quantity')}
                        val={formik.values.quantity} />
                    <div className="error">
                        {
                            formik.touched.quantity && formik.errors.quantity
                        }
                    </div>
                    <div className='bg-white border-1 p-5 text-center'>
                        <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages d-flex"> 
                    {imgState.map((i,j)=>{
                        return  <div className='position-relative' key={j}>
                            <button type='button' onClick={()=>dispatch(delImg(i.public_id))} className='btn-close position-absolute' style={{top:"10px",right:"10px"}}>

                            </button>
                        <img src={i.url} alt='' width={200} height={200}/>
                        </div>
                    })}
                       
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5' type="submit">
                        Add product
                    </button>
                </form>
            </div>
        </div >
    );
};


export default AddProduct