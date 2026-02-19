import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

// Posibles componentes comunes (se pueden expandir luego)
const Header = () => null;
const Footer = () => null;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

