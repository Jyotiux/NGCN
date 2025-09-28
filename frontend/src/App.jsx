import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Pages/About/About.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import Home from './Pages/Home/Home.jsx';
import People from './Pages/People/People.jsx';
import Publications from './Pages/Publications/Publications.jsx';
import Research from './Pages/Research/Research.jsx';
import Founder from './Pages/Founder/Founder.jsx';

import './App.css'
import BlogPost from './Pages/Blogs/BlogPost.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/People" element={<People />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/kesdesikan" element={<Founder />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
