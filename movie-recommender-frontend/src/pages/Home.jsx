import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white flex flex-col justify-center items-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl font-bold mb-4">🎥 Welcome to CineBrain</h1>
        <p className="text-lg text-gray-300">
          Discover movies tailored to your taste using our hybrid recommendation engine.
        </p>
      </div>

      {/* How It Works (No Scroll) */}
      <HowItWorks />
    </div>
  );
};

export default Home;
