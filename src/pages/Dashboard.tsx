import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Settings, 
  Upload, 
  Eye,
  MessageSquare,
  Calendar,
  Star,
  Filter,
  Search
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: "Receita Total",
      value: "R$ 12.450",
      change: "+23%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Projetos Ativos",
      value: "8",
      change: "+2",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Visualizações",
      value: "2.847",
      change: "+15%",
      icon: <Eye className="w-6 h-6" />,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Avaliação",
      value: "4.9",
      change: "+0.2",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-400"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Vídeo Promocional - TechStart",
      client: "João Silva",
      status: "Em Progresso",
      deadline: "2024-01-20",
      value: "R$ 1.200",
      progress: 75
    },
    {
      id: 2,
      title: "Motion Graphics - Brand X",
      client: "Maria Santos",
      status: "Revisão",
      deadline: "2024-01-18",
      value: "R$ 800",
      progress: 90
    },
    {
      id: 3,
      title: "Color Grading - Documentário",
      client: "Pedro Costa",
      status: "Concluído",
      deadline: "2024-01-15",
      value: "R$ 600",
      progress: 100
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "Nova mensagem de João Silva",
      time: "5 min atrás",
      unread: true
    },
    {
      id: 2,
      type: "project",
      title: "Projeto aprovado: Motion Graphics",
      time: "1 hora atrás",
      unread: true
    },
    {
      id: 3,
      type: "payment",
      title: "Pagamento recebido: R$ 1.200",
      time: "2 horas atrás",
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Em Progresso':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Revisão':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Concluído':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-black"
    >
      {/* Header */}
      <section className="py-8 bg-gray-900/50 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-400">Bem-vindo de volta, João Silva!</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Novo Projeto</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <ScrollReveal>
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-black`}>
                      {stat.icon}
                    </div>
                    <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Projects */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Projetos Recentes</h2>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Filter className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {recentProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-700/30 p-4 rounded-xl border border-gray-600/50 hover:border-gray-500 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{project.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                          <span>Cliente: {project.client}</span>
                          <span>Prazo: {project.deadline}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                              />
                            </div>
                            <span className="text-xs text-gray-400 mt-1">{project.progress}% concluído</span>
                          </div>
                          <span className="font-semibold text-green-400">{project.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <ScrollReveal>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                  <h2 className="text-xl font-bold mb-4">Notificações</h2>
                  <div className="space-y-3">
                    {notifications.map((notification, index) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className={`p-3 rounded-lg border transition-colors ${
                          notification.unread 
                            ? 'bg-blue-500/10 border-blue-500/30' 
                            : 'bg-gray-700/30 border-gray-600/50'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.unread ? 'bg-blue-400' : 'bg-gray-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Quick Actions */}
              <ScrollReveal>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                  <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                    >
                      <Upload className="w-5 h-5 text-blue-400" />
                      <span>Upload de Vídeo</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <span>Mensagens</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                    >
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span>Agendar Reunião</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                    >
                      <Settings className="w-5 h-5 text-gray-400" />
                      <span>Configurações</span>
                    </motion.button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dashboard;