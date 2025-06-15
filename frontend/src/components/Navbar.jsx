import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider"; // ✅ adjust path to match your folder structure
import Logout from "./Logout";
function Navbar() {

   const{user:authUser,SetAuthUser}=useAuth();
   console.log(authUser)

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out" : ""
      }`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none  dark:bg-slate-900 dark:text-white" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                     fill="currentColor" className="w-4 h-4 opacity-70">
                  <path fillRule="evenodd"
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0 .145.127l3.85 3.85a1 1 0 0 0 1.414-1.414l-3.85-3.85a1.007 1.007 0 0 0-.127-.145zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                        clipRule="evenodd" />
                </svg>
              </label>
            </div>

            {/* Theme toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller
               value='synthwave" />

             <svg
             className="swap-off h-7 w-7 fill-current"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-14a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm0 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-6a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm14.07 5.07a1 1 0 01-1.41 0l-.71-.71a1 1 0 011.41-1.41l.71.71a1 1 0 010 1.41zM6.34 6.34a1 1 0 01-1.41 0l-.71-.71a1 1 0 111.41-1.41l.71.71a1 1 0 010 1.41zm12.02-1.41a1 1 0 010 1.41l-.71.71a1 1 0 01-1.41-1.41l.71-.71a1 1 0 011.41 0zM6.34 17.66a1 1 0 010-1.41l.71-.71a1 1 0 111.41 1.41l-.71.71a1 1 0 01-1.41 0z" />
            </svg>


              {/* Dark (Moon) Icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M21.75 13.008a.75.75 0 0 0-.787-.666 8.25 8.25 0 0 1-9.304-9.304.75.75 0 0 0-1.414-.6A10.5 10.5 0 1 0 21.717 14.82a.75.75 0 0 0 .033-1.812z" />
              </svg>
            </label>
             {
              authUser?<Logout/>:
               <div>
              <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"  onClick={()=>document.getElementById('my_modal_3').showModal()
              }>Login</a>
              
                <Login />
              
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
