import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import '../static/css/landing.css'
import dot_sm from '../static/images/dot_small.png';
import dot_lg from '../static/images/dot_lg.png';
import bubbles_1 from '../static/images/bubbles_1.png';
import bubbles_2 from '../static/images/bubbles_2.png';
import Arrow from '../static/images/Arrow.png';
import circle from '../static/images/circle.png';
import needle from '../static/images/needle.png';
import string from '../static/images/string.png';
import overlay from '../static/images/overlay.png';

const Landing = () => {
  
  return (
    <>
       <div className='container-fluid hero-section p-0'>
          <div className='row'>
              <div className="slogan col-5 th-bg-1 d-flex flex-column row-gap-2">
                <img height={90} width={150} src={dot_lg} alt="" />
                <img className='align-self-end' height={180} width={150} src={bubbles_1} alt="" />
                <img className='' height={150} width={120} src={bubbles_2} alt="" />
                <img className='align-self-end' height={50} width={100} src={dot_sm} alt="" />
              </div>
              <div className="col-7 side-image">
                <Fade left>
                  <h1>YourCrochet</h1>
                  <div className='slogan-bar d-flex flex-column'>
                      <span className='th-bg-2'></span>
                      <span  className='th-bg-2'></span>
                      <h3 className='w-50'>Crochet your way to your love ones.</h3>
                  </div>
                </Fade>
                <Fade bottom>
                    <div className='hero-action d-flex flex-row'>
                        
                        <Link to="/services/commission" className='text-decoration-none'>
                          <button className='btn fs-4 px-4 th-color-1 fw-medium'>
                            Order
                          </button>
                        </Link>
                        
                        <Link className='text-decoration-none' to="/services/marketplace">
                          <div className='explore-btn d-flex flex-row'>
                            <div className='arrow-explore'>
                              <h6 className='text-white'>Explore</h6>
                              <img width={110} src={Arrow} alt="" />
                            </div>
                            <img className='arrow-circle' height={40} src={circle} alt="" />
                          </div>
                        </Link>
                    </div>
                </Fade>
              </div>
          </div>
       </div>

       <div className="container-fluid d-flex justify-content-center steps-section">
        <div className="row position-relative d-flex flex-column">
          <img className='string-img' src={string} alt="" />
          <img className='overlay' src={overlay} alt="" />
          <img className='overlay' src={overlay} alt="" />
          <img className='overlay' src={overlay} alt="" />
          <div className="col-12 header d-flex flex-row justify-content-center column-gap-2">
              <img className='n-r' height={85} src={needle} alt="" />
              <h1 className='th-color-1 fw-bold'>How It Works</h1>
              <img height={85} src={needle} alt="" />
          </div>

          <Fade bottom>
              <div className="col-12 steps d-flex flex-row justify-content-start">
                <div className='w-50'>
                  <h6 className='text-white th-bg-1'>STEP 1</h6>
                  <h1 className='th-color-1 fw-bold'>Send Us The Design</h1>
                  <p className='th-color-1 fw-medium d-flex flex-row align-items-center column-gap-1'>
                    <span>Details</span> 
                    <span className='deets-sqr th-bg-1'></span></p>
                  <p className='fw-medium steps-desc'>
                    Give us your design via image uploading and 
                    we will make sure that your chosen design will come alive.
                  </p>
                </div>
              </div>            
          </Fade>

          <Fade bottom>
              <div className="col-12 steps d-flex flex-row justify-content-end">
                <div className='w-50'>
                  <h6 className='text-white th-bg-1'>STEP 2</h6>
                  <h1 className='th-color-1 fw-bold'>Choose Desire Material</h1>
                  <p className='th-color-1 fw-medium d-flex flex-row align-items-center column-gap-1'>
                    <span>Details</span> 
                    <span className='deets-sqr th-bg-1'></span></p>
                  <p className='fw-medium steps-desc'>
                    Choosing the right material for your crochet product is one 
                    of the best part because you can choose between three different
                    material for your crochet product. 
                  </p>
                </div>
              </div>            
          </Fade>

          <Fade bottom>
              <div className="col-12 steps d-flex flex-row justify-content-start">
                <div className='w-50'>
                  <h6 className='text-white th-bg-1'>STEP 3</h6>
                  <h1 className='th-color-1 fw-bold'>Choose Product Type</h1>
                  <p className='th-color-1 fw-medium d-flex flex-row align-items-center column-gap-1'>
                    <span>Details</span> 
                    <span className='deets-sqr th-bg-1'></span></p>
                  <p className='fw-medium steps-desc'>
                    Your crochet product will not be complete if there is no specific
                    product tyoe that the crochet product will turn into. So we provide 
                    you with three different choices of product type you can choose from.
                  </p>
                </div>
              </div>            
          </Fade>

          <Fade right>
              <div className="col-12 assurance d-flex flex-row justify-content-center">
                <div className='w-50'>              
                  <h1 className='th-color-1 fw-bold'>Why Choose Us</h1>
                  <p className=' fw-medium'>
                    We provide excellent service to our client and we make sure that all 
                    the products are made by crochet professionals. We also prioritize quality
                    in everything we do to make assure the satisfcation our Clients. 
                  </p>
                  <div className='d-flex flex-row column-gap-5 align-items-center mt-5'>
                    <img width="64" height="64" src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/537188/external-fast-time-productivity-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" />
                    <p>Fast Delivery</p>
                    <img className='ms-5' width="64" height="64" src="https://img.icons8.com/ios/100/537188/coins--v1.png" />
                    <p>Affordable</p>
                  </div>
                  <div className='d-flex flex-row column-gap-5 align-items-center mt-5'>
                    <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/537188/communication--v2.png" />
                    <p>24/7 Communication</p>
                    <img width="64" height="64" src="https://img.icons8.com/wired/64/537188/warranty-card.png" />
                    <p>Quality Service</p>
                  </div>
                </div>
              </div>
          </Fade>
        </div>
       </div>
    </>
  )
}

export default Landing