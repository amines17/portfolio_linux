import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import TerminalWindow from './common/TerminalWindow';
import CommandLine from './common/CommandLine';
import { skills } from './Skills/skillsData';

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-12 sm:py-20 code-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-8 sm:mb-12 text-center"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TerminalWindow title={`~/skills/${category.toLowerCase()}`}>
                <CommandLine command={`ls ${category.toLowerCase()}`} />
                <div className="space-y-4 mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-4">{t.categories[category]}</h3>
                  <div className="grid gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="text-emerald-400 mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6">
                              {skill.icon}
                            </div>
                            <span className="text-gray-200 text-sm sm:text-base">{skill.name}</span>
                          </div>
                          <span className="text-emerald-400 text-sm sm:text-base">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}