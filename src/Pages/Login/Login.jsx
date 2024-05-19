import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../../firebase.init";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [successLogin, setSuccessLogin] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  // console.log(location)

  // login with google handle
  const handleGoogleLogin = () =>{

    // reset error
    setLoginError("");
    // reset login
    setSuccessLogin("");

    signInWithPopup(auth, provider)
      .then((result) => {
        setSuccessLogin("Login successfully!");
        navigate(from)
      })
      .catch((error) => {
        setLoginError("Invalid Gmail Or Password");
      });
    
  };




  const {signInUser} = useContext(AuthContext);
  //   login with gmail password handle
  const handleLogin = (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    // reset error
    setLoginError("");
    // reset login
    setSuccessLogin("");

    



    signInUser(email, password)
      .then((result) => {
        // Signed in
        setSuccessLogin("Login successfully!");
        e.target.reset();
        navigate(from)
        axios.post("https://project-eleven-ct2ky6el6-tanvirs-projects-23a7939e.vercel.app/jwt",
        {email},
        {withCredentials:true})
      })
      .then((res) => console.log(res.data))
      .catch((error) => {
        setLoginError(" Gmail & Password Does Not Exist");
      });
    };

  return (
      <div style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/015/617/013/non_2x/beautiful-mountain-forest-and-river-landscape-background-vector.jpg)",
      }} className="hero min-h-screen">



        {/* login form */}
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-black">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <NavLink  to={"/signup"}>
                Create An Account?
              </NavLink>
            </form>

            {/* signUp with google button */}
            <div onClick={handleGoogleLogin} className="flex justify-center items-center">
                <button  className="mr-1">Sign In With</button>
                <button>
                  <FcGoogle />
                </button>
              </div>

              {
            loginError && <p className="text-center text-red-700">{loginError}</p>}
            {
            successLogin && 
              <p className="text-center text-green-700">{successLogin}</p>
            }

          </div>
        </div>





      </div>
  );
};

export default Login;
