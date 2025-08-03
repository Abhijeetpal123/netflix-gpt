const Trailer = ({ title, overview }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold max-w-2xl drop-shadow-lg leading-tight">
        {title}
      </h1>
      <p className="mt-4 md:mt-6 text-base md:text-lg max-w-xl text-gray-200 leading-relaxed line-clamp-3">
        {overview}
      </p>

      <div className="mt-6 flex gap-4">
        <button
          className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
         ▶️
          Play
        </button>
        <button
          className="flex items-center gap-2 bg-gray-600 bg-opacity-70 px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-500 transition cursor-pointer"
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default Trailer;
