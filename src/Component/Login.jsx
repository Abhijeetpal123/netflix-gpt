import Header from "./Header";
import Signin from "./Singin";
import { useState } from "react";
import React from "react";

const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  
  return (
    <div>
      <Header onSignInClick={() => setShowSignin(true)} />
      <div className="relative h-screen w-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_medium.jpg"
          alt="netflix-bg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-50 text-center z-20 pt-24 sm:pt-32 ">
          <h1 className="text-white text-4xl sm:text-6xl font-bold md:text-7xl tracking-tight">
            Unlimited movies,TV shows and more
          </h1>
          <p className="text-white text-xl sm:text-2xl mt-4 font-medium">
            Starts at ₹149.Cancel at any time.
          </p>
          <p className="text-white text-base sm:text-lg mt-4 font-medium ">
            Ready to watch?Enter your emailto create or restart your membership{" "}
          </p>

          {/* email form  */}
          <form className="mt-6 w-full max-w-xl flex flex-col sm:flex-row gap-4 px-4">
            <input
              className="min-w-[250px] p-4 rounded-sm text-white flex-1 outline-none border border-transparent hover:border-white focus:border-white transition duration-200"
              type="email"
              placeholder="Email address"
            />
            <button className="bg-red-600 text-white px-6 py-4 font-semibold rounded-sm hover:bg-red-700 transition-all duration-200 cursor-pointer ">
              Get Started
            </button>
          </form>
        </div>
      </div>
      {showSignin && <Signin />}
    </div>
  );
};
export default Login;
