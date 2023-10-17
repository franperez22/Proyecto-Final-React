import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import { NavBar } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
