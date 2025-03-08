import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {isFavourite, addToFavourite, removeFromFavourite} = useMovieContext()

  const favourite = isFavourite(movie.id)
  function onFavouriteClick(e) {
    e.preventDefault()
    if(favourite){
      removeFromFavourite(movie.id)
    }else{
      addToFavourite(movie)
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favourite ? "active" : ""}` } onClick={onFavouriteClick}>
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
