import { useState } from "react";

const RecommendationCard = ({ method }) => {
  const [expanded, setExpanded] = useState(false);

  const bgColor = {
    title: "bg-blue-900",
    genre: "bg-green-900",
    cluster: "bg-purple-900"
  }[method.type] || "bg-gray-800";

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow hover:shadow-xl transition duration-300`}>
      <h2 className="text-xl font-bold mb-2">{method.title}</h2>
      <p className="text-sm text-gray-200">{method.summary}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 px-3 py-1 bg-white text-black text-sm rounded hover:bg-gray-200"
      >
        {expanded ? "Hide Details" : "Learn More"}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-y-auto ${
          expanded ? "max-h-48 mt-4" : "max-h-0"
        } text-sm text-gray-100 border-t border-gray-600 pt-3`}
      >
        {expanded && <div className="whitespace-pre-line">{method.description}</div>}
      </div>
    </div>
  );
};

export default RecommendationCard;
