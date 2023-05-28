import React from "react";
import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import FormInputs from "./FormInputs";
import { authentications } from "../constants/formFields";
import Authentications from "./Authentications";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <FormInputs
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />

      <div className="relative flex items-center justify-center w-full border border-t border-purple-400">
        <div className="absolute px-3 bg-white text-violet-600">Or</div>
      </div>

      {authentications.map((auth) => (
        <Authentications
          key={auth.id}
          symbol={auth.symbol}
          text={auth.text}
          linkUrl={auth.linkUrl}
          // onClick={auth.onClick()}
        />
      ))}
    </form>
  );
}
export default Login;
