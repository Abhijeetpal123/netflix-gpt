import { useNavigate } from "react-router-dom";
import Body from "./Body";

import {  signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

function Browser() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
   navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  };

  return (
    <div>
      
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black via-transparent to-transparent px-6 py-4 flex justify-between items-center">
        <img
          className="w-36 sm:w-40 md:w-48 lg:w-52 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netfix-logo"
        />
        <div>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 cursor-pointer transition duration-200 "
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Browser;
