import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home.jsx";
import Menu from "./PAGES/Menu.jsx";
import Navbar from "./COMPONENTS/Navbar.jsx";
import About from "./PAGES/About.jsx";
import Contact from "./PAGES/Contact.jsx";
import Reservation from "./PAGES/Reservation.jsx";


function App() {
  return (
    <>
    <Router> 
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
    
    
    
    </>
  );
}

export default App;
