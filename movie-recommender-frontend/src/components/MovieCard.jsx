const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2 text-white">{movie.title}</h2>
      <p className="text-sm text-gray-300 mb-1">
        Genres: {movie.genres?.split('|').join(', ') || 'N/A'}
      </p>
      <p className="text-sm text-yellow-400">
        Rating: {typeof movie['Weighted rating'] === 'number' ? movie['Weighted rating'].toFixed(2) : 'N/A'}
      </p>
    </div>
  );
};

export default MovieCard;
