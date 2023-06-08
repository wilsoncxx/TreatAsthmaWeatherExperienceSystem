import React from "react";
import { useState, useEffect } from "react";
import FormAction from "./FormAction";
import FormInputs from "./FormInputs";
import { useAuth } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function UpdateProfile() {
  const { currentUser, updatingEmail, updatingPassword } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    setButtonClicked((currentClicked) => {
      return !currentClicked;
    });

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    const promises = [];

    setError("");
    setLoading(true);

    if (email !== currentUser.email) {
      promises.push(updatingEmail(email));
    } else if (!password) {
      setLoading(false);
      return setError("Email should not be the same");
    }
    if (password) {
      promises.push(updatingPassword(password));
    }

    Promise.all(promises)
      .then(() => {
        updateSuccessful();
      })
      .catch(() => {
        setError("Failed to update profile");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function updateSuccessful() {
    toast.info("Directing to Dashboard...");
    toast.success("Profile updated successfully");
    await new Promise((res) => setTimeout(res, 3000));
    navigate("/dashboard");
  }

  useEffect(() => {
    const updateError = () => {
      if (
        error === "Passwords do not match" ||
        error === "Email should not be the same"
      ) {
        toast.warning(error);
      } else if (error !== "") {
        toast.error(error);
      }
    };

    updateError();
  }, [buttonClicked, error]);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        <FormInputs
          key={"username"}
          handleChange={handleUsernameChange}
          value={username}
          labelText={"Username"}
          labelFor={"username"}
          id={"username"}
          name={"username"}
          type={"text"}
          isRequired={true}
          autoComplete={"username"}
          placeholder={"Username"}
        />
        <FormInputs
          key={"email-address"}
          handleChange={handleEmailChange}
          value={email}
          labelText={"Email address"}
          labelFor={"email-address"}
          id={"email-address"}
          name={"email"}
          type={"email"}
          isRequired={true}
          autoComplete={"email"}
          placeholder={"Email address"}
        />
        <FormInputs
          key={"password"}
          handleChange={handlePasswordChange}
          value={password}
          labelText={"Password"}
          labelFor={"password"}
          id={"password"}
          name={"password"}
          type={"password"}
          isRequired={false}
          autoComplete={"current-password"}
          placeholder={"Password"}
        />
        <FormInputs
          key={"confirm-password"}
          handleChange={handlePasswordConfirmChange}
          value={passwordConfirm}
          labelText={"Confirm Password"}
          labelFor={"confirm-password"}
          id={"confirm-password"}
          name={"confirm-password"}
          type={"password"}
          isRequired={false}
          autoComplete={"confirm-password"}
          placeholder={"Confirm Password"}
        />
        <FormAction
          loading={loading}
          handleSubmit={handleSubmit}
          text="Update"
        />
      </div>

      <ToastContainer
        autoClose={3000}
        theme="colored"
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </form>
  );
}
