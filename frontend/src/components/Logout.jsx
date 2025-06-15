import React from 'react';
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const { logout } = useAuth();

  const handleLogout = () => {
    try {
      logout(); // clear context + localStorage
      toast.success("Logout successfully");

      // ✅ Delay reload so toast has time to show
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 2 seconds delay

    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

