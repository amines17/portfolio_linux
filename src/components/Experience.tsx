import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import TerminalWindow from './common/TerminalWindow';
import CommandLine from './common/CommandLine';

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-20 code-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
        >
          {t.title}
        </motion.h2>

        <div className="space-y-8">
          {t.positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TerminalWindow title={`~/experience/${position.company.toLowerCase()}`}>
                <CommandLine command={`cat ${position.title.toLowerCase().replace(' ', '-')}.json`} />
                <div className="bg-gray-800/50 p-4 rounded-lg mt-2">
                  <div className="flex items-center mb-4">
                    <Building2 className="text-emerald-500 mr-2" size={24} />
                    <h3 className="text-2xl font-bold text-emerald-400">{position.title}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="mr-2" size={18} />
                    <span>{position.period}</span>
                    <span className="mx-2">•</span>
                    <span>{position.company}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {position.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}