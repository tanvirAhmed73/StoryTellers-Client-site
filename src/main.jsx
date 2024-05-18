import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../src/Layout/Layout';
import Home from '../src/Pages/HomePage/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';

import PrivateRoute from './PrivateRoute/PrivateRoute';

import Details from './Pages/BookDetailsPage/Details';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';

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
        element:<AllBook></AllBook>,
      },
      {
        path:'/allAudioBooks',
        element:<AllAudioBooks></AllAudioBooks>,
      },
      {
        path:'/borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
      },
      {
        path:'/myCart',
        element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
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
import ReadPage from './Pages/BookDetailsPage/ReadPage';
import HealthAllBooks from './Pages/HomePage/PDFbookOnline/PDFbookCategories/HealthAllBooks/HealthAllBooks';
import ComputerAllBooks from './Pages/HomePage/PDFbookOnline/PDFbookCategories/ComputerAllBooks/ComputerAllBooks';
import ScienceAllBooks from './Pages/HomePage/PDFbookOnline/PDFbookCategories/ScienceAllBooks/ScienceAllBooks';
import BussinessAllBooks from './Pages/HomePage/PDFbookOnline/PDFbookCategories/BussinessAllBooks/BussinessAllBooks';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from '../src/Provider/AuthProvider';
import AllBook from './Pages/AllBook/AllBook';
import BorrowedBooks from './Pages/BorrowedBooks/BorrowedBooks';
import Mycart from './Pages/Mycart/Mycart';
import AddBook from './Pages/AddBook/AddBook';
import AllAudioBooks from './Pages/AllAudioBooks/AllAudioBooks';

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
