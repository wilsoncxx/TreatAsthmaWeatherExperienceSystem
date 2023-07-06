import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../services/AuthService";

export default function DeleteAccount() {
  const { currentUser, deleteThisUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="text-sm flex items-center justify-end">
      <button
        disabled={loading}
        className="font-medium text-purple-600 hover:text-purple-400"
        onClick={() => {
          console.log("asdf");
          deleteThisUser(currentUser.uid).then(() => {
            // navigate("/login")
            //   .catch(() => {
            //     toast.error("Failed to delete account");
            //   })
            //   .finally(() => {
            //     setLoading(false);
            //   });
          });
        }}
      >
        Delete Account
      </button>

      <ToastContainer
        autoClose={3000}
        theme="colored"
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </div>
  );
}
