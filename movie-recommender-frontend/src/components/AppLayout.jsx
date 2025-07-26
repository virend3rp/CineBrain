// src/components/AppLayout.jsx
const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <header className="p-4 text-xl font-bold border-b border-gray-700">
        🎬 Movie Recommender
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="p-4 text-center text-gray-500 border-t border-gray-700">
        ⓒ 2025 Movie Recommender • All rights reserved
      </footer>
    </div>
  );
};

export default AppLayout;
