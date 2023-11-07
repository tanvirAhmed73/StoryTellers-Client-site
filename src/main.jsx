import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './FrontPageComponent/Layout/Layout';
import Home from './FrontPageComponent/Home/Home';
import Login from './Login&Register/Login';
import Register from './Login&Register/Register';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProvider from '../Provider/AuthProvider';
import AddBook from './FrontPageComponent/Navbar/AddBook/AddBook';
import AllBook from './FrontPageComponent/Navbar/AllBook/AllBook';
import BorrowedBooks from './FrontPageComponent/Navbar/BorrowedBooks/BorrowedBooks';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import HealthAllBooks from './FrontPageComponent/Categories/HealthAllBooks/HealthAllBooks';
import ComputerAllBooks from './FrontPageComponent/Categories/ComputerAllBooks/ComputerAllBooks';
import ScienceAllBooks from './FrontPageComponent/Categories/ScienceAllBooks/ScienceAllBooks';
import BussinessAllBooks from './FrontPageComponent/Categories/BussinessAllBooks/BussinessAllBooks';
import Details from './FrontPageComponent/Categories/BookDetailsPage/Details';
import UpdateProduct from './FrontPageComponent/Categories/UpdateProduct/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
      },
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/addBook',
        element:<PrivateRoute><AddBook></AddBook></PrivateRoute>,
      },
      {
        path:'/allBook',
        element:<PrivateRoute><AllBook></AllBook></PrivateRoute>,
        loader: ()=> fetch("http://localhost:5000/book"),
      },
      {
        path:'/borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
      },

      // details page
      {
        path: "/details/:id",
        element: <Details></Details> ,
        loader: ()=> fetch("http://localhost:5000/book"),
      },
      
      // updateproduct
      {
        path: '/updateproduct/:id',
        element :  <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> ,
        loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`),        
      },


      // book categories
      {
        path:'/healthAllBooks',
        element:<HealthAllBooks></HealthAllBooks>,
        loader: ()=> fetch("http://localhost:5000/book"),
      },
      {
        path:'/computerAllBooks',
        element:<ComputerAllBooks></ComputerAllBooks>,
        loader: ()=> fetch("http://localhost:5000/book"),
      },
      {
        path:'/scienceAllBooks',
        element:<ScienceAllBooks></ScienceAllBooks>,
        loader: ()=> fetch("http://localhost:5000/book"),
      },
      {
        path:'/bussinessAllBooks',
        element:<BussinessAllBooks></BussinessAllBooks>,
        loader: ()=> fetch("http://localhost:5000/book"),
      },


      // login and registration
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/signup',
        element:<Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </React.StrictMode>
  </div>
)
