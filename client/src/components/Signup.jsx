import React from "react";
import { useState, useRef } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormInputs from "./FormInputs";
import { useAuth } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

function Signup() {
  // const [signupState, setSignupState] = useState(fieldsState);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log(email);
      console.log(password);
      // await signup(email, password);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {/* {fields.map((field) => ( */}
        <FormInputs
          key={"username"}
          handleChange={handleUsernameChange}
          value={username}
          labelText={"Username"}
          labelFor={"username"}
          id={"username"}
          name={"username"}
          type={"text"}
          // ref={usernameRef}
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
          // ref={emailRef}
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
          // ref={passwordRef}
          isRequired={true}
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
          // ref={passwordConfirmRef}
          isRequired={true}
          autoComplete={"confirm-password"}
          placeholder={"Confirm Password"}
        />
        {/* ))} */}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

export default Signup;
