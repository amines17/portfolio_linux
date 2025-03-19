import { motion } from 'framer-motion';

interface LoaderTextProps {
  text: string;
  delay?: number;
}

export default function LoaderText({ text, delay = 0 }: LoaderTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="text-emerald-500 mb-2"
    >
      $ {text}
    </motion.div>
  );
}