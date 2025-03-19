import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, Code2, Cpu, Mail, Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#", icon: <Terminal size={16} />, text: t.home },
    { href: "#experience", icon: <Briefcase size={16} />, text: t.experience },
    { href: "#projects", icon: <Code2 size={16} />, text: t.projects },
    { href: "#skills", icon: <Cpu size={16} />, text: t.skills },
    { href: "#contact", icon: <Mail size={16} />, text: t.contact },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 md:relative fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <a href="#" className="flex items-center text-emerald-400 font-bold">
            <Terminal size={24} className="mr-2" />
            <span className="text-lg">SOUFI Amine</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                {link.icon}
                <span className="ml-2">{link.text}</span>
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors ml-4"
            >
              <Languages size={16} className="mr-2" />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'border-t border-gray-800' : ''}`}
        >
          <div className="py-4 space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-colors rounded-lg"
              >
                {link.icon}
                <span className="ml-2">{link.text}</span>
              </a>
            ))}
            
            <button
              onClick={() => {
                setLanguage(language === 'fr' ? 'en' : 'fr');
                handleLinkClick();
              }}
              className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-colors rounded-lg"
            >
              <Languages size={16} className="mr-2" />
              {language.toUpperCase()}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}