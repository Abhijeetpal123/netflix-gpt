import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          className="m-4 p-4 md:m-4 md:p-4  col-span-9 bg-white"
          type="text"
          placeholder={lang[langkey].gptSearchplaceholder}
        />

        <button className="bg-red-600 text-white px-4 py-2 m-4 rounded-lg font-semibold hover:bg-red-700 cursor-pointer col-span-3">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
