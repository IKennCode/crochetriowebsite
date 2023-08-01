import React from 'react'
import { Link } from 'react-router-dom'
import '../static/css/paymentConfirm.css'
import banner_img from '../static/images/banner_img.png'
import { ArrowBarRight, ArrowLeft } from 'react-bootstrap-icons'

const PaymentConfirm = () => {

  const data = JSON.parse(sessionStorage.getItem('user_order'))
    
  return (
    <>
        <div className="banner container-fluid th-bg-1 d-flex flex-row align-items-center justify-content-evenly">
            <div className='d-flex flex-row align-items-center'>
                <img width="70" height="70" src="https://img.icons8.com/ios-filled/100/FFFFFF/checked-checkbox.png"/>
                <h2 className='fw-medium text-white'>Payment Successful!!!</h2>
            </div>
            <img width={250} height={150}  src={banner_img} alt="" />
        </div>
        <div className="w-75 p-5 container rounded-3 b-shadow d-flex flex-column align-items-center mt-5">
            <h2 className='w-100 text-center'>Payment Details</h2>
            <h3 className='fw-normal w-100 d-flex flex-row justify-content-between'><span className='text-muted'>Order Ref:</span> <span className='text-start'>{data.reference_number}</span></h3>
            <h3 className='fw-normal w-100 d-flex flex-row justify-content-between'><span className='text-muted'>Total Amount:</span> <span className='text-start th-color-1'>₱{data.total_amount}</span></h3>
            <h3 className='fw-normal w-100 d-flex flex-row justify-content-between mt-5'><span className='text-muted'>Payment Method</span> <span className='text-start'>E-Wallet</span></h3>
            <p className='w-100 text-center fs-5 fw-medium mt-5'>Your Payment Will Be Credited To Your Account Shortly.</p>
            <p className='w-75 text-center fs-5 fw-medium '>Check Your Email, <span className='th-color-1'>{data.email}</span>  for the confirmation with order form details.</p>
            <Link to="/services/commission" className='text-decoration-none'>
                <button className='btn fs-6 px-4 th-color-1 fw-medium mt-2 d-flex align-items-center column-gap-2'>
                   <ArrowLeft/> Go Back
                </button>
            </Link>
        </div>
    </>
  )
}

export default PaymentConfirm