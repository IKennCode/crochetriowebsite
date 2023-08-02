import React, {useState}from 'react'
import '../static/css/marketplace.css';
import { Messenger, Instagram, Facebook, Twitter, BagPlusFill, RssFill, SaveFill } from 'react-bootstrap-icons'


const Marketplace = () => {
    const session_user = JSON.parse(sessionStorage.getItem('session_user'));
    const user_active = session_user ? session_user : false;

    if(!user_active) {
        window.location = window.origin + "/";
    }

    // localStorage.setItem('product_list', JSON.stringify([
    //     {
    //         id: 1,
    //         Name: 'Annie And Casie',
    //         image: 'https://images.unsplash.com/photo-1619234519752-414dfef54a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    //         description: 'Two Bunny sister forever and ever.',
    //         price: 1000,
    //         product_type: 'Doll',
    //         yarn_type: 'cotton'
    //     },
    //     {
    //         id: 2,
    //         Name: 'Strawberry Beanie',
    //         image: 'https://i.pinimg.com/564x/24/7e/08/247e08d75bce698a924f49fd09cc08cf.jpg',
    //         description: 'Cute pink beanie for Kids',
    //         price: 3000,
    //         product_type: 'Headwear',
    //         yarn_type: 'cotton'
    //     },
    //     {
    //         id: 3,
    //         Name: 'Smiling Chost',
    //         image: 'https://i.pinimg.com/564x/8c/f0/81/8cf081611277d9303ead24c452a3ea53.jpg',
    //         description: 'Multipurpose keychains for everyone.',
    //         price: 1500,
    //         product_type: 'keychain',
    //         yarn_type: 'wool'
    //     }
    // ]))

    const product_list_data = JSON.parse(localStorage.getItem('product_list'));
    const [product_list,setProductList] = useState( product_list_data ? product_list_data : [])


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
                    {
                        product_list.map(data =>(
                            <div className="card rounded-3 b-shadow w-75 mb-4">
                                <img height={250} src={data.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontFamily: "var(--th-f-headings)"}}>{data.Name}</h5>
                                    <p className="card-text fw-normal">{data.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: {data.price}</li>
                                    <li className="list-group-item">Product Type: {data.product_type}</li>
                                    <li className="list-group-item">yarn Type: {data.yarn_type}</li>
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
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Marketplace