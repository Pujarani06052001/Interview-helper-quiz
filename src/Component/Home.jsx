import React from "react";
import "./Home.css";  
import { Link } from "react-router-dom";

function Home() {

  return (
    <main className="min-h-screen">
      <section className="section2">
        <h2 className="section-h2">Ace Your Next Interview</h2>
        <p className="section-p">
          Practice with AI-powered mock interviews and get personalized feedback.
        </p>
        <div className="section2-buttons">
        <Link to="/quiz" className="quiz-link">Get Started</Link>
          {/* <button className="features">Learn More</button> */}
        </div>
      </section>


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
          <div className="contact-form">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                <h2>Send Message</h2>

                <div className="input-box">
                    {/* This hidden input is required for Web3Forms */}
                    <input type="hidden" name="access_key" value="39afb32e-46ac-42b5-ad43-d01e8ff9b88d"/>
                    <input type="text" name="name" required />
                    <span>Full Name</span>
                </div>

                <div className="input-box">
                    <input type="email" name="email" required />
                    <span>Email</span>
                </div>

                <div className="input-box">
                    <textarea name="message" required></textarea>
                    <span>Type Your Message...</span>
                </div>

                <div className="input-box">
                    <input type="submit" value="Send" />
                </div>
             </form>

          </div>
        </section>
    </main>
  );
}

export default Home;
