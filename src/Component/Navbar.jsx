import React from "react";
import "./Navbar.css";  // CSS module import
import { Link } from "react-router-dom";

  return (
  <>
  <main className="min-h-screen">
    <header className="header">
      <div className="container">
        <h1 className="container-h1">AI Mock Interview</h1>
        <nav className="container-nav">
          <div className="nav-div">
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
        {/* <a href="/dashboard" className="dashboard">Get Started</a> */}
        <Link to="/quiz">Get Started</Link>

        <a href="#features" className="features">Learn More</a>
      </div>
    </section>

{/* section 3 */}

    <section className="section3">
          <div className="container-section3">
            <h2 className="text-heading">Features</h2>
            <p className="text-title">
              Our AI Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex-container">
              <div className="flex-box">
                <div className="boxes">
                  <h3 className="boxes-heading">AI Mock Interviews</h3>
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
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
