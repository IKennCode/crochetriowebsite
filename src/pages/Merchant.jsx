import React,{useState,useEffect} from 'react'
import '../static/css/merchant.css';
import { Messenger, Instagram, Facebook, Twitter, BagPlusFill, RssFill, SaveFill } from 'react-bootstrap-icons'


const Merchant = () => {
    const session_user = JSON.parse(sessionStorage.getItem('session_user'));
    const user_active = session_user ? session_user : false;

    if(!user_active) {
        window.location = window.origin + "/";
    }

    const [name,setName] = useState(null);
    const [price,setPrice] = useState(null);
    const [desc,setDesc] = useState(null);
    const [image,setImage] = useState(null);
    const [yarn_type,setYarntype] = useState(null);
    const [product_type,setProducttype] = useState(null);


    const product_list_data = JSON.parse(localStorage.getItem('product_list'));
    const [product_list,setProductList] = useState( product_list_data ? product_list_data : [])

    const getImagePreview = (e) =>{
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    let insert_data = {}

    const insertProduct = (e) =>{
        e.preventDefault()

        setProductList([...product_list, insert_data])
        e.target.reset()

    }

    const deleteNotes = (e) =>{
        const product_list_copy = JSON.parse(localStorage.getItem('product_list'));
        const new_product_list = product_list_copy.filter(data => Number(data.id) !== Number(e.target.id));

        setProductList(new_product_list)

    }   

    // const editNotes = (e) =>{
    //     let new_data = prompt("Enter New Note: ")
    //     let product_list_copy = JSON.parse(localStorage.getItem('product_list'));

    //     product_list_copy.forEach(data => {
    //         if (data.id === Number(e.target.id)){
    //             if(new_data){
    //                data.note = new_data;
    //             }
    //         }
    //     });

    //     setNotes(note_list_copy)
    // }

    useEffect(() =>{
        insert_data.id = Date.now()
        insert_data.Name = name
        insert_data.image = image
        insert_data.description = desc
        insert_data.price = price
        insert_data.product_type = product_type
        insert_data.yarn_type =  yarn_type
        
    },[insert_data])

    useEffect(()=>{
        localStorage.setItem('product_list', JSON.stringify(product_list))
    }, [product_list])


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
                <div className="data-form col-8 th-bg-2 rounded-3 b-shadow py-4 d-flex flex-column align-items-start">
                    <div className="d-flex flex-row column-gap-3">
                        <img width="50" height="50" className="" src="https://img.icons8.com/ios-filled/100/537188/online-store.png" alt="online-store"/>
                        <h4 className='fw-bold th-color-1 mt-2'>Insert Products</h4>
                    </div>
                    <hr />
                    <form onSubmit={insertProduct}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="name" placeholder="Enter Product Name" required/>
                        </div>
                        <div className="col-md-12">
                            <input onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" name="price" placeholder="Enter Product Price" required/>
                        </div>
                        <div className="col-12">
                            <textarea onChange={(e) => setDesc(e.target.value)} className="form-control" name="message" placeholder="Short Description"></textarea>
                        </div>

                        <div className="col-12">
                            <select onChange={(e) => setProducttype(e.target.value)} className='form-select' name="product-type" id="product-type">
                                            <option value="">Product Type</option>
                                            <option value="keychain">Keychain</option>
                                            <option value="doll">Doll</option>
                                            <option value="headwear">Headwear</option>
                             </select>
                        </div>
                        <div className="col-12">
                            <select onChange={(e) => setYarntype(e.target.value)} className='form-select' name="yarn-type" id="yarn-type">
                                    <option value="">Yarn Type</option>
                                    <option value="wool">Wool</option>
                                    <option value="cotton">Cotton</option>
                                    <option value="acrylic">Acrylic</option>
                                    <option value="crochet-thread">Crochet Thread</option>
                            </select>
                        </div>
                        <div onChange={getImagePreview} className="col-12">
                            <input type="file" name="" id="" />
                        </div>
      
                        <div className="col-12 mt-5">                        
                            <button type='submit' className='insert-btn btn fs-6 px-4 text-white fw-medium mt-2 d-flex align-items-center column-gap-2'>
                                Insert Product <BagPlusFill/>
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="row gap-5 mt-5">
                <div className="data-table col-12 th-bg-2 rounded-3 b-shadow py-4 d-flex flex-column align-items-start">
                    <div className="d-flex flex-row column-gap-3">
                        <img width="50" height="50" className="" src="https://img.icons8.com/ios-filled/100/537188/online-store.png" alt="online-store"/>
                        <h4 className='fw-bold th-color-1 mt-2'>Uploaded Products</h4>
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
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product_list.map(data =>(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td> <img width={50} height={50} src={data.image} alt="" /></td>
                                        <td>{data.Name}</td>
                                        <td>{data.description}</td>
                                        <td>{data.price}</td>
                                        <td>{data.product_type}</td>
                                        <td>{data.yarn_type}</td>
                                        <td className='d-flex flex-column bg justify-content-center align-items-center'>
                                            {/* <button id={data.id}  onClick={editNotes}>Edit</button> */}
                                            <button id={data.id}  onClick={deleteNotes}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Merchant