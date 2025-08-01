import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:10000";

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async ({ type, value }) => {
    try {
      let res;

      if (type === "title") {
        res = await axios.get(`${BASE_URL}/recommend/title/${value}`);
      } else if (type === "genres") {
        res = await axios.get(`${BASE_URL}/recommend/genres/${value[0]}/${value[1]}`);
      } else if (type === "cluster") {
        res = await axios.get(`${BASE_URL}/recommend/cluster/${value}`);
      }

      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="p-6 text-white min-h-screen bg-black">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Recommendation Search</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {results.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
