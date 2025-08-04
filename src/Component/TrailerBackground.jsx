import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const TrailerBackground = ({ movieId }) => {
  const trailerVideos = useSelector((store) => store?.movies?.trailerVideos);
  useMovieTrailer(movieId);
  return (
    <div className="relative w-full h-[100vh]">
      <iframe
        className=" absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideos?.key}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
    </div>
  );
};

export default TrailerBackground;
