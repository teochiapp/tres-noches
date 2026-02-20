import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Header from './components/common/header';
import Footer from './components/common/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

