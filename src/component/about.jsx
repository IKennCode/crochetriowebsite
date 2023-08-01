import React from 'react';
import '../static/css/about.css'; 
import about_img from '../static/images/knit.png';
import naval from '../static/images/logo.jpg';
import masangkay from '../static/images/f.jpg';
import uknown from '../static/images/s.png'

const About = () => {
  return (
    <>
      <div className="wrapper container p-3 d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className='th-color-1 mb-5'>About Us</h1>
        <div className="wrapper-content d-flex flex-row justify-content-between align-items-center">
          <div className="div1 w-50">
            <p className='fw-normal'>
            <b className='th-color-1'>YourCrochet</b> thrives 
                on unleashing the boundless creativity of crochet artistry and celebrates 
                the magic of handcrafted creations. Our journey was sparked by a visionary 
                idea - to create a platform where crochet enthusiasts can embark on a personalized 
                crafting journey that embraces individuality and craftsmanship at its finest.
                <br /> <br />
                We believe that crochet is an art form that transcends time and trends. 
                Each stitch, meticulously woven, holds the potential to become something 
                extraordinary. That's why we cherish the art of handcrafted creations and 
                provide a nurturing space for crochet enthusiasts of all levels.
            </p>
          </div>

          <div className="div2">
            <img width={400} height={400} src={about_img} alt="" />
          </div>
        </div>

      </div>

      <section className="team team-background">
        <div className="background-overlay"></div>

        <div className="center">
          <h1>Team CrochetQuartet</h1>
        </div>

        <div className="team-content">
          <div className="box">
            <img src={naval} alt="Joseph Naval" />
            <h3>Joseph Naval</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>
          </div>

          <div className="box">
            <img src={uknown} alt="Kenneth Dimalibot Jobs" />
            <h3>Kenneth Dimalibot Jobs</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>


          </div>

          <div className="box">
            <img src={uknown} alt="Kylle Tallan" />
            <h3>Kylle Tallan</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>

          </div>

          <div className="box">
            <img src={masangkay} alt="Josiah Masangkay" />
            <h3>Josiah Masangkay</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View My E-Portfolio</a>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;
