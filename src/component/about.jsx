import React from 'react';
import '../static/css/about.css'; 

const About = () => {
  return (
    <>
      <div className="wrapper">

        <div className="div1">
          <h1>About us <hr style={{ width: "250px", height: "5px", backgroundColor: "#537188" }} /></h1>
          <p><u>YourCrochet</u> thrives on unleashing the boundless creativity of crochet artistry and celebrates the magic of handcrafted creations. Our journey was sparked by a visionary idea - to create a platform where crochet enthusiasts can embark on a personalized crafting journey that embraces individuality and craftsmanship at its finest.</p>
          <br />
          <p>We believe that crochet is an art form that transcends time and trends. Each stitch, meticulously woven, holds the potential to become something extraordinary. That's why we cherish the art of handcrafted creations and provide a nurturing space for crochet enthusiasts of all levels.</p>
        </div>

        <div className="div2">
          <img src="../static/images/knit.png" alt="" />
        </div>

      </div>

      <section className="team team-background">
        <div className="background-overlay"></div>

        <div className="center">
          <h1>Team Quadrochet</h1>
        </div>

        <div className="team-content">
          <div className="box">
            <img src="../static/images/logo.png" alt="Joseph Naval" />
            <h3>Joseph Naval</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>
          </div>

          <div className="box">
            <img src="../static/images/s.png" alt="Kenneth Dimalibot Jobs" />
            <h3>Kenneth Dimalibot Jobs</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>


          </div>

          <div className="box">
            <img src="../static/images/s.png" alt="Kylle Tallan" />
            <h3>Kylle Tallan</h3>
            <h5>"Full-stack Web Developer."</h5>
            <a href="https://your-link.com" className="button">View E-Portfolio</a>

          </div>

          <div className="box">
            <img src="../static/images/f.png" alt="Josiah Masangkay" />
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
