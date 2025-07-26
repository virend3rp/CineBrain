const About = () => {
  return (
    <div className="min-h-screen bg-gray-300 text-white flex flex-col items-center justify-center p-6">
      {/* Profile Image */}
      <img
        src="/virender-looking.png"
        alt="Virender Parasariya"
        className="w-40 h-40 rounded-full hover:scale-110 shadow-lg mb-4"
      />

      {/* Name */}
      <h1 className="text-3xl font-bold mb-2 text-black">👋 Hey, I’m Virender Parasariya</h1>

      {/* Description */}
      <p className="text-center text-black max-w-xl mb-6">
        I'm a software developer passionate about building intelligent systems, clean UIs, and working on real-world applications like CineBrain. This project is powered by hybrid recommendation techniques and built with ❤️ using FastAPI and Vite.
      </p>

      {/* Portfolio Link */}
      <a
        href="https://virender-portfolio.vercel.app/" // <-- Replace with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Visit My Portfolio
      </a>
    </div>
  );
};

export default About;
