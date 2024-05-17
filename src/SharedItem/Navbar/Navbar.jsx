import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const[theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "light");

  const handletoogle = (e)=>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }


  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  },[theme]);


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

      {/* light and dark theme */}
      <label className="swap swap-rotate">
                  <input type="checkbox" onChange={handletoogle}/>
                  
                  {/* sun icon */}
                  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                  
                  {/* moon icon */}
                  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                  
                </label>

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            
            <NavLink to={'/home'}>
            <li>
              <a>Home</a>
            </li>
          </NavLink>

          <NavLink to={'/addBook'}>
            <li>
              <a>Add Book</a>
            </li>
          </NavLink>

          <NavLink to={'/allBook'}>
            <li>
              <a>All Books</a>
            </li>
          </NavLink>

          <NavLink to={'/borrowedBooks'}>
            <li>
              <a>Borrowed Books</a>
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
              <a>Home</a>
            </li>
          </NavLink>

          <NavLink to={'/addBook'}>
            <li>
              <a>Add Book</a>
            </li>
          </NavLink>

          <NavLink to={'/allBook'}>
            <li>
              <a>All Books</a>
            </li>
          </NavLink>

          <NavLink to={'/borrowedBooks'}>
            <li>
              <a>Borrowed
Books</a>
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
                <span className="mr-3">{user.displayName}</span>
                :
                <span className="mr-3">{user.email}</span>
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
            : <NavLink to={'/login'}><a className="btn bg-white text-purple-600">Login Now</a></NavLink>
          }


      </div>
    </div>
  );
};

export default Navbar;
