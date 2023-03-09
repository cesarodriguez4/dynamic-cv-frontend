import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/home',
        element: <App/>
    },
    {
        path: '/login',
        element: <h1>login</h1>
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

