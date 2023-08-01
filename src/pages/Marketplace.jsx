import React from 'react'
import '../static/css/marketplace.css';
import { Messenger, Instagram, Facebook, Twitter, BagPlusFill, RssFill, SaveFill } from 'react-bootstrap-icons'


const Marketplace = () => {
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="options col-3 th-bg-2 rounded-3 b-shadow py-4 d-flex flex-column">
                    <div className="d-flex flex-row column-gap-3">
                        <img width="50" height="50" className="" src="https://img.icons8.com/ios-filled/100/537188/online-store.png" alt="online-store"/>
                        <h4 className='fw-bold th-color-1 mt-2'>Market Place</h4>
                    </div>
                    <hr />
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 th-bg-1 text-white" role='button'>
                        <RssFill/>    Feed
                    </h5>
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 " role='button'>
                        <SaveFill/>    Saved
                    </h5>
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 " role='button'>
                        <Messenger/>    Messages
                    </h5>
                </div>
                <div className="feed col-6 d-flex flex-column align-items-center">
                    <div className="card rounded-3 b-shadow w-75 mb-4">
                        <img height={250} src="https://images.unsplash.com/photo-1619234519752-414dfef54a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{fontFamily: "var(--th-f-headings)"}}>Annie And Casie</h5>
                            <p className="card-text fw-normal">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: 1000</li>
                            <li className="list-group-item">Product Type: Doll</li>
                            <li className="list-group-item">yarn Type: Cotton</li>
                        </ul>
                        <div className="card-body d-flex flex-row alingn-items-end column-gap-3">
                            <button className='btn fs-6 px-4 th-color-1 fw-medium mt-2 d-flex align-items-center column-gap-2'>
                                Save <SaveFill/>
                            </button>
                            <button className='btn fs-6 px-4 th-color-1 fw-medium mt-2 d-flex align-items-center column-gap-2'>
                                Buy <BagPlusFill/>
                            </button>
                            <Messenger className='mt-3' role='button'/>
                            <Instagram className='mt-3' role='button'/>
                            <Facebook  className='mt-3' role='button'/>
                            <Twitter   className='mt-3' role='button'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Marketplace