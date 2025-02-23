import React, { useState } from "react";
import "./Navbar.css";  // CSS module import
// import { useNavigate } from "react-router-dom";import 
import SignIN  from "./Sign";

function Nav() {

  // }
  const[data, setData]=useState(false)
  return (
  <>
  <main className="min-h-screen">
    <header className="header">
      <div className="container">
        <h1 className="container-h1"> Mock Interview</h1>
        <nav className="container-nav">
          <div className="nav-usediv">
            <a href="#features" className="feature">Features</a>
            <a href="#testimonials" className="testimonials">Testimonials</a>
            <a href="#contact" className="contact">Contact</a>
          </div>
         </nav>
      </div>
    </header>

{/*  section 2 */}
    <section  className="section2">
      <h2 className="section-h2" >Ace Your Next Interview</h2>
      <p className="section-p">
        Practice with AI-powered mock interviews and get personalized feedback
      </p>
      <div className="section2-buttons">
      <button className="dashboard" onClick={() => setData(true)}
      >Get Started</button>
      {data && <SignIN/>}
        <button className="features">Learn More</button>
      </div>
    </section>

{/* section 3 */}
    <section className="section3">
          <div className="container-section3">
            <h2 className="text-heading">Features</h2>
            <p className="text-title">
              Our Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex-container">
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading"> Mock Interviews</h3>
                  <p className="boxes-title">Experience realistic interview scenarios with our advanced AI.</p>
                </div>
              </div>
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading">Instant Feedback</h3>
                  <p className="boxes-title">Get instant, personalized feedback to improve your performance.</p>
                </div>
              </div>
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading">Comprehensive Reports</h3>
                  <p className="boxes-title">Receive detailed reports highlighting your strengths and weaknesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* section 4 */}
        <section id="features" className="section3">
          <div className="container-section3">
            <h2 className="text-heading">What Our Users Say</h2>
            <p className="text-title">
              Our Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex-container">
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading">Priyanka Mishra </h3>
                  <p className="boxes-title">Experience realistic interview scenarios with our advanced AI.</p>
                </div>
              </div>
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading">Nabeesha Khatoon</h3>
                  <p className="boxes-title">Get instant, personalized feedback to improve your performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* contact page */}
        <section className="section4">
          <div className="contact-page">
            <h2>Get In Touch</h2>
            <p>Have any questions? Reach out to us and we'll get back to you as soon as possible.</p>
            <form>
              <input type="text" placeholder="Your Name" /><br></br>
              <input type="email" placeholder="Your  Email"/><br></br>
              <textarea placeholder="Your Message"></textarea>
            </form>
          </div>
        </section>
    </main>
     
    </>
  );
}

export default Nav;
