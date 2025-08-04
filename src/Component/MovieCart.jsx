import { IMG_CDN_URL } from "../Utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="min-w-[120px] md:min-w-[180px] cursor-pointer transition-transform duration-300 hover:scale-110">
      <img
        className="rounded-md md:rounded-lg shadow-md hover:shadow-xl"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCart;
