import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
const SingleProduct = () => {
    const [orderedProduct, setorderProduct] = useState(true);
    return (
        <>
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="description-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className='bg-white p-3'>
                                    <h4 className="Description"></h4>
                                    <p> sdfsdfsdfskdfhkjsdhfklshfkl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="reviews-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
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
                                    <div className="reiview-form">
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
                                                <button className="button border-0">

                                                    Submit Reviews

                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured-wrapper py-5 home-wrapper-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="section-heading">Featured Collection</h3>
                            </div>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
export default SingleProduct
