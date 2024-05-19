import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { LuBookUp2 } from "react-icons/lu";
import { LuBookCopy } from "react-icons/lu";
import { LuBookPlus } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);


  const handleLogout = () =>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch(() => {
      // An error happened.
    });
  }


  return (
    <div className="navbar bg-base-100">
      {/*Navbar Start  */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* mini button responsive  */}
          <ul
            tabIndex={0}
            className="menu menu-sm text-green-600 dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            
            <NavLink to={'/home'}>
            <li className="">
              <a><IoMdHome /> Home</a>
            </li>
          </NavLink>

          

          <NavLink to={'/allBook'}>
            <li>
              <a><LuBookCopy /> All PDF Books</a>
            </li>
          </NavLink>

          <NavLink to={'/borrowedBooks'}>
            <li>
              <a><LuBookUp2 /> Borrowed
Books</a>
            </li>
          </NavLink>

          <NavLink to={'/myCart'}>
            <li className="">
              <p className=""><PiShoppingCartSimpleFill />My Cart</p>
            </li>
          </NavLink>
          </ul>
        </div>
        {/* logo */}
        <NavLink to={'/'}>
          <img className="w-[80px] lg:w-[150px]" src="https://static.vecteezy.com/system/resources/thumbnails/004/815/526/small_2x/storytelling-word-handwritten-with-custom-calligraphy-creative-word-for-logotype-badge-icon-card-postcard-logo-banner-with-colorful-stars-and-swoosh-illustration-design-vector.jpg" alt="" />
        </NavLink>
      </div>


      

      <div className="navbar-center hidden lg:flex">
        {/*large navbar responsive */}
        <ul className="menu menu-horizontal font-bold text-green-600 px-1">

          <NavLink to={'/home'}>
            <li className="">
              <a><IoMdHome /> Home</a>
            </li>
          </NavLink>

          

          <NavLink to={'/allBook'}>
            <li>
              <a><LuBookCopy /> All PDF Books</a>
            </li>
          </NavLink>

          <NavLink to={'/borrowedBooks'}>
            <li>
              <a><LuBookUp2 /> Borrowed
Books</a>
            </li>
          </NavLink>

          <NavLink to={'/myCart'}>
            <li className="">
              <p className=""><PiShoppingCartSimpleFill />My Cart</p>
            </li>
          </NavLink>
          
        </ul>
      </div>


      {/* navbar end section  */}
      <div className="navbar-end">
            {/* user name or email */}
            {
              user? <>
              {
                user.displayName?
                <span className="mr-3 hidden md:block">{user.displayName}</span>
                :
                <span className="mr-3 hidden md:block">{user.email}</span>
              }


                {/* profile  */}
                <div className=" mr-3 dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      {
                        user.photoURL?
                        <img src={user.photoURL} />
                        :
                        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />

                      }
                    </div>
                </label>
                </div>


                


                <NavLink to={'/home'}><a onClick={handleLogout} className="btn bg-red-800 text-white">Sign out</a></NavLink>
            </>
            : <NavLink to={'/login'}><a className="btn bg-white text-green-600">Login Now</a></NavLink>
          }


      </div>
    </div>
  );
};

export default Navbar;
