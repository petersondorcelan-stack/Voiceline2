import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="main-nav">
        <div className="logo">Voice Line Services</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="#opi">OPI</a></li>
          <li><a href="#vri">VRI</a></li>
          <li><a href="#inperson">In Person</a></li>
          <li><a className="book-btn" href="https://forms.gle/your-google-form" target="_blank" rel="noopener noreferrer">Book Your Session</a></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
