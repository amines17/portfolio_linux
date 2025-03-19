import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../locales/translations';
import SkillCategory from './SkillCategory';
import { skills } from './skillsData';

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-20 code-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <SkillCategory
              key={category}
              title={t.categories[category]}
              skills={categorySkills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}