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

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
