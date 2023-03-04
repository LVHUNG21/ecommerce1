import React from 'react'
import {Link} from 'react-router-dom' 
const BlogCard = () => {
  return (
        <div className="blog-card">

            <div className='card-image'>

                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'></img>
            </div>
            <div className="blog-content">
                <p className="data">21 Mar, 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">to address all issues sunday morning renaissance</p>
                <Link to='/' className='bottom'>Read More</Link>
            </div>
      
    </div>
  ) 
}
export default BlogCard
