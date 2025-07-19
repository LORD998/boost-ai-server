import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'Portfólios', path: '/portfolios' },
    { name: 'Boost IA', path: '/boost-ia' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre', path: '/sobre' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-black font-bold text-xl">E+</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              EditMatch+
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Dashboard</span>
              </motion.button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Entrar
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                  >
                    Começar Agora
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <Link
                to="/login"
                className="block text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="block bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-lg font-semibold mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;