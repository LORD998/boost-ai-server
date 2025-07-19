import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag, TrendingUp, Eye } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', count: 47 },
    { id: 'tutorials', name: 'Tutoriais', count: 18 },
    { id: 'industry', name: 'Indústria', count: 12 },
    { id: 'tips', name: 'Dicas', count: 15 },
    { id: 'news', name: 'Notícias', count: 8 }
  ];

  const featuredPost = {
    id: 1,
    title: "O Futuro da Edição de Vídeo: Como a IA está Revolucionando a Indústria",
    excerpt: "Descubra como a inteligência artificial está transformando a forma como editamos vídeos e o que isso significa para profissionais da área.",
    author: "EditMatch+ Team",
    date: "15 Jan 2024",
    readTime: "8 min",
    category: "industry",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 2847,
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "10 Técnicas Avançadas de Color Grading para Vídeos Cinematográficos",
      excerpt: "Aprenda técnicas profissionais de correção de cor que vão elevar a qualidade dos seus projetos.",
      author: "Maria Santos",
      date: "12 Jan 2024",
      readTime: "6 min",
      category: "tutorials",
      image: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 1923
    },
    {
      id: 3,
      title: "Como Precificar Seus Serviços de Edição: Guia Completo 2024",
      excerpt: "Estratégias comprovadas para definir preços justos e competitivos no mercado freelancer.",
      author: "João Silva",
      date: "10 Jan 2024",
      readTime: "5 min",
      category: "tips",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 3156
    },
    {
      id: 4,
      title: "Tendências de Motion Graphics para 2024",
      excerpt: "Descubra as principais tendências visuais que dominarão o mercado este ano.",
      author: "Pedro Costa",
      date: "8 Jan 2024",
      readTime: "4 min",
      category: "industry",
      image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 1654
    },
    {
      id: 5,
      title: "Workflow Otimizado: Organizando Projetos no Premiere Pro",
      excerpt: "Dicas práticas para organizar seus projetos e aumentar sua produtividade.",
      author: "Ana Rodrigues",
      date: "5 Jan 2024",
      readTime: "7 min",
      category: "tutorials",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 2341
    },
    {
      id: 6,
      title: "Mercado Freelancer: Estatísticas e Oportunidades em 2024",
      excerpt: "Análise completa do mercado freelancer de edição de vídeo e suas perspectivas.",
      author: "Carlos Mendes",
      date: "3 Jan 2024",
      readTime: "6 min",
      category: "news",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 1876
    },
    {
      id: 7,
      title: "Sound Design: A Arte do Áudio em Vídeos",
      excerpt: "Como criar paisagens sonoras envolventes que complementam perfeitamente suas imagens.",
      author: "Sofia Almeida",
      date: "1 Jan 2024",
      readTime: "5 min",
      category: "tutorials",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: 1432
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      tutorials: 'from-blue-500 to-cyan-400',
      industry: 'from-purple-500 to-pink-400',
      tips: 'from-green-500 to-emerald-400',
      news: 'from-yellow-500 to-orange-400'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-400';
  };

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
                📝 Conhecimento e Inspiração
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blog <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">EditMatch+</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tutoriais, dicas, tendências e insights para elevar sua carreira na edição de vídeo
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-900/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
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

      {/* Featured Post */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-400 text-white text-sm font-medium rounded-full">
                        Destaque
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-black text-sm font-medium rounded-full`}>
                        {categories.find(c => c.id === featuredPost.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">{featuredPost.author}</span>
                        <span className="text-gray-500">•</span>
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{featuredPost.date}</span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
                      >
                        Ler Artigo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-black text-sm font-medium rounded-full`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
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
                Carregar Mais Artigos
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;