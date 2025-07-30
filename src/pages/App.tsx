import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';
import NotFound from './NotFound';
import TestPage from './TestPage'; // TODO: Remove before production build
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const FutureFlags = { v7_startTransition: true, v7_relativeSplatPath: true };

function App() {
  return (
    <Router future={FutureFlags}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestPage />} /> {/* TODO: Remove before production build */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
