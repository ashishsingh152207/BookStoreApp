import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Login from "./Login";

function Signup() {



  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successfully");
         
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[400px] relative">
        {/* ❌ X (Close) Button */}
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1); // go back
            } else {
              navigate("/"); // fallback
            }
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
          aria-label="Close"
        >
          ×
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-bold mb-4 text-center">Signup</h3>

          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your full name"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => {
                const modal = document.getElementById("my_modal_3");
                if (modal?.showModal) modal.showModal();
              }}
            >
              Login
            </span>
          </p>
        </form>

        {/* Login modal */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
