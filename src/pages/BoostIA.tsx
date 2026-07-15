import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, MessageSquare, BarChart3, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BoostIA: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [respostaIA, setRespostaIA] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleBoostIA = async () => {
    setCarregando(true);
    setRespostaIA('');

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Analise meu portfólio' }),
      });

      const data = await response.json();
      setRespostaIA(data.response || data.reply || 'Erro na resposta.');
    } catch (error) {
      console.error('Erro ao chamar IA:', error);
      setRespostaIA('Erro ao conectar com a IA.');
    } finally {
      setCarregando(false);
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Análise de Perfil',
      description: 'IA analisa seu perfil e sugere melhorias para aumentar suas chances de sucesso',
      color: 'from-blue-500 to-cyan-400',
      details: [
        'Análise completa do portfólio',
        'Sugestões de otimização',
        'Score de qualidade em tempo real',
        'Comparação com top performers',
      ],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Sugestão de Preços',
      description: 'Algoritmos inteligentes sugerem preços ideais baseados no mercado',
      color: 'from-green-500 to-emerald-400',
      details: [
        'Análise de mercado em tempo real',
        'Preços competitivos personalizados',
        'Histórico de projetos similares',
        'Otimização de margem de lucro',
      ],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Criação de Propostas',
      description: 'IA gera propostas personalizadas e persuasivas automaticamente',
      color: 'from-purple-500 to-pink-400',
      details: [
        'Templates inteligentes',
        'Personalização automática',
        'Análise de tom e linguagem',
        'Taxa de conversão otimizada',
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Insights de Performance',
      description: 'Relatórios detalhados sobre seu desempenho e oportunidades',
      color: 'from-yellow-500 to-orange-400',
      details: [
        'Métricas de performance',
        'Tendências do mercado',
        'Oportunidades de crescimento',
        'Benchmarking competitivo',
      ],
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30'
                    : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-black`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
              {features[activeFeature].details.map((detail, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Acelere seu <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">sucesso</span> com IA
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já transformaram suas carreiras com o poder da inteligência artificial
          </p>

          <motion.button
            onClick={handleBoostIA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
          >
            {carregando ? 'Analisando...' : 'Ativar Boost IA'}
            {!carregando && <ArrowRight className="ml-2 w-5 h-5" />}
          </motion.button>

          {respostaIA && (
            <div className="mt-6 max-w-2xl mx-auto bg-gray-800/60 border border-gray-700 p-6 rounded-xl text-left text-gray-200">
              <h3 className="text-lg font-semibold mb-2">Resultado da IA:</h3>
              <p className="whitespace-pre-line">{respostaIA}</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default BoostIA;