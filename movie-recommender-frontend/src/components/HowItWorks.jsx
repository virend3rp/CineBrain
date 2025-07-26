import RecommendationCard from "../components/RecommendationCard";
import { RECOMMENDATION_METHODS } from "../constants/theory";

const HowItWorks = () => {
  return (
    <div className="w-full max-w-6xl px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🧠 How CineBrain Recommends Movies
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECOMMENDATION_METHODS.map((method, index) => (
          <RecommendationCard key={index} method={method} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
