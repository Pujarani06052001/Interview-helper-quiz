
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Nav from './Component/Navbar';
// import SignIN from './Component/Sign';
// import Home from './Component/Home'; 
// import Footer from './Component/Footer';
// import Quiz from './Component/Quiz'


// const App = () => {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />  
//         <Route path="/Quiz" element={<Quiz />} /> 
//         <Route path="/sign" element={<SignIN />} />
//       </Routes>
//       <Footer/>
//     </Router>
    
//   );
// }
// export default App;




import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Quiz from './Component/Quiz';
import SignIN from './Component/Sign';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/sign',
    element: <SignIN />,
  },


  // Add other routes here if needed
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
