import { motion } from 'framer-motion';

export default function LoaderSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full"
    />
  );
}