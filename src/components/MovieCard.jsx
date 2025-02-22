import { useState } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import StarRating from "./StarRating"; 

function MovieCard({ movie, favoritePage }) {
  const { isFavorite, addToFavorites, removeFromFavorites, updateFavoriteRating } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const [isHovered, setIsHovered] = useState(false);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
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
      {/* Exibe o componente de avaliação por estrelas apenas na página de favoritos */}
      {favoritePage && isHovered && (
        <div className="rating-field">
          <StarRating
            rating={movie.rating || 0}
            setRating={(val) => updateFavoriteRating(movie.id, val)}
          />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
