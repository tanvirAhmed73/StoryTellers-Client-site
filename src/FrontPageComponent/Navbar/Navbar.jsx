import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
// import { BiSolidUserCircle } from 'react-icons/bi';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div className="navbar bg-base-100">
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
              <a>Borrowed
Books</a>
            </li>
          </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        {/*large navbar responsive */}
        <ul className="menu menu-horizontal px-1">

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
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li>
                    <a>Settings</a>
                    </li>
                    <li>
                    <a>Logout</a>
                    </li>
                </ul>
                </div>

                {/* cart option */}
                  {/* <div className="flex-none  mr-3">
                      <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-ghost btn-circle">
                              <div className="indicator">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                  <span className="badge badge-sm indicator-item">8</span>
                              </div>
                          </label>

                          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                              <div className="card-body">
                              <span className="font-bold text-lg">8 Items</span>
                              <span className="text-info">Subtotal: $999</span>
                              <div className="card-actions">
                                  <button className="btn btn-primary btn-block">View cart</button>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div> */}


                <NavLink to={'/home'}><a onClick={handleLogout} className="btn bg-red-800 text-white">Sign out</a></NavLink>
            </>
            : <NavLink to={'/login'}><a className="btn bg-white text-purple-600">Login/Registration</a></NavLink>
          }


      </div>
    </div>
  );
};

export default Navbar;
