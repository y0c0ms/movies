import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} favoritePage={true} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h3>You don't have any favorites yet!</h3>
      <p>Go back and add some movies to your favorites!</p>
    </div>
  );
}

export default Favorites;