import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  console.log(movies);
  return (
    <div className="mb-8">
      <h2 className="text-white text-lg md:text-2xl font-bold mb-3 px-6">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3 px-6 ">
        {movies.map((movie) => (
          <MovieCart key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

//
