import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import TerminalWindow from './common/TerminalWindow';
import CommandLine from './common/CommandLine';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-12 sm:py-20 code-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-8 sm:mb-12 text-center"
        >
          {t.title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWindow title="~/contact/info">
              <CommandLine command="cat contact-info.txt" />
              <div className="space-y-6 mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 sm:mb-6">{t.subtitle}</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">{t.description}</p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-gray-300 bg-gray-800/50 p-3 rounded-lg text-sm sm:text-base">
                    <Mail className="text-emerald-500 mr-3 sm:mr-4 flex-shrink-0" size={20} />
                    <span>contact@amine.dev</span>
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-800/50 p-3 rounded-lg text-sm sm:text-base">
                    <Phone className="text-emerald-500 mr-3 sm:mr-4 flex-shrink-0" size={20} />
                    <span>+33 6 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center text-gray-300 bg-gray-800/50 p-3 rounded-lg text-sm sm:text-base">
                    <MapPin className="text-emerald-500 mr-3 sm:mr-4 flex-shrink-0" size={20} />
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWindow title="~/contact/form">
              <CommandLine command="./send-message.sh" />
              <form className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-emerald-400 mb-2 text-sm sm:text-base">
                    <Terminal size={16} className="inline mr-2" />
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-emerald-400 mb-2 text-sm sm:text-base">
                    <Terminal size={16} className="inline mr-2" />
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-emerald-500 transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-emerald-400 mb-2 text-sm sm:text-base">
                    <Terminal size={16} className="inline mr-2" />
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 border border-gray-700 focus:outline-none focus:border-emerald-500 transition-colors text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <Send size={18} className="mr-2" />
                  {t.form.send}
                </motion.button>
              </form>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}