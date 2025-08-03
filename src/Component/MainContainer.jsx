import {  useSelector } from "react-redux";
import Trailer from "./Trailer";

import TrailerBackground from "./TrailerBackground";

const MainContainer = () => {
 
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);// early return 
  if (!movies) return;

  const mainMovie=movies[0]
  // console.log(mainMovie)
const {original_title,overview,id} =mainMovie

  return (
    <div>
    
      <Trailer title={original_title} overview={overview}/>
      <TrailerBackground movieId={id}/>
    </div>
  );
};
export default MainContainer;
