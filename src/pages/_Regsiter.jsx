import React, {useState,useEffect} from 'react'

const Register = () => {
    const [fullname,setFullname] = useState(null);
    const [email,setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [address,setAddress] = useState(null);
    const [account_type,setAccountType] = useState(null);
    const [password,setPassword] = useState(null);
    const [r_password,setRepeatPass] = useState(null);

    const registered_user_list = JSON.parse(localStorage.getItem('registered_user'));
    const [registered_user,setRegisteredUser] = useState( registered_user_list ? registered_user_list : []);
    const [showValidation,setShowValidation] = useState({active: false, message: null});


    const CheckDuplicateEmail = () =>{
        let is_exisisting = false;
        registered_user.forEach(user_Data =>{
            if(email === user_Data.email){
                is_exisisting = true;
            }
        })

        return is_exisisting;
    }
    
    const CheckPassPattern = () =>{
        let is_valid = false;
        if (password.match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/")){
            is_valid = true;
        }
        
        return is_valid;
    }

    const CheckConfirmPass = () =>{
        let is_not_same = false;
        if(password !== r_password){
            is_not_same = true;
        }

        return is_not_same;
    }

    const registerAccount = (e) =>{
        e.preventDefault();
        
        if(CheckDuplicateEmail()){
            setShowValidation({active: true, message: "Email already in use, please try again."});
        }else if(CheckPassPattern()){
            setShowValidation({active: true, message: "Passwords needs to contain at least one numeric digit, one uppercase and one lowercase letter"});
        }else if(CheckConfirmPass()){
            setShowValidation({active: true, message: "Passwords do not match"});
        }else{
           
            let registration_data = 
            {
                id: Date.now(),
                fullname: fullname,
                email: email,
                password: password,
                phone: phone,
                address: address,
                account_type: account_type
            }

            
            setRegisteredUser([...registered_user, registration_data])
            alert("ACCOUNT REGISTERED!")
            window.location = window.origin + "/login"
        }

    }


    useEffect(()=>{
        localStorage.setItem('registered_user', JSON.stringify(registered_user))
    },[registered_user])

  return (
        <div className="container">
            <div className="card text-black mt-5 b-shadow rounded-3">
                <div className="card-body p-md-5">
                <div className="row d-flex flex-row justify-content-center">
                    <div className="animated left col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-3 mt-4 th-color-1">Create An Account</p>

                    <form onSubmit={registerAccount} className="mx-1 mx-md-4 d-flex flex-column row-gap-3">
                        
                        <select required onChange={(e) => setAccountType(e.target.value)} name="account_type" id="account_type" className='form-select'>
                            <option value="">Select Account Type</option>
                            <option value="User">Looking For Products</option>
                            <option value="Merchant">Merchant</option>
                        </select>
                        
                        <input required onChange={(e) => setFullname(e.target.value)} type="text" name="fullname" placeholder="Enter Full Name" className="user-information form-control" />
                        
                        <input required onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter Email" className="user-information form-control" />

                        <input maxLength={11} onChange={(e) => setPhone(e.target.value)} type="number" name="phone" placeholder="Enter Phone" className="user-information form-control" />

                        <input required onChange={(e) => setAddress(e.target.value)} type="text"  name="address" placeholder="Enter Address" className="user-information form-control" />
                        
                        <input  required onChange={(e) => setPassword(e.target.value)} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" type="password" name="password" placeholder="Enter Password" className="user-information form-control" />
                        
                        <input type="password" required onChange={(e) => setRepeatPass(e.target.value)} name="r-password" placeholder="Confirm Password" className="user-information form-control" /> 
                        
                        {
                            showValidation.active ? 
                                <div className={`alert alert-danger mt-2`} role="alert">
                                    {showValidation.message}
                                </div>
                            : false
                        }
                
                        <button type='submit' className='btn px-4 th-color-1 fw-bold mt-2 w-100'>
                            Register
                        </button>

                    </form>

                    </div>
                    <div className="animated right col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                </div>
                </div>
            </div>            
        </div>

  )
}

export default Register