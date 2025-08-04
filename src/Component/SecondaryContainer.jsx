import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../Hooks/usePopularMovies";

const SecondaryContainer = () => {
 
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative z-20 -mt-24 bg-black bg-gradient-to-b from-transparent to-black ">
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies "} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies "} movies={movies.upcomingMovies} />
      
    </div>
  );
};
export default SecondaryContainer;
