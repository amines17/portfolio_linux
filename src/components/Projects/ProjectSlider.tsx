import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface ProjectSliderProps {
  projects: Project[];
  viewCode: string;
  viewDemo: string;
}

export default function ProjectSlider({ projects, viewCode, viewDemo }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= projects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      return nextIndex;
    });
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden" style={{ height: '500px' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <ProjectCard
              project={projects[currentIndex]}
              viewCode={viewCode}
              viewDemo={viewDemo}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/80 text-white p-2 rounded-full transition-colors z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900/80 text-white p-2 rounded-full transition-colors z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-emerald-400' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}