import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Upload, Brain, Shield, Zap, Users, Star, ChevronRight, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload até 5GB",
      description: "Sistema cloud-based com upload otimizado e streaming global",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Integrada",
      description: "Sugestões automáticas de preços, feedback de portfólio e análise de perfil",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Transparente",
      description: "Sem taxas ocultas, sem mentiras. Pagamentos diretos e seguros",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra Rápido",
      description: "Interface otimizada com pré-carregamento inteligente",
      color: "from-yellow-500 to-orange-400"
    }
  ];

  const stats = [
    { number: 50000, suffix: "+", label: "Editores Ativos" },
    { number: 1000000, suffix: "+", label: "Projetos Concluídos" },
    { number: 99, suffix: "%", label: "Satisfação" },
    { number: 5, suffix: "GB", label: "Upload Máximo" }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Editor Premium",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "EditMatch+ revolucionou minha carreira. Consegui triplicar minha renda em 6 meses!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Criadora de Conteúdo",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "Encontrei os melhores editores aqui. A qualidade é incomparável!",
      rating: 5
    },
    {
      name: "Pedro Costa",
      role: "Agência Digital",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "Plataforma perfeita para nossa agência. Processos transparentes e resultados incríveis.",
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                🚀 A Revolução Freelancer Chegou
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight">
              <TypewriterEffect
                text="A Revolução"
                className="block"
                delay={0.5}
              />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                <TypewriterEffect
                  text="Freelancer"
                  delay={1.5}
                />
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Conecte editores de vídeo a criadores e marcas sem os vícios dos sites tradicionais. 
              Transparente, moderno e poderoso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
                >
                  Começar Agora
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="group flex items-center justify-center border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demonstração
                </button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Por que <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">EditMatch+</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                As funcionalidades que realmente importam para o seu sucesso
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 text-black`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                O que dizem nossos <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">usuários</span>
              </h2>
              <p className="text-xl text-gray-300">Histórias reais de sucesso</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para a <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Revolução</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Junte-se a milhares de editores e criadores que já descobriram uma nova forma de trabalhar
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
                  >
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/como-funciona"
                    className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                  >
                    Saber Mais
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
};

export default Home;