import React from 'react'
import '../static/css/contact.css';


const Contact = () => {
  return (
    <>
    <div class="c-container container">
        <div class="contact">
    
            <p>Address</p>
            <p>J.P. Rizal Street,<br/>
                Barangay Olympia,<br/>
                Makati City 1200 <br/>
                Metro Manila</p>
        </div>

        <div class="contact">
    
            <p>Call Us</p>
            <p>
                +63 (2) 8 899 9051 <br/>
                +63 (2) 8 899 8870 <br/>
                +63 (2) 8 899 9056
            </p>
        </div>


        <div class="contact">
            <p>Customer Support</p>
            <p>We assure you 24/7 support.</p>
        </div>

    </div>


    <div id="contact" className='mt-4'>
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h2>Get In Touch</h2>
                    <p>
                        We are proud to offer the best high-end
                        ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas eget
                        orci euismod fringilla.
                    </p>
                    <p>
                        Donec eu aliquet dui, vitae semper enim.
                        Aliquam erat volutpat. Etiam vel facilisis sapien.
                        Aliquam at nulla augue. Aenean augue risus,
                        suscipit vitae ullamcorper at, dictum eget quam.
                        Sed congue libero ut tellus fringilla malesuada.
                        Morbi mattis congue enim ut tincidunt.
                    </p>
                    <div class="social-icons">
                        <a href="#"> <i class="fab fa-facebook"></i></a>
                        <a href="#"> <i class="fab fa-twitter-square"></i></a>
                        <a href="#"> <i class="fab fa-instagram"></i></a>
                        <a href="#"> <i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name..." required/>
                        <input type="email" name="Email" placeholder="Your Email..." required/>
                        <textarea name="Message" rows="6" placeholder="Your Message..."></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Contact