import React from 'react'
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
import '../static/css/commission.css'

const MultistepForm = () => {
    const handleComplete = () => {
        console.log("Form completed!");
      };
      return (
        <>
            <div className="step-form container mt-5 px-5 w-75 rounded-3 b-shadow">
                    <FormWizard
                    onComplete={handleComplete}
                    color="#537188"
                    shape="square"
                    title="COMMISION REQUEST FORM"
                    subtitle="YourCrochet Subcription"
                    >
                    <FormWizard.TabContent title="Personal details" icon="ti-user">
                        <form className='tab-form d-flex flex-row justify-content-center column-gap-4 mt-4'>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <input type="text" className='form-control' name="fullname" id="fullname" placeholder='Full Name'/>
                                <input type="number" className='form-control' name="phone" id="phone" placeholder='Phone Number' />
                            </div>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <input type="email" className='form-control' name="email" id="email" placeholder='Enter Email'/>
                                <input type="text" className='form-control' name="address" id="address" placeholder='Delivery Address' />
                            </div>
                        </form>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent  title="Request Details" icon="ti-settings">
                        <form className='tab-form d-flex flex-column justify-content-center row-gap-4 mt-4 px-3'>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <input type="file" name="design" id="design" />
                            </div>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <select className='form-select' name="yarn-type" id="yarn-type">
                                    <option value="">Yarn Type</option>
                                    <option value="wool">Wool</option>
                                    <option value="cotton">Cotton</option>
                                    <option value="acrylic">Acrylic</option>
                                    <option value="crochet-thread">Crochet Thread</option>
                                </select>
                            </div>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <select className='form-select' name="product-type" id="product-type">
                                    <option value="">Product Type</option>
                                    <option value="keychain">Keychain-P500</option>
                                    <option value="doll">Doll-P1000</option>
                                    <option value="headwear">Headwear-P2000</option>
                                </select>
                            </div>
                        </form>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent title="Last step" icon="ti-check">
                        <div className='form-review d-flex flex-column align-items-start p-3 border border-3 rounded-3'>
                            <h4 className='text-center mb-5 w-100'>-----Request Form Review-----</h4>
                            <h5>Personal Details</h5>
                            <h6>Full Name: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Email: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Phone Number: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Delivery Address: <span className='fw-light'>Sample Value</span></h6>
                            <h5>Request Details</h5>
                            <h6>Design Reference: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Yarn Type: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Product Type: <span className='fw-light'>Sample Value</span></h6>
                            <h5>Payment Details</h5>
                            <h6>Payment Method: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Product Amount: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Service Amount: <span className='fw-light'>Sample Value</span></h6>
                            <h6>Total Amount: <span className='fw-light'>Sample Value</span></h6>
                            <h4 className='text-center mt-5 w-100'>-----To Proceed To Checkout Click "Finish"-----</h4>
                        </div>
                        <hr />
                    </FormWizard.TabContent>
                    </FormWizard>
            </div>
        </>
      );
}

export default MultistepForm