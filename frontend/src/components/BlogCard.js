import React from 'react'
import {Link} from 'react-router-dom' 
const BlogCard = (props) => {
  const {id,title,description,date,image}=props;
  return (
    
        <div className="blog-card">

            <div className='card-image'>

                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'></img>
            </div>
            <div className="blog-content">
                <p className="data">21 Mar, 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc" dangerouslySetInnerHTML={{__html:description?.substr(0,70)+"..."}}>to address all issues sunday morning renaissance</p>
                <Link to={'/blog/'+id} className='button'>Read More</Link>
            </div>
      
    </div>
  ) 
}
export default BlogCard
