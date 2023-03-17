import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Login';


const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

