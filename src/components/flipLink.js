'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FlipLinkNav = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: 20 }}
        className='relative block 
          overflow-hidden 
          whitespace-nowrap 
          text-1xl
          font-black uppercase'
      >
        {children}
      </motion.div>
    </Link>
  );
};

const FlipLink = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: 20 }}
        className='relative block 
          overflow-hidden 
          whitespace-nowrap 
          text-1xl
          font-black uppercase
          text-center'
      >
        {children}
      </motion.div>
    </Link>
  );
};

export { FlipLinkNav, FlipLink };
