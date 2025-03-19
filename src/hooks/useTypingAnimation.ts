import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  text: string;
  delay?: number;
  typingSpeed?: number;
}

export function useTypingAnimation({ 
  text, 
  delay = 0, 
  typingSpeed = 100 // Slower typing speed
}: UseTypingAnimationProps) {
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

  return {
    displayedText,
    isTyping: displayedText.length < text.length
  };
}