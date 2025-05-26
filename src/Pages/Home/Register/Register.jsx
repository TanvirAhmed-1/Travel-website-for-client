import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Navbar from "../../../Components/Navbar";
import { Link } from "react-router-dom";
import "animate.css"
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
    const {signUpUser,signInWithGoogle} =useContext(AuthContext);

    const handleRegister= e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const registeredUser ={name,email}
        console.log(email,password);
        signUpUser(email,password)
        .then(res=>{
            console.log(res.user)
            
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(registeredUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
        })
        
        })
        .catch(error=>console.error(error))
        
    }
    const handleGoogle = ()=>{
      signInWithGoogle()
      .then(res=>{console.log(res.user)
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });}
    )
    }
  return (
    <div>
      <Navbar></Navbar>  
    <div className="hero  min-h-screen ">
       
      <div className="hero-content flex-col lg:flex-row-reverse animate__animated animate__backInDown">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
             
            </div>
            <div className="form-control">
              <button onClick={handleGoogle} className="btn w-24 p-2   btn-primary bg-transparent text-center items-center flex border-none"><FcGoogle/>Google</button>
              </div>
            <h2>Already Have Account? <Link className="text-red-700 font-boldx" to={'/login'}>Login</Link> Then</h2>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
