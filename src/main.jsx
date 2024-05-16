import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../src/Layout/Layout';
import Home from '../src/Pages/HomePage/Home/Home';
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
      
        
      },
      {
        path:'/borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        // loader: ()=> fetch("https://story-tellers-server-site-code.vercel.app/addborrow"),
      },

      // details page
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
        loader: ()=> fetch("https://story-tellers-server-site-code.vercel.app/book"),
      },

      // read page
      {
        path: "/read/:id",
        element: <PrivateRoute><ReadPage></ReadPage></PrivateRoute> ,
        loader: ()=> fetch("https://story-tellers-server-site-code.vercel.app/book"),
      },
      
      // updateproduct
      {
        path: '/updateproduct/:id',
        element :  <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> ,
        loader: ({params})=> fetch(`https://story-tellers-server-site-code.vercel.app/book/${params.id}`),        
      },


      // book categories
      {
        path:'/healthAllBooks',
        element:<PrivateRoute> <HealthAllBooks></HealthAllBooks></PrivateRoute> ,
        
      },
      {
        path:'/computerAllBooks',
        element:<PrivateRoute><ComputerAllBooks></ComputerAllBooks></PrivateRoute>,
      },
      {
        path:'/scienceAllBooks',
        element:<PrivateRoute><ScienceAllBooks></ScienceAllBooks></PrivateRoute>,
      },
      {
        path:'/bussinessAllBooks',
        element:<PrivateRoute><BussinessAllBooks></BussinessAllBooks></PrivateRoute>,
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

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReadBookSummary from './FrontPageComponent/Categories/BookDetailsPage/ReadBookSummary';
import ReadPage from './FrontPageComponent/Categories/BookDetailsPage/ReadPage';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </React.StrictMode>
  </div>
)
