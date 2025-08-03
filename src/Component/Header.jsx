import { useEffect } from "react";
import Signin from "./Singin";
import { Logo } from "../Utils/constants";

function Header({ onSignInClick }) {
 
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black via-transparent to-transparent px-6 py-4 flex justify-between items-center">
        <img
          className="w-36 sm:w-40 md:w-48 lg:w-52 "
          src={Logo}
          alt="Netfix-logo"
        />
        <div className=" flex items-center gap-4  ">
          <select className="bg-black bg-opacity-60 border border-white text-white px-2 py-1 rounded cursor-pointer outline-none z-30">
            <option className="text-black" value="en">
              English
            </option>
            <option className="text-black" value="hi">
              Hindi
            </option>
          </select>
          <button
            onClick={onSignInClick}
            className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 cursor-pointer transition duration-200 "
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
