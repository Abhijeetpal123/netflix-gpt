import Body from "./Component/Body.jsx";
import "./App.css";
import Signin from "./Component/Singin.jsx";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./Utils/Appstore.jsx";

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
      <Provider store={appStore}>
        <Body onSignInClick={handleSigninOpen} />
      </Provider>

      {ShowSignin && <Signin onClose={handleSigninClose} />}
    </div>
  );
}
export default App;
