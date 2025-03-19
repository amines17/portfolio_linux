import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../locales/translations';
import ProjectSlider from './ProjectSlider';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 code-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
        >
          {t.title}
        </motion.h2>
        
        <ProjectSlider
          projects={t.list}
          viewCode={t.viewCode}
          viewDemo={t.viewDemo}
        />
      </div>
    </section>
  );
}