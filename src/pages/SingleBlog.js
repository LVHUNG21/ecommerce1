import React from 'react'
import {HiOutlineArrowLeft} from 'react-icons/hi';
const SingleBlog = () => {
    return (
        <>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to ="/blogs"  className="d-flex align-items-center gap-10">
                                <HiOutlineArrowLeft className="fs-4"/>
                            Go back to blogs
                            </Link>
                        <h3 className="title">
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        <img src="images/blog-1.webp" className="img-fluid w-100 my-4" alt="blog"/>
                        <p>
                            You're only as good  as your last collectin
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog
