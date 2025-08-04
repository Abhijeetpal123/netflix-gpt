  const Trailer = ({ title, overview }) => {
    return (
      <div
        className=" absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-90"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg text-gray-200 mb-6 line-clamp-3 drop-shadow-md ">
          {overview}
        </p>

        <div className="flex space-x-4">
          <button
            className="flex items-center space-x-2 bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-300 transition"
          >
          ▶️
            Play
          </button>
          <button
            className=" bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-600 transition cursor-pointer"
          >
            More Info
          </button>
        </div>
      </div>
    );
  };
  export default Trailer;
