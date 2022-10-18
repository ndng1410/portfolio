import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import BackToTopButton from './pages/BackToTopButton';
import Contact from './pages/Contact';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <BackToTopButton />
    </div>
  );
}

export default App;
