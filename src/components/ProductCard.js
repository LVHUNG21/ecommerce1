import React from 'react'
import ReactStars from 'react-rating-stars-component'
const ProductCard = () => {
    return (
            <div className="col-3">
                <div className="product-card">
                    <div className="product-image">
                        <img src='images/watch.jpg' alt='product image' />
                    </div>
                    <div className="product-details"></div>
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headphone bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />,
                    <p className="price">$1000</p>
                </div>

            </div>

    )
}

export default ProductCard
