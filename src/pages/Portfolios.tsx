import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Eye, Heart, Filter, Search, MapPin, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Portfolios: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', count: 1247 },
    { id: 'motion', name: 'Motion Graphics', count: 324 },
    { id: 'color', name: 'Color Grading', count: 189 },
    { id: 'editing', name: 'Edição', count: 456 },
    { id: 'vfx', name: 'VFX', count: 278 }
  ];

  const portfolios = [
    {
      id: 1,
      name: "João Silva",
      title: "Motion Graphics Specialist",
      location: "São Paulo, BR",
      rating: 4.9,
      reviews: 127,
      projects: 89,
      hourlyRate: 45,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "motion",
      tags: ["After Effects", "Cinema 4D", "Premiere Pro"],
      verified: true,
      online: true,
      responseTime: "1h"
    },
    {
      id: 2,
      name: "Maria Santos",
      title: "Color Grading Expert",
      location: "Rio de Janeiro, BR",
      rating: 5.0,
      reviews: 89,
      projects: 156,
      hourlyRate: 60,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "color",
      tags: ["DaVinci Resolve", "Color Theory", "HDR"],
      verified: true,
      online: false,
      responseTime: "3h"
    },
    {
      id: 3,
      name: "Pedro Costa",
      title: "Video Editor & VFX Artist",
      location: "Lisboa, PT",
      rating: 4.8,
      reviews: 203,
      projects: 234,
      hourlyRate: 55,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "vfx",
      tags: ["Nuke", "Houdini", "Blender"],
      verified: true,
      online: true,
      responseTime: "30min"
    },
    {
      id: 4,
      name: "Ana Rodrigues",
      title: "Creative Video Editor",
      location: "Porto, PT",
      rating: 4.7,
      reviews: 145,
      projects: 178,
      hourlyRate: 40,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "editing",
      tags: ["Final Cut Pro", "Storytelling", "Social Media"],
      verified: false,
      online: true,
      responseTime: "2h"
    },
    {
      id: 5,
      name: "Carlos Mendes",
      title: "Motion Designer",
      location: "Brasília, BR",
      rating: 4.9,
      reviews: 167,
      projects: 201,
      hourlyRate: 50,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "motion",
      tags: ["After Effects", "Lottie", "UI Animation"],
      verified: true,
      online: false,
      responseTime: "4h"
    },
    {
      id: 6,
      name: "Sofia Almeida",
      title: "Documentary Editor",
      location: "Coimbra, PT",
      rating: 4.8,
      reviews: 98,
      projects: 134,
      hourlyRate: 42,
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      thumbnail: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "editing",
      tags: ["Avid", "Documentary", "Sound Design"],
      verified: true,
      online: true,
      responseTime: "1h"
    }
  ];

  const filteredPortfolios = portfolios.filter(portfolio => {
    const matchesCategory = selectedCategory === 'all' || portfolio.category === selectedCategory;
    const matchesSearch = portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         portfolio.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                🎬 Talentos Incríveis
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Portfólios <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Incríveis</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra o trabalho de editores talentosos e encontre o profissional perfeito para o seu projeto
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar editores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolios Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPortfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={portfolio.thumbnail} 
                    alt={portfolio.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Online Status */}
                  {portfolio.online && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={portfolio.avatar}
                        alt={portfolio.name}
                        className="w-12 h-12 rounded-full border-2 border-gray-600"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{portfolio.name}</h3>
                          {portfolio.verified && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{portfolio.title}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Location & Response Time */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{portfolio.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Responde em {portfolio.responseTime}</span>
                    </div>
                  </div>

                  {/* Rating & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{portfolio.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">({portfolio.reviews} avaliações)</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {portfolio.projects} projetos
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${portfolio.hourlyRate}</span>
                      <span className="text-gray-400 text-sm">/hora</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                    >
                      Ver Perfil
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <ScrollReveal>
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                Carregar Mais Portfólios
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolios;