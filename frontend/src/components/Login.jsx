import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");
        document.getElementById("my_modal_3").close();

        setTimeout(()=>{
          

          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          

        },3000);
        navigate(from, { replace: true });

      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
        setTimeout(()=>{},1000);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-sm px-6 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-4 text-center">Login</h3>

            {/* Email */}
            <div className="space-y-1 mb-3">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1 mb-4">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Login button */}
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 w-full"
              >
                Login
              </button>
              <p className="text-center text-sm">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-600 underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
