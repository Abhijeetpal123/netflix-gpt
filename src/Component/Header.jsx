import Signin from "./Singin";

function Header({onSignInClick}) {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black via-transparent to-transparent px-6 py-4 flex justify-between items-center">
        <img
          className="w-36 sm:w-40 md:w-48 lg:w-52 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
          <button onClick={onSignInClick}
           className="bg-red-600 text-white px-4 py-1 rounded font-semibold hover:bg-red-700 cursor-pointer transition duration-200 ">
            Sign in
          </button>
        </div>
      </div>

    </div>
  );
}
export default Header;
