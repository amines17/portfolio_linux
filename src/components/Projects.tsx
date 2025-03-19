import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import TerminalWindow from './common/TerminalWindow';
import CommandLine from './common/CommandLine';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col h-full"
            >
              <TerminalWindow title={`~/projects/${project.title.toLowerCase().replace(' ', '-')}`}>
                <CommandLine command="cat README.md" />
                <div className="bg-gray-800/50 rounded-lg overflow-hidden mt-2 flex flex-col h-full">
                  <div className="relative h-48 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center mb-2">
                      <Code2 className="text-emerald-500 mr-2 flex-shrink-0" size={20} />
                      <h3 className="text-xl font-bold text-emerald-400 truncate">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 overflow-hidden line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-800/50 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-700">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        <Github size={20} className="mr-2" />
                        {t.viewCode}
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        {t.viewDemo}
                      </a>
                    </div>
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