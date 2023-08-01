import React from 'react'
import '../static/css/merchant.css';
import { Messenger, Instagram, Facebook, Twitter, BagPlusFill, RssFill, SaveFill } from 'react-bootstrap-icons'


const Merchant = () => {

  return (
    <>
        <div className="container mt-5">
            <div className="row gap-5">
                <div className="options col-3 th-bg-2 rounded-3 b-shadow py-4 d-flex flex-column">
                    <div className="d-flex flex-row column-gap-3">
                        <img width="50" height="50" className="" src="https://img.icons8.com/ios-filled/100/537188/online-store.png" alt="online-store"/>
                        <h4 className='fw-bold th-color-1 mt-2'>Merchant</h4>
                    </div>
                    <hr />
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 th-bg-1 text-white" role='button'>
                        <RssFill/>    Main
                    </h5>
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 " role='button'>
                        <SaveFill/>    Notifications
                    </h5>
                    <h5 className=" d-flex align-items-center column-gap-3 p-2 rounded-3 w-100 " role='button'>
                        <Messenger/>   Settings
                    </h5>
                </div>
                <div className="data-table col-8 th-bg-2 rounded-3 b-shadow py-4 d-flex flex-column align-items-start">
                    <div className="d-flex flex-row column-gap-3">
                        <img width="50" height="50" className="" src="https://img.icons8.com/ios-filled/100/537188/online-store.png" alt="online-store"/>
                        <h4 className='fw-bold th-color-1 mt-2'>Uploaded products</h4>
                    </div>
                    <hr />
                    <table className='table table-bordered text-center'>
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Image
                                </th>                 
                                <th>
                                    Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Product type
                                </th>
                                <th>
                                    Yarn type
                                </th>
                                <th>
                                    Price
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Merchant