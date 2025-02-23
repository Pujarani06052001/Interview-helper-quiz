import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Quiz from './Component/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  // Add other routes here if needed
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
