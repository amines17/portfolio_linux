import { motion } from 'framer-motion';
import TerminalWindow from '../common/TerminalWindow';
import CommandLine from '../common/CommandLine';
import SkillCard from './SkillCard';
import { Skill } from './types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

export default function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  // Add empty slots to match the maximum number of skills (4)
  const maxSkills = 4;
  const paddedSkills = [...skills];
  while (paddedSkills.length < maxSkills) {
    paddedSkills.push(null);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-full"
    >
      <TerminalWindow title={`~/skills/${title.toLowerCase()}`}>
        <CommandLine command={`ls ${title.toLowerCase()}`} />
        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-bold text-emerald-400 mb-4">{title}</h3>
          <div className="grid gap-4">
            {paddedSkills.map((skill, skillIndex) => (
              <div key={skillIndex} className="h-24"> {/* Fixed height container */}
                {skill && (
                  <SkillCard
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </TerminalWindow>
    </motion.div>
  );
}