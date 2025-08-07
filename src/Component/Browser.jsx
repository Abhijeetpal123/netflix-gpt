import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { Logo, SUPPORTED_LANGUAGES } from "../Utils/constants";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/ConfigSlice";

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
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      /*sign in  */ if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
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
        <div className="flex space-x-4">
          <button
            onClick={handleGptSearchClick}
            class="px-6 py-2 rounded-full bg-gray-800 text-white font-medium
            border border-gray-600 hover:border-green-400
            hover:text-green-400 hover:shadow-[0_0_12px_rgba(74,222,128,0.6)]
            transition-all duration-300 cursor-pointer"
          >
            GPT Search
          </button>
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm border border-gray-600 
          hover:border-gray-400 focus:border-white focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-black cursor-pointer "
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 cursor-pointer transition duration-200 "
          >
            Sign Out
          </button>
        </div>
      </div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browser;
