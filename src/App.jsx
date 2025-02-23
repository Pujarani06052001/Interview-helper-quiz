import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from './Component/Navbar';
import SignIN from './Component/Sign';

const App = () => {
  return (
    <Router>
    {/* <Nav/> */}
      <Routes>
        {/* Home page par Navbar dikhana hai */}
        <Route path="/" element={<Nav/>} />
        
        {/* SignIN page fullscreen hona chahiye, isliye yahan Navbar nahi hai */}
        <Route path="/sign" element={<SignIN />} />
        
      </Routes>
    </Router>
  );
}

export default App;
