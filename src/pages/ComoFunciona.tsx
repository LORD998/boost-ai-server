import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Upload, Brain, Handshake, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ComoFunciona: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Criar Conta",
      description: "Registo rápido com Google, Apple ou Email. Verificação em 2 minutos.",
      details: [
        "Autenticação segura com 2FA",
        "Perfil personalizado",
        "Verificação de identidade"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      number: "02",
      icon: <Upload className="w-8 h-8" />,
      title: "Upload de Vídeos",
      description: "Carregue o seu portfólio com suporte até 5GB por arquivo.",
      details: [
        "Suporte MP4, MOV, AVI",
        "Compressão inteligente",
        "Streaming otimizado"
      ],
      color: "from-purple-500 to-pink-400"
    },
    {
      number: "03",
      icon: <Brain className="w-8 h-8" />,
      title: "IA que Ajuda",
      description: "Receba sugestões automáticas para otimizar o seu perfil e preços.",
      details: [
        "Análise de portfólio",
        "Sugestões de preços",
        "Otimização de perfil"
      ],
      color: "from-green-500 to-emerald-400"
    },
    {
      number: "04",
      icon: <Handshake className="w-8 h-8" />,
      title: "Negociação Direta",
      description: "Conecte-se diretamente com clientes sem intermediários.",
      details: [
        "Chat em tempo real",
        "Propostas personalizadas",
        "Contratos seguros"
      ],
      color: "from-yellow-500 to-orange-400"
    },
    {
      number: "05",
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagamentos Fáceis",
      description: "Sistema de pagamentos transparente e seguro.",
      details: [
        "Múltiplas formas de pagamento",
        "Proteção contra fraudes",
        "Transferências rápidas"
      ],
      color: "from-red-500 to-pink-400"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sem Taxas Ocultas",
      description: "Transparência total nos custos"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Suporte 24/7",
      description: "Equipe sempre disponível"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Pagamentos Seguros",
      description: "Proteção total nas transações"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "IA Integrada",
      description: "Tecnologia que impulsiona resultados"
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
                🚀 Processo Simples e Eficaz
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Como <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Funciona</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra como transformar sua paixão por edição de vídeo em uma carreira de sucesso
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col lg:flex-row items-center mb-20 last:mb-0"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative mb-8 lg:mb-0">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-black font-bold text-2xl relative z-10`}
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-black`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:ml-12 text-center lg:text-left flex-1">
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                          className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
                          <p className="text-sm text-gray-300">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full"
                    >
                      <ArrowRight className="w-8 h-8 text-gray-600" />
                    </motion.div>
                  )}
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Por que escolher <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">EditMatch+</span>?
              </h2>
              <p className="text-xl text-gray-300">Vantagens que fazem a diferença</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 text-black"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
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
              Pronto para <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">começar</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já transformaram suas carreiras
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 inline-flex items-center"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </section>
      </ScrollReveal>
    </motion.div>
  );
};

export default ComoFunciona;