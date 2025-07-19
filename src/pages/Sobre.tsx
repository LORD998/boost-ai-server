import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Zap, Shield, TrendingUp } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Sobre: React.FC = () => {
  const timeline = [
    {
      year: "2022",
      title: "Fundação",
      description: "EditMatch+ nasce com a visão de revolucionar o mercado freelancer de edição de vídeo"
    },
    {
      year: "2023",
      title: "Primeiros 1000 Usuários",
      description: "Alcançamos nossa primeira marca importante com editores de todo o Brasil e Portugal"
    },
    {
      year: "2023",
      title: "Integração com IA",
      description: "Lançamento do Boost IA, nossa plataforma de inteligência artificial"
    },
    {
      year: "2024",
      title: "Expansão Global",
      description: "Chegamos a 50.000 usuários ativos e expandimos para toda América Latina"
    }
  ];

  const team = [
    {
      name: "Ricardo Silva",
      role: "CEO & Fundador",
      bio: "Ex-editor com 10+ anos de experiência, visionário por trás da EditMatch+",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "Ana Costa",
      role: "CTO",
      bio: "Especialista em IA e desenvolvimento, lidera nossa inovação tecnológica",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "Pedro Santos",
      role: "Head of Design",
      bio: "Designer premiado, responsável pela experiência visual da plataforma",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    },
    {
      name: "Maria Oliveira",
      role: "Head of Community",
      bio: "Conecta editores e clientes, construindo nossa comunidade global",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparência",
      description: "Sem taxas ocultas, sem mentiras. Tudo claro e direto.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comunidade",
      description: "Construímos uma família de profissionais que se apoiam.",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre na vanguarda da tecnologia para servir melhor.",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crescimento",
      description: "Impulsionamos o sucesso de cada membro da nossa comunidade.",
      color: "from-green-500 to-emerald-400"
    }
  ];

  const stats = [
    { number: "50K+", label: "Usuários Ativos" },
    { number: "1M+", label: "Projetos Concluídos" },
    { number: "25+", label: "Países" },
    { number: "99%", label: "Satisfação" }
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
                🚀 Nossa História
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre a <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">EditMatch+</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nascemos da paixão por conectar talentos e transformar o mercado freelancer de edição de vídeo
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Nossa <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Missão</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolucionar o mercado freelancer de edição de vídeo, criando um ecossistema transparente, 
                  justo e poderoso que conecta editores talentosos a clientes que valorizam qualidade.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Conectar talentos globalmente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-cyan-400" />
                    <span className="text-gray-300">Construir uma comunidade forte</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Elevar padrões de qualidade</span>
                  </div>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-3xl p-8 border border-blue-500/30">
                  <Globe className="w-16 h-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Impacto Global</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Já conectamos milhares de editores a projetos incríveis, 
                    gerando milhões em receita para nossa comunidade.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Números que <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Impressionam</span>
              </h2>
              <p className="text-xl text-gray-300">O crescimento da nossa comunidade</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timeline Section */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nossa <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Jornada</span>
              </h2>
              <p className="text-xl text-gray-300">Marcos importantes da nossa história</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`flex items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nossos <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Valores</span>
              </h2>
              <p className="text-xl text-gray-300">Os princípios que nos guiam</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-black`}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section */}
      <ScrollReveal>
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Nossa <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Equipe</span>
              </h2>
              <p className="text-xl text-gray-300">As pessoas por trás da revolução</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 text-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-600"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
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
              Faça parte da <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">nossa história</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram suas carreiras conosco
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
            >
              Começar Agora
            </motion.button>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
};

export default Sobre;