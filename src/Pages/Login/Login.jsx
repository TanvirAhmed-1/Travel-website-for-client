import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Navbar";
import "animate.css"
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser}=useContext(AuthContext)
   const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(res=>{
          console.log(res.user)
          Swal.fire({text:"Logged In Successfully!",

            color:"#716add",
          });
          navigate(location?.state?location.state:"/")
        })
        .catch(error=>console.error(error))

    }
  return (
    <div>
      <Navbar></Navbar> 
    <div className="hero min-h-screen">
        
      <div className="hero-content flex-col lg:flex-row-reverse animate__animated animate__backInDown">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <h2>
                  Don't Have Account? Please <Link className="text-red-600 font-bold" to={"/register"}>Register</Link> First
                </h2>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
