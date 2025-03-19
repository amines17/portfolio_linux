import { ExternalLink, Github, Code2 } from 'lucide-react';
import TerminalWindow from '../common/TerminalWindow';
import CommandLine from '../common/CommandLine';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
  };
  viewCode: string;
  viewDemo: string;
}

export default function ProjectCard({ project, viewCode, viewDemo }: ProjectCardProps) {
  return (
    <div className="w-full px-4">
      <TerminalWindow title={`~/projects/${project.title.toLowerCase().replace(' ', '-')}`}>
        <CommandLine command="cat README.md" />
        <div className="bg-gray-800/50 rounded-lg overflow-hidden mt-2">
          <div className="relative h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
          </div>
          
          <div className="p-4">
            <div className="flex items-center mb-2">
              <Code2 className="text-emerald-500 mr-2" size={20} />
              <h3 className="text-xl font-bold text-emerald-400">{project.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-800/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Github size={20} className="mr-2" />
                {viewCode}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={20} className="mr-2" />
                {viewDemo}
              </a>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}