import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingText from './TypingText';
import LoaderSpinner from './LoaderSpinner';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showReady, setShowReady] = useState(false);

  useEffect(() => {
    const readyTimer = setTimeout(() => {
      setShowReady(true);
    }, 4500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center"
        >
          <div className="terminal-window max-w-md w-full mx-4">
            <div className="terminal-header flex items-center">
              <div className="flex">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm">~/system/boot</div>
            </div>
            <div className="p-6 font-mono">
              <TypingText text="initializing system..." delay={0} />
              <TypingText text="loading dependencies..." delay={1} />
              <TypingText text="configuring environment..." delay={2} />
              <TypingText text="starting application..." delay={3} />
              <TypingText text="preparing interface..." delay={4} />
              <AnimatePresence>
                {showReady && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center mt-4"
                  >
                    <LoaderSpinner />
                    <span className="ml-3 text-emerald-500">System ready</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}