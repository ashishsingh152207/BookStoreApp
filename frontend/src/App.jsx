import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './context/AuthProvider';

function App() {

  const{user:authUser,logout}=useAuth()
   console.log(authUser)

  return (
    <>
      {/* ToastContainer should be outside Routes so it works everywhere */}
      
          <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to ="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </>
  );
}

export default App;
