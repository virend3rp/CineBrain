import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Results from './pages/Results';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
