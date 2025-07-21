import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    platform: [
      { name: 'Como Funciona', path: '/como-funciona' },
      { name: 'Portfólios', path: '/portfolios' },
      { name: 'Boost IA', path: '/boost-ia' },
      { name: 'Preços', path: '/pricing' }
    ],
    community: [
      { name: 'Blog', path: '/blog' },
      { name: 'Fórum', path: '/forum' },
      { name: 'Eventos', path: '/events' },
      { name: 'Suporte', path: '/support' }
    ],
    company: [
      { name: 'Sobre', path: '/sobre' },
      { name: 'Carreiras', path: '/careers' },
      { name: 'Imprensa', path: '/press' },
      { name: 'Contato', path: '/contact' }
    ],
    legal: [
      { name: 'Privacidade', path: '/privacy' },
      { name: 'Termos', path: '/terms' },
      { name: 'Cookies', path: '/cookies' },
      { name: 'LGPD', path: '/lgpd' }
    ]
  };

  const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=61578674128296', name: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/editMatchh', name: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/editm_atch/', name: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/edit-match-3b1111376/', name: 'LinkedIn' },
  { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@EditMatchh', name: 'YouTube' }
];


  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-xl">E+</span>
                </div>
                <span className="text-2xl font-bold">EditMatch+</span>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                A revolução freelancer que conecta editores de vídeo talentosos a criadores e marcas. 
                Transparente, moderno e poderoso.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>editmatch@outlook.pt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+351 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>Portugal</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {/* Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h4 className="font-semibold mb-4 text-white">Plataforma</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="font-semibold mb-4 text-white">Comunidade</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-400 text-sm"
            >
              &copy; 2024 EditMatch+. Todos os direitos reservados.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;