import React from 'react';
import './StyleBlogs.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Blogs = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='BodyBlog'>
      <h1>Página Conteúdo</h1>
      <p>Este é um exemplo de um conteúdo.</p>
      <div className='ClickButton'>
        <button className='btnC' onClick={() => setCount(count + 1)}>Clique em Mim!</button>
        <motion.div
      animate={{ y: [-10, 8, -10] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
       <p>Você clicou {count} vezes!</p>
    </motion.div>
      </div>
    </div>
  );
};

export default Blogs;