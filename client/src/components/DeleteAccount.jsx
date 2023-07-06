import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../services/AuthService";

export default function DeleteAccount() {
  const { currentUser, deleteThisUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const deleteError = () => {
      if (error !== "") {
        toast.error(error);
      }
    };

    deleteError();
  }, [buttonClicked, error]);

  return (
    <div className="text-sm flex items-center justify-end">
      <button
        disabled={loading}
        className="font-medium text-purple-600 hover:text-purple-400"
        onClick={() => {
          setButtonClicked((currentClicked) => {
            return !currentClicked;
          });

          deleteThisUser(currentUser.uid).then(() => {
            navigate("/login")
              .catch(() => {
                return setError("Failed to delete account");
              })
              .finally(() => {
                setLoading(false);
              });
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
