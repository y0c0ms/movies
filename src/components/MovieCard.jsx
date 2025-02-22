import { useState } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie, favoritePage }) {
  const { isFavorite, addToFavorites, removeFromFavorites, updateFavoriteRating } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const [isHovered, setIsHovered] = useState(false);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleRatingChange(e) {
    const rating = Number(e.target.value);
    if (rating >= 0 && rating <= 10) {
      updateFavoriteRating(movie.id, rating);
    }
  }

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            💗
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
      {/* Se estivermos na página de favoritos e o mouse estiver sobre o cartão, exibe o campo de nota */}
      {favoritePage && isHovered && (
        <div className="rating-field">
          <input
            type="number"
            min="0"
            max="10"
            value={movie.rating ?? ""}
            onChange={handleRatingChange}
            placeholder="Nota 0-10"
          />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
