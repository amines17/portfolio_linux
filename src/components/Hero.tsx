import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import TypingText from './loader/TypingText';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const baseDelay = 7.5; // Updated to match new timing

  return (
    <div className="relative min-h-screen flex items-center code-bg px-4 sm:px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-emerald-500 font-mono text-xs sm:text-sm whitespace-nowrap" style={{
              transform: `translateY(${i * 30}px)`,
              animation: `scrollText ${Math.random() * 5 + 10}s linear infinite`
            }}>
              {`const developer = { name: 'Amine', skills: ['React', 'Node.js', 'TypeScript'] };`}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto z-10">
        <div className="terminal-window max-w-3xl mx-auto">
          <div className="terminal-header flex items-center">
            <div className="flex">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-400 text-xs sm:text-sm">~/portfolio/amine</div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay, duration: 0.8 }}
            className="p-4 sm:p-6"
          >
            <TypingText text="whoami" delay={baseDelay} typingSpeed={50} />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: baseDelay + 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-4"
            >
              {t.title}
            </motion.h1>
            
            <TypingText text="cat about.txt" delay={baseDelay + 1} typingSpeed={50} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: baseDelay + 1.5 }}
              className="text-gray-300 mb-6 text-sm sm:text-base"
            >
              {t.subtitle}
              <br />
              {t.description}
            </motion.p>

            <TypingText text="ls contact/" delay={baseDelay + 2} typingSpeed={50} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: baseDelay + 2.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
              >
                <Terminal size={18} className="mr-2" />
                {t.contact}
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@amine.dev"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}