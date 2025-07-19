import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp, Star, MessageSquare, BarChart3, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BoostIA: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Análise de Perfil",
      description: "IA analisa seu perfil e sugere melhorias para aumentar suas chances de sucesso",
      color: "from-blue-500 to-cyan-400",
      details: [
        "Análise completa do portfólio",
        "Sugestões de otimização",
        "Score de qualidade em tempo real",
        "Comparação com top performers"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sugestão de Preços",
      description: "Algoritmos inteligentes sugerem preços ideais baseados no mercado",
      color: "from-green-500 to-emerald-400",
      details: [
        "Análise de mercado em tempo real",
        "Preços competitivos personalizados",
        "Histórico de projetos similares",
        "Otimização de margem de lucro"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Criação de Propostas",
      description: "IA gera propostas personalizadas e persuasivas automaticamente",
      color: "from-purple-500 to-pink-400",
      details: [
        "Templates inteligentes",
        "Personalização automática",
        "Análise de tom e linguagem",
        "Taxa de conversão otimizada"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Insights de Performance",
      description: "Relatórios detalhados sobre seu desempenho e oportunidades",
      color: "from-yellow-500 to-orange-400",
      details: [
        "Métricas de performance",
        "Tendências do mercado",
        "Oportunidades de crescimento",
        "Benchmarking competitivo"
      ]
    }
  ];

  const aiTools = [
    {
      name: "Portfolio Optimizer",
      description: "Otimiza automaticamente seu portfólio para máximo impacto",
      usage: "1,247 editores usando",
      improvement: "+45% mais visualizações"
    },
    {
      name: "Price Intelligence",
      description: "Sugere preços ideais baseados em dados de mercado",
      usage: "892 editores usando",
      improvement: "+32% aumento na renda"
    },
    {
      name: "Proposal Generator",
      description: "Cria propostas personalizadas em segundos",
      usage: "2,156 editores usando",
      improvement: "+67% taxa de aceitação"
    },
    {
      name: "Trend Analyzer",
      description: "Identifica tendências emergentes no mercado",
      usage: "756 editores usando",
      improvement: "+28% projetos premium"
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Motion Designer",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "O Boost IA triplicou minha taxa de conversão. As propostas geradas são incríveis!",
      improvement: "+180% conversão"
    },
    {
      name: "Maria Santos",
      role: "Video Editor",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "A análise de preços me ajudou a aumentar minha renda em 40% sem perder clientes.",
      improvement: "+40% renda"
    },
    {
      name: "Pedro Costa",
      role: "Color Grading",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100",
      content: "O otimizador de portfólio identificou pontos que eu nunca havia considerado.",
      improvement: "+65% visualizações"
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                🧠 Inteligência Artificial Avançada
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Boost <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">IA</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Inteligência artificial que impulsiona o seu sucesso. Otimize seu perfil, precifique melhor e conquiste mais clientes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Funcionalidades <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Inteligentes</span>
              </h2>
              <p className="text-xl text-gray-300">Tecnologia que trabalha para você 24/7</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Tabs */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30'
                      : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-black`}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Details */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl flex items-center justify-center text-black mb-6`}>
                {features[activeFeature].icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
              <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
              
              <div className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <ScrollReveal>
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Ferramentas <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">IA</span>
              </h2>
              <p className="text-xl text-gray-300">Cada ferramenta projetada para maximizar seus resultados</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                      <p className="text-gray-300 mb-4">{tool.description}</p>
                    </div>
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{tool.usage}</span>
                    <span className="text-green-400 font-medium">{tool.improvement}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Success Stories */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Histórias de <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Sucesso</span>
              </h2>
              <p className="text-xl text-gray-300">Resultados reais de quem usa o Boost IA</p>
            </div>

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
                  
                  <p className="text-gray-300 italic mb-4">"{testimonial.content}"</p>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-400/20 border border-green-500/30 rounded-lg p-3">
                    <span className="text-green-400 font-semibold">{testimonial.improvement}</span>
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">
              Acelere seu <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">sucesso</span> com IA
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram suas carreiras com o poder da inteligência artificial
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
            >
              Ativar Boost IA
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
};

export default BoostIA;