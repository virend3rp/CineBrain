// src/components/SearchForm.jsx
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [type, setType] = useState("title");
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "genres") {
      onSearch({ type, value: [input1, input2] });
    } else {
      onSearch({ type, value: input });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-gray-800 p-2 rounded text-white"
      >
        <option value="title">By Title</option>
        <option value="genres">By Genre Combo</option>
        <option value="cluster">By Similar Movie Cluster</option>
      </select>

      {type === "title" || type === "cluster" ? (
        <input
          type="text"
          placeholder="Enter movie title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-700 p-2 rounded text-white w-full"
        />
      ) : (
        <>
          <input
            type="text"
            placeholder="Genre 1 (e.g. Action)"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="bg-gray-700 p-2 rounded text-white w-full"
          />
          <input
            type="text"
            placeholder="Genre 2 (e.g. Comedy)"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="bg-gray-700 p-2 rounded text-white w-full"
          />
        </>
      )}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white w-full"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchForm;
