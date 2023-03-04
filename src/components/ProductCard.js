import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    alert(location);
    return (
        <div>
            <div className={`${location.pathname == "/store" ? 'col-${grid}' : "col-3"}`}>

                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src='images/watch.jpg' className='img-fluid' alt='product image' />
                        <img src='images/watch-1.jpg' className='img-fluid' alt='product image' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit='false'
                            value='3'

                            activeColor="#ffd700"
                        />,
                        <p className={`description ${grip == 12 ? "d-block" : "d-none"}`}>
                            device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang

                        </p>

                        <p className="price">$1000</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg " alt='compare' />
                            </Link>
                            <Link>
                                <img src="images/view.svg " alt='view' />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg " alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/store" ? 'col-${grid}' : "col-3"}`}>

                <Link className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src='images/watch.jpg' className='img-fluid' alt='product image' />
                        <img src='images/watch-1.jpg' className='img-fluid' alt='product image' />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit='false'
                            value='3'

                            activeColor="#ffd700"
                        />,
                        <p className={`description ${grip == 12 ? "d-block" : "d-none"}`}>
                            device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang

                        </p>
                        <p className="price">$1000</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg " alt='compare' />
                            </Link>
                            <Link>
                                <img src="images/view.svg " alt='view' />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg " alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default ProductCard
