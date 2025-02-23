
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from './Component/Navbar';
import SignIN from './Component/Sign';
import Home from './Component/Home'; 

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/sign" element={<SignIN />} />
      </Routes>
    </Router>
  );
}

export default App;
