import React from "react";
import "./Navbar.css";  // CSS module import

function Nav() {
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

    <section >
      <h2 className="section-h2" >Ace Your Next Interview</h2>
      <p className="section-p">
        Practice with AI-powered mock interviews and get personalized feedback
      </p>
      <div >
        <a href="/dashboard" >Get Started</a>
        <a href="#features" >Learn More</a>
      </div>
    </section>
    </main>








    <section id="features" className="py-16 bg-white px-6 md:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">Features</h2>
            <p className="mt-4 text-lg text-gray-800">
              Our AI Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">AI Mock Interviews</h3>
                  <p className="mt-2 text-gray-600">Experience realistic interview scenarios with our advanced AI.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">Instant Feedback</h3>
                  <p className="mt-2 text-gray-600">Get instant, personalized feedback to improve your performance.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600">Comprehensive Reports</h3>
                  <p className="mt-2 text-gray-600">Receive detailed reports highlighting your strengths and weaknesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default Nav;
