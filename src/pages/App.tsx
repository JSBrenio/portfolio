import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';
import Navbar from '../components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
