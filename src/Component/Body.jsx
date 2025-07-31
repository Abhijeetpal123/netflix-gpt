import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import Signin from "./Singin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Body({ onSignInClick }) {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      /*sign in  */ if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        console.log("Current User from Firebase:", user);
      } /*Sign out */ else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
