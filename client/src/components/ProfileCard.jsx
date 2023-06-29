import React, { useState, useEffect } from "react";
import { useAuth } from "../services/AuthService";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfileCard() {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      setUsername(docSnap.data().username);
      console.log(docSnap.data());
    };

    getUser();
  }, [currentUser.uid]);

  return (
    <div className="mx-auto bg-white rounded-md my-10 py-6 mobile:pt-4 mobile:pb-2 px-10">
      <p className="capitalize">
        <span className="font-semibold text-center text-xl mobile:text-base mx-2">
          Username:
        </span>
        {username}
      </p>
      <p>
        <span className="font-semibold text-center text-xl mobile:text-base mx-2">
          Email:
        </span>
        {currentUser.email}
      </p>
      <button
        type="submit"
        className="mx-auto relative w-3/4 flex justify-center mt-5 mobile:mt-3 mobile:mb-3 py-1.5 px-20 mobile:px-14 border border-transparent text-md font-semibold rounded-md text-black bg-neutral-300 hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
        onClick={() => {
          navigate("/update-profile");
        }}
      >
        Update Profile
      </button>
    </div>
  );
}

export default ProfileCard;
