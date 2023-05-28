import { UilGoogle } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";

const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const cities = [
  {
    id: 1,
    title: "cyberjaya",
  },
  {
    id: 2,
    title: "klang",
  },
  {
    id: 3,
    title: "putrajaya",
  },
  {
    id: 4,
    title: "cheras",
  },
  {
    id: 5,
    title: "puchong",
  },
];

const authentications = [
  {
    id: "google",
    symbol: <UilGoogle size={23} className="text-white mx-1.5" />,
    text: "Login with google",
    linkUrl: "/",
    // onClick: () => {
    //   window.open("http://localhost:5000/auth/google", "_self");
    // },
  },
  {
    id: "facebook",
    symbol: <UilFacebookF size={23} className="text-white mx-0.5" />,
    text: "Login with facebook",
    linkUrl: "/",
  },
];

const questions = [
  {
    id: 1,
    title: "question 1",
    header: "In the past 4 weeks, do you have:",
    content: "Daytime asthma symptoms more than twice per week?",
  },
  {
    id: 2,
    title: "question 2",
    header: "In the past 4 weeks, do you have:",
    content: "Any night waking due to asthma?",
  },
  {
    id: 3,
    title: "question 3",
    header: "In the past 4 weeks, do you have:",
    content: "Reliever needed for symptoms more than twice per week?",
  },
  {
    id: 4,
    title: "question 4",
    header: "In the past 4 weeks, do you have:",
    content: "Any activity limitation due to asthma?",
  },
];

export { loginFields, signupFields, cities, authentications, questions };
