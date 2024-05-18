import React from 'react';
import '../assets/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <section id="headline" className="section">
        <div className="greeting wrapper text-center">
          <p className='hello'>"Hello, Sharing world!"</p>
        </div>
        <div className="wrapper text-center">
          <h1>RABEDESANA High School<br />For Technology <br /> 2024</h1>
          <p className="description">
            RBD High School dedicated to providing exceptional opportunities in the field of computer science. With English as our primary language of instruction, we foster a global learning environment.
            Moreover, chess is an integral part of our comprehensive program, enhancing critical thinking and strategic skills.
            <br />
            At RABEDESANA High School, we are committed to shaping future international professionals. Our cutting-edge curriculum equips students with the necessary knowledge and skills to thrive in the ever-evolving technological landscape. By joining us today,
            you or your children will embark on a transformative educational journey, unlocking numerous benefits.
            <br />
            Enroll at RABEDESANA High School for Technology and embrace a future full of possibilities!
          </p>
          <p className="contact">Please contact us per Email for any further questions about RBD School!</p>
          <br />
          <p className="email"><strong><u>rbdschool@gmail.com</u></strong></p>
        </div>
      </section>

      <section className="about-logo py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="title">RABEDESANA High School For Technology 2024 Logo</h2>
              <p>The logo of RBD School 2023 embodies the essence of our institution. The dominant color of the logo is a captivating shade of blue, which symbolizes innovation, professionalism, and trust.</p>
              <img className="logo img-fluid" src="media/logo.png" alt="RBD School logo" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-5">
        <div className="container">
          <h2 className="title text-center">See RBD School Gallery</h2>
          <p className="gallery-text text-center mb-4">Take a look at our Infrastructures and Programs</p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="gallery-frame position-relative">
                <img src="media/high-school.jpg" alt="Infrastructures" className="gallery-img img-fluid" />
                <div className="gallery-curtain position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className="curtain-text">Infrastructures</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="gallery-frame position-relative">
                <img src="media/school.webp" alt="Programs" className="gallery-img img-fluid" />
                <div className="gallery-curtain position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <span className="curtain-text">Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
