// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-yellow-400">🎬 RecoFlix</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/search" className="hover:text-yellow-300">Search</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
