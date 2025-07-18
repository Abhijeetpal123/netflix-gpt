import Body from "./Component/Body.jsx";
import "./App.css";
import Signin from "./Component/Singin.jsx";
import { useState } from "react";

function App() {
  const [ShowSignin, setShowSignin] = useState(false);
  const handleSigninOpen = () => {
    setShowSignin(true);
  };
  const handleSigninClose = () => {
    setShowSignin(false);
  };
  return (
    <div>
      <Body onSignInClick={handleSigninOpen} />

      {ShowSignin && <Signin onClose={handleSigninClose} />}
    </div>
  );
}
export default App;
