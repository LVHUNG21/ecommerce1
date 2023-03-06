import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import ProductCard from '../components/ProductCard'
import watch from "../images/watch.jpg"
import Container from '../components/Container';

const SingleProduct = () => {
    const props = { width: 400, height: 250, zoomWidth: 600, img: "images/watch.jpg" };

    const [orderedProduct, setorderProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    return (
        <>
            <Container  class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="images/watch" alt="" className='img-fluid' /></div>
                                <div><img src="images/watch" alt="" className='img-fluid' /></div>
                                <div><img src="images/watch" alt="" className='img-fluid' /></div>
                                <div><img src="images/watch" alt="" className='img-fluid' /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">

                                <h3 className="title">
                                    Kids Headphone Builk 10 Pack Multi Colored For Students
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    $100
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        edit='false'
                                        value='3'

                                        activeColor="#ffd700"
                                    />,
                                    <p className="mb-0 t-review">
                                        (2 Reviews)
                                    </p>
                                </div>
                                <a className="review-btn" href="#review">Write a reviews</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div>
                                    <div className="d-flex gap-10 align-items-center my-2" >
                                        <h3 className='product-heading'>Type:</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2" >
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2" >
                                        <h3 className='product-heading'>Category:</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2" >
                                        <h3 className='product-heading'>Tags:</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2" >
                                        <h3 className='product-heading'>Availablity:</h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3" >
                                        <h3 className='product-heading'>Size:</h3>
                                        <div className="d-flex flex-wrap gap-15"></div>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3" >
                                        <h3 className='product-heading'>Color:</h3>
                                        <Color></Color>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3" >
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div className="">
                                            <input type="number" className='form-control' name="" style={{ "width": "70px" }} min={1} max={10} id="" />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='botton border-0' type='submit'>
                                                Add to Cart
                                            </button>
                                            <button className='button singup'>
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=""><TbGitCompare className="fs-5 me-2" /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><AiOutlineHeart className="fs-5 me-2" />Add to Wishlish</a>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column align-items-center  my-3" >
                                        <h3 className='product-heading'>Shipping & Returns:</h3>
                                        <p className="product-data">Free Shipping <b>5-10 business days!</b></p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-3" >
                                        <h3 className='product-heading'>Product Link</h3>
                                        <a href="javascript:void(0)" onClick={ ()=>{copyToClipboard("https://thanglong.edu.vn/")}}>Copy Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container class1="description-wrapper py-5 home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="Description"></h4>
                                <div className='bg-white p-3'>
                                    <p> sdfsdfsdfskdfhkjsdhfklshfkl</p>
                                </div>
                            </div>
                        </div>
                </Container>
                <Container id="reivew" class1="reviews-wrapper home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <h3 id="reivew" >Reviews</h3>
                                <div className="review-inner-wrapper">
                                    <div className="review-head d-flex justify-content-between align-items-end">
                                        <div>
                                            <h4 className="mb-2">Customer Review</h4>
                                            <div className="d-flex align-items-center gap-10">
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit='false'
                                                    value='3'

                                                    activeColor="#ffd700"
                                                />,
                                                <p className="mb-0">
                                                    Base on 2 Reviews
                                                </p>
                                            </div>
                                        </div>
                                        {orderedProduct &&
                                            (<div>
                                                <a className='text-dark text-decoration-underline' href=""> Write a Review</a>
                                            </div>)}
                                    </div>
                                    <div id="review" className="reiview-form py-4">
                                        <h4 >
                                            Write a Review
                                        </h4>
                                        <form action="" className='d-flex flex-column gap-15'>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit='true'
                                                    value='3'

                                                    activeColor="#ffd700"
                                                />,
                                            </div>

                                            <div>
                                                <textarea name="" id="" placeholder='Comments' className="w-100 form-control" cols="30" row="4" />
                                            </div>
                                            <div>
                                                <div className='d-flex justify-content-end'></div>
                                                <button className="button border-0">

                                                    Submit Reviews

                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews mt-3">
                                        <div className="review">
                                            <div className='d-flex gap-10 align-items-center'>
                                                <h6 className="mb-0"> NavDeep</h6>
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit='false'
                                                    value='3'

                                                    activeColor="#ffd700"
                                                />,

                                            </div>
                                            <p className='mt-3'>lorem ipsum folor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Container>
                <Container class1="featured-wrapper py-5 home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="section-heading">Featured Collection</h3>
                            </div>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                    </div>
                </Container>
        </>
    )
}
export default SingleProduct
