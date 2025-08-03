import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const TrailerBackground = ({ movieId }) => {
  const trailerVideos = useSelector((store) => store?.movies?.trailerVideos);
  useMovieTrailer(movieId);
  return (
    <div className="absolute inset-0 -z-10">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideos?.key}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

    </div>
  );
};

export default TrailerBackground;
