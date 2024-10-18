import React from 'react';
import { motion } from 'framer-motion';

const NoPage = () => {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Letras em movimento!
    </motion.div>
  );
};

export default NoPage;
