
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutUs';
import ContactUs from './pages/contactus';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;