import { useState, useRef } from "react";
import React from "react";
import checkValidData from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

function Signin({ onClose }) {
  const [message, setMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const result = checkValidData(email.current.value, password.current.value);

    setMessage(result);

    if (result) return;
    //sign in sign up logic

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
       
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(error.code + "-" + error.message);
         
        });
    } else {
      //  sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(error.code + "-" + error.message);
        });
    }
  };
  return (
    <div className="  bg-black-500 opacity-85 fixed inset-0 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl font-semibold"
      >
        x
      </button>
      <div className="bg-black  p-10 rounded-md w-[400px]  text-white">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <input
            ref={email}
            className=" bg-[#333] text-white placeholder-gray-400 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            type="email"
            placeholder="Email or mobile number"
          />
          <input
            ref={password}
            className="bg-[#333] text-white placeholder-gray-400 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            type="password"
            placeholder="password"
          />
        </form>
        {message && <p className="text-red-500 mt-2">{message}</p>}
        <button
          onClick={handleButtonClick}
          className=" text-white w-full mt-6 bg-red-600 hover:bg-red-700 font-semibold py-3 rounded-md cursor-pointer"
        >
          Sign In
        </button>
        <h2 className="text-center my-4 text-[#aaa]">OR</h2>
        <div className="flex justify-between items-center mt-4 text-sm text-[#b3b3b3]">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox accent-white"
              defaultChecked
            />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="mt-6 text-sm text-[#b3b3b3]">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span onClick={() => setIsSignInForm(!isSignInForm)}>
            {" "}
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </div>
        <p className="mt-4 text-xs text-[#8c8c8c] leading-tight">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
