import React from 'react';
import Nav from './Component/Navbar';
// import QuizHtml from './Component/Html';
import Footer from './Component/Footer';
import SignIN from './Component/Sign';
import Home from './Component/Home';
import Quiz from './Component/Quiz';
import { Routes, Route } from "react-router-dom"; // Removed Router, only Routes here

function Layout() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Sign" element={<SignIN />} />
      </Routes>
      <Footer />
     
    </>
  );
}

export default Layout;
