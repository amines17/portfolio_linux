import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import TypingCommand from './TypingCommand';

interface TypingSectionProps {
  title: string;
  children: ReactNode;
  index?: number;
}

export default function TypingSection({ title, children, index = 0 }: TypingSectionProps) {
  const baseDelay = 7.5; // Increased from 5.5 to allow more time for the loader
  const sectionDelay = baseDelay + (index * 1.5); // Increased delay between sections

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: sectionDelay + 1, duration: 0.5 }}
      className="py-20 code-bg"
    >
      <div className="container mx-auto px-6">
        <TypingCommand 
          command={`cat ${title.toLowerCase().replace(' ', '-')}.txt`}
          delay={sectionDelay}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: sectionDelay + 1, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}