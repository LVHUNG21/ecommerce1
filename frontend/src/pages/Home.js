import { React, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from "../utils/Data"
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
  }, [])

  const getBlogs = () => {
    dispatch(getAllBlogs());
  }
  // const [data, setData] = useState();
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img src='images/main-banner.jpg' className='img-fluid rouned-3' alt='main banner' />
              <div className="main-banner-content position-absolute">
                <h4 >SUPERCHARED FOR PROS</h4>
                <h5 >
                  Ipad S13+ Pre
                </h5>
                <p >From $999.99 or $100/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>

          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img src='images/catbanner-01.jpg' className='img-fluid rouned-3' alt='main banner' />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARED FOR PROS</h4>
                  <h5>
                    Ipad S13+ Pre
                  </h5>
                  <p>From $999.99<br /> or $100/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src='images/catbanner-02.jpg' className='img-fluid rouned-3' alt='main banner' />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sales</h4>
                  <h5>
                    Ipad S13+ Pre
                  </h5>
                  <p>From $999.99 <br />or $100/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src='images/catbanner-03.jpg' className='img-fluid rouned-3' alt='main banner' />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4> <h5>Buy Ipad Air
                  </h5>
                  <p>From $999.99 <br /> or $100/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src='images/catbanner-04.jpg' className='img-fluid rouned-3' alt='main banner' />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARED FOR PROS</h4>
                  <h5>
                    Ipad S13+ Pre
                  </h5>
                  <p>From $999.99 <br />or $100/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15  ' key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera'></img>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera'></img>
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
      <Container className="famous-wrapper py-5 hom-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/subbanner-01.webp' className='img-fluid' alt="famous"></img>
              <div className="famous-content position-absolute">
                <h5>
                  BigScreen
                </h5>
                <h6>
                  Smart watch Series 7
                </h6>
                <p>
                  From $399 or $16.62/mo. for 24 mo
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/subbanner-02.webp' className=' img-fluid' alt="famous"></img>
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  Stuio Display
                </h5>
                <h6 className='text-dark'>
                  600 nits of brightness.
                </h6>
                <p className='text-dark'>
                  27-inch 5K Retina Display
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/subbanner-03.webp' className='img-fluid' alt="famous"></img>
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  BigScreen
                </h5>
                <h6 className='text-dark'>
                  Smart watch Series 7
                </h6>
                <p className='text-dark'>
                  From $399 or $16.62/mo. for 24 mo
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src='images/subbanner-04.webp' className="img-fluid" alt="famous"></img>
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>
                  Home Speaker
                </h5>
                <h6 className='text-dark'>
                  Smart watch Series 7
                </h6>
                <p className='text-dark'>
                  From $399 or $16.62/mo. for 24 mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className='marquee-inner-wrapper bg-white p-3'>
              <Marquee className='d-flex'>
                <div className="mx-4 w-25"><img src="images/brand-01.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-02.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-03.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-04.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-05.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-06.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-07.png" alt="brand" /></div>
                <div className="mx-4 w-25"><img src="images/brand-08.png" alt="brand" /></div>

              </Marquee>
            </div>
          </div>
        </div>

      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          {blogState &&
            blogState.map((item, index) => {
              if(index<3){
                return (
                <div className="col-3 mb-3"key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.images[0].url}
                    image={item?.images[0]?.url}
                    date={moment(item?.createdAt).format("MMMM Do YYYY,h:mm:ss a")}
                  /></div>


              )
              }
            }
            )
          }
        </div>

      </Container>
    </>
  )
}

export default Home
