import React from 'react'
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
import '../static/css/commission.css'

const MultistepForm = () => {
    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
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
                                <input type="text" className='form-control' name="address" id="address" placeholder='Address' />
                            </div>
                        </form>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent  title="Request Details" icon="ti-settings">
                        <h3>Second Tab</h3>
                        <p>Some content for the last tab</p>
                        <hr />
                    </FormWizard.TabContent>
                    <FormWizard.TabContent title="Last step" icon="ti-check">
                        <h3>Last Tab</h3>
                        <p>Some content for the last tab</p>
                        <hr />
                    </FormWizard.TabContent>
                    </FormWizard>
            </div>
        </>
      );
}

export default MultistepForm