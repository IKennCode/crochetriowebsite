import React from 'react'

const Footer = () => {
  return (
        <div className="footer-section container-fluid th-bg-1 p-4">
            <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex flex-column row-gap-3">
                            <h3 className='footer-title text-white'>YourCrochet</h3>
                            <h2 className=" fw-bold text-white letter">Subscribe To Our News Letter.</h2>
                            <form className="d-flex flex-row column-gap-2">
                                <input type="email" name="email" id="email" className="email rounded-3 p-1" size="30px" placeholder="Enter Email..." />
                                <button className='btn fs-4 px-4 th-color-1 fw-medium'>Send<i className="bi bi-arrow-right"></i></button>
                            </form>
                            <div className="footer-btn d-flex flex-row align-items-center">
                                <h3 className="text-white mt-1">Follow Us:</h3>
                                <div className="socmed-links d-flex align-items-center column-gap-4 ms-3">
                                    <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/></a>
                                    <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                                    <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/twitter--v1.png" alt="twitter--v1"/></a>
                                </div>
                            </div>   
                        </div>
                        <div className="col-3 d-flex flex-column">
                            <h3 className="text-white fw-medium text-center">Quick Links</h3>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">Home</a>
                            </h5>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">About us</a>
                            </h5>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">Services</a>
                            </h5>
                        </div>
                        <div className="col-3 d-flex flex-column">
                            <h3 className="text-white fw-medium">Contact Us</h3>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">Unit #1, G/F Aspiras Building, Consolacion Street</a>
                            </h5>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">0987-654-3211</a>
                            </h5>
                            <h5>
                                <a href="#" className="text-white fw-light text-decoration-none">YC_Business@Gmail.com</a>
                            </h5>
                        </div>
                    </div>    
            </div>
        </div>
  )
}

export default Footer