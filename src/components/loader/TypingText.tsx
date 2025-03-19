import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  delay?: number;
  typingSpeed?: number;
}

export default function TypingText({ text, delay = 0, typingSpeed = 50 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed, startTyping]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-emerald-500 mb-2 font-mono"
    >
      <span className="text-gray-500 mr-2">$</span>
      {displayedText}
      {displayedText.length < text.length && (
        <span className="animate-pulse">▊</span>
      )}
    </motion.div>
  );
}