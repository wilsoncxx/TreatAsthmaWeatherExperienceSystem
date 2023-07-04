import { UilGoogle } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { Navigate } from "react-router-dom";

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
    onClick: async (navigate) => {
      const provider = new GoogleAuthProvider();
      // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      const auth = getAuth();
      await signInWithRedirect(auth, provider);
      // console.log("asdf");
    },
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

export { cities, authentications, questions };
