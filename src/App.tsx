import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';
import Portfolios from './pages/Portfolios';
import BoostIA from './pages/BoostIA';
import Blog from './pages/Blog';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-['Inter'] overflow-x-hidden">
        <Header />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/boost-ia" element={<BoostIA />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;