// src/pages/Results.jsx
import MovieCard from "../components/MovieCard";

const dummyData = [
  {
    title: "The Matrix",
    genres_list: ["Action", "Sci-Fi"],
    "Weighted rating": 8.7,
  },
  {
    title: "Inception",
    genres_list: ["Action", "Adventure", "Sci-Fi"],
    "Weighted rating": 8.8,
  },
  {
    title: "Interstellar",
    genres_list: ["Adventure", "Drama", "Sci-Fi"],
    "Weighted rating": 8.6,
  },
  {
    title: "The Dark Knight",
    genres_list: ["Action", "Crime", "Drama"],
    "Weighted rating": 9.0,
  },
  {
    title: "Fight Club",
    genres_list: ["Drama"],
    "Weighted rating": 8.8,
  },
];

const Results = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4 text-yellow-400">🎯 Top Picks for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyData.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Results;
