import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "animate.css";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Register = () => {
  const { signUpUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const registeredUser = { name, email };

    try {
      const res = await signUpUser(email, password);
      console.log(res.user);

      await axiosPublic.post("/users", registeredUser);

      navigate("/");
      Swal.fire({
        title: "Success!",
        text: "Registration Successful",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res.user);

      const user = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
      };

      const result = await axiosPublic.post(`/users`, user);
      console.log(result.data);

      navigate("/");

      Swal.fire({
        title: "Good job!",
        text: "Logged in with Google!",
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Google sign-in failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse animate__animated animate__backInDown">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                placeholder="Your name"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center pb-10">
            <div className="flex justify-center pb-4">
              <button
                onClick={handleGoogle}
                className="btn bg-gray-200 border border-gray-400 w-32 p-2 text-center"
              >
                <FcGoogle className="text-xl" />
                Google
              </button>
            </div>
            <h2>
              Already Have Account?{" "}
              <Link className="text-red-700 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
