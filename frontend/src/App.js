import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/common/header';
import Footer from './components/common/footer';
import SingleMovie from './page/SingleMovie';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<SingleMovie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

