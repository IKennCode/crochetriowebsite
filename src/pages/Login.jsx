import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [input_email,setInputEmail] = useState(null);
    const [input_password,setInputPassword] = useState(null);
    const [showValidation,setShowValidation] = useState(false);

    const seekAccount = () =>{
        let registered_user_data = JSON.parse(localStorage.getItem('registered_user'))
        let is_registered = false;

        if (registered_user_data !== null){
            registered_user_data.forEach(user_data => {
                if(user_data.email === input_email && user_data.password === input_password){
                    is_registered = user_data;
                }

            })
        }


        return is_registered;

    };

    const verifyAccount = (e) =>{
        e.preventDefault();
        let session_user =  seekAccount()
        if (session_user){
            sessionStorage.setItem('session_user', JSON.stringify(session_user));
            alert("LOGIN SUCCESSFULLY!")
            window.location = window.origin + "/"
        }else{
            setShowValidation(true);
        }
    }

  return (
    <div className="container-fluid h-custom login-form py-5 rounded-3 b-shadow w-75 mt-5 " style={{maxWidth: "1400px"}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="animated left col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="animated right col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={verifyAccount}>
                <h3 className="fw-bold fs-4 mb-4 th-color-1 text-start">Welcome Back</h3>

                <input onChange={(e) => setInputEmail(e.target.value)} required type="email" name="email" placeholder="Enter Email" className="user-input form-control mt-2" />
                <input onChange={(e) => setInputPassword(e.target.value)} required type="password" name="password" placeholder="Enter Password" className="user-input form-control mt-2" />
                
                {
                    showValidation ? 
                        <div className={`alert alert-danger mt-2`} role="alert">
                            Account Not Existing, Please Register First.
                        </div>
                    : false
                }
                
                <button type='submit' className='btn px-4 th-color-1 fw-bold mt-2 w-100'>
                    Log In
                </button>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register" 
                        className="th-color-1">Register</Link></p>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login