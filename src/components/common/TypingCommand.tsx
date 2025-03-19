import { motion } from 'framer-motion';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

interface TypingCommandProps {
  command: string;
  delay?: number;
}

export default function TypingCommand({ command, delay = 0 }: TypingCommandProps) {
  const { displayedText, isTyping } = useTypingAnimation({
    text: command,
    delay,
    typingSpeed: 100
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-emerald-500 mb-4 font-mono"
    >
      <span className="text-gray-500 mr-2">$</span>
      {displayedText}
      {isTyping && (
        <span className="animate-pulse">▊</span>
      )}
    </motion.div>
  );
}