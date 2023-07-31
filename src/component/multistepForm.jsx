import React, {useRef,useState,useEffect} from 'react'
import {InfinitySpin} from  'react-loader-spinner'
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
import '../static/css/commission.css'

const MultistepForm = () => {
    sessionStorage.clear()

    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [yarn_type,setYarnType] = useState("");
    const [product_type,setProductType] = useState("");
    const [payment_method,setPaymentMethod] = useState("e_wallet");
    const [service_amount,setServiceAmount] = useState(3000);
    const [product_amount,setProductAmount] = useState(0);
    const [total_amount,setTotalAmount] = useState(0);
    const [image_ref,setImageRef] = useState({file_name:null,file:null});
    const [loading,setLoading] = useState(false);

    const form_data = {}

    const handleComplete = (e) => {
        e.preventDefault();
        
        setLoading(true);
        let checkout_data =
        {
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            product: product_type,
            amount: Number(total_amount + '00'),
            success_url: window.location + "/payment_confirm",
            cancel_url: window.location.href
        };

        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkout_data)
        }

        fetch(`https://paymongoapi.pythonanywhere.com/item_checkout`, payload)
            .then(res => res.json())
            .then(json => {

                    let data = json.data.attributes;
                    form_data.reference_number = data.reference_number;

                    sessionStorage.setItem('user_order', JSON.stringify(form_data));

                    window.location = data.checkout_url;
                }
            )
            .catch(err => console.log(err));
      };


    const getImagePreview = (e) =>{
        if (e.target.files && e.target.files[0]) {
            setImageRef
                (
                    {
                        file_name: e.target.files[0].name,
                        file:URL.createObjectURL(e.target.files[0])
                    }
                );
        }
    }

    useEffect(() =>{

        form_data.fullname = fullname;
        form_data.email = email;
        form_data.phone = phone;
        form_data.address = address;
        form_data.yarn_type = yarn_type;
        form_data.product_type = product_type;
        form_data.payment_method = payment_method;
        form_data.product_amount = product_amount;
        form_data.service_amount = service_amount;
        form_data.total_amount = service_amount + product_amount;
        

    }, [form_data])


      return (
        <>
            {
                loading ? 
                    <div className='loader'>
                        <InfinitySpin width='200' color="#537188"/>
                    </div>

                    :false
            }
           
            <div className="step-form container mt-5 p-4 px-5 w-75 rounded-3 b-shadow">
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
                                <input type="text" onChange={(e) => setFullname(e.target.value)} className='form-control' name="fullname" id="fullname" placeholder='Full Name'/>
                                <input type="number" onChange={(e) => setPhone(e.target.value)} className='form-control' name="phone" id="phone" placeholder='Phone Number' />
                            </div>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' name="email" id="email" placeholder='Enter Email'/>
                                <input type="text" onChange={(e) => setAddress(e.target.value)} className='form-control' name="address" id="address" placeholder='Delivery Address' />
                            </div>
                        </form>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent  title="Order Details" icon="ti-settings">
                        <form className='tab-form d-flex flex-column justify-content-center row-gap-4 mt-4 px-3'>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <input onChange={getImagePreview} type="file" placeholder='Upload Image Reference' name="design" id="design" />
                            </div>
                            <div className="form-group d-flex flex-column row-gap-2">
                                <select onChange={(e) => setYarnType(e.target.value)} className='form-select' name="yarn-type" id="yarn-type">
                                    <option value="">Yarn Type</option>
                                    <option value="wool">Wool</option>
                                    <option value="cotton">Cotton</option>
                                    <option value="acrylic">Acrylic</option>
                                    <option value="crochet-thread">Crochet Thread</option>
                                </select>
                            </div>
                            <div  className="form-group d-flex flex-column row-gap-2">
                                <select onChange={
                                    (e) =>
                                    {   

                                        let pr_type = e.target.value.split('-')[0]
                                        let pr_amount = parseInt(e.target.value.split('-')[1])

                                        setProductType(pr_type);
                                        setProductAmount(pr_amount);
                                        setTotalAmount(service_amount + pr_amount);
                                        
                                    }} 
                                    className='form-select' name="product-type" id="product-type">
                                    <option value="">Product Type</option>
                                    <option value="keychain-500">Keychain-500</option>
                                    <option value="doll-1000">Doll-1000</option>
                                    <option value="headwear-2000">Headwear-2000</option>
                                </select>
                            </div>
                        </form>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent title="Last step" icon="ti-check">
                        <div className='form-review d-flex flex-column align-items-start p-3 border border-3 rounded-3'>
                            <h4 className='text-center mb-5 w-100'>-----Order Form Review-----</h4>
                            <h5>Personal Details</h5>
                            <h6>Full Name: <span className='fw-light'>{fullname}</span></h6>
                            <h6>Email: <span className='fw-light'>{email}</span></h6>
                            <h6>Phone Number: <span className='fw-light'>{phone}</span></h6>
                            <h6>Delivery Address: <span className='fw-light'>{address}</span></h6>
                            <h5>Request Details</h5>
                            <h6>Design Reference: <span className='fw-light'>{image_ref.file_name}</span></h6>
                            <div className='m-2' style={{width: "150px", height: "100px", backgroundImage: `url(${image_ref.file})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                            <h6>Yarn Type: <span className='fw-light'>{yarn_type}</span></h6>
                            <h6>Product Type: <span className='fw-light'>{product_type}</span></h6>
                            <h5>Payment Details</h5>
                            <h6>Payment Method: <span className='fw-light'>{payment_method}</span></h6>
                            <h6>Product Amount: <span className='fw-light'>₱{product_amount}</span></h6>
                            <h6>Service Amount: <span className='fw-light'>₱{service_amount}</span></h6>
                            <h6>Total Amount: <span className='fw-light'>₱{total_amount}</span></h6>
                            <h4 className='text-center mt-5 w-100'>-----To Proceed To Checkout Click "Finish"-----</h4>
                            <hr /> 
                        </div>
                    </FormWizard.TabContent>
                    </FormWizard>
            </div>
        </>
      );
}

export default MultistepForm