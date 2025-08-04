import { useNavigate } from "react-router-dom";
import Body from "./Body";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import {  Logo } from "../Utils/constants";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovie";

function Browser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      /*sign in  */ if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // console.log("Current User from Firebase:", user);
      } /*Sign out */ else {
        dispatch(removeUser());
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  // Fetch data from tmdb api  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black via-transparent to-transparent px-6 py-4 flex justify-between items-center">
        <img
          className="w-36 sm:w-40 md:w-48 lg:w-52 "
          src={Logo}
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
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browser;
