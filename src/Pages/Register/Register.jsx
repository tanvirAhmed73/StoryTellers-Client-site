import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [successRegistration, setSuccessRegistration] = useState('');
    const navigate = useNavigate();
    
    const {createUser} = useContext(AuthContext);

    const handleRegister= e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // reset error
        setRegisterError('');
        // reset succesecreate message
        setSuccessRegistration('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
          setRegisterError('YOur password should have at least six Characters,One Upper Case, & Special character');
          return;
        }

        createUser(email,password)
        .then((result) => {
            // Signed up
            form.reset()
            setSuccessRegistration('User create successfully');
            // ...
          })
          .catch((error) => {
            setRegisterError('Gmail Already Used');
            // ..
          });
    }


  return (
    <div className="flex bg-white">

      <div>
        <img className="mt-32"
          src="https://us.123rf.com/450wm/loft39studio/loft39studio2306/loft39studio230614799/205912935-generative-ai-young-business-man-programmer-creative-outsourced-employee-sitting-on-chair-working-on.jpg?ver=6"
          alt=""
        />
      </div>

      <div className="mt-32 mb-32 hero-content flex-col lg:flex-row-reverse bg-white w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-black">Sign Up Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>

            <NavLink to={"/login"}>Already Have An Account?</NavLink>
          </form>

          {
                    registerError && <p className="ml-8 text-red-700">{registerError}</p>
                }
                {
                    successRegistration && <p className="ml-8 text-green-700">{successRegistration}</p>
                }

          
        </div>
      </div>
    </div>
  );
};

export default Register;
