"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const colors = ['#FF9000', '#FFB347', '#FFCB8E', '#FFE4C4', '#FFFFFF'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      //  create bubbles occasionally
      if (Math.random() > 0.85) {
        createBubble(e.clientX, e.clientY);
      }
    };

    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (headerElement) {
        headerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const createBubble = (x, y) => {
    const size = Math.random() * 20 + 5; // Random size between 5 and 25
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const newBubble = {
      id: Date.now(),
      x,
      y,
      size,
      color,
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    // Remove bubble after animation completes
    setTimeout(() => {
      setBubbles((prevBubbles) => 
        prevBubbles.filter((bubble) => bubble.id !== newBubble.id)
      );
    }, 2000);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          initial={{ 
            x: bubble.x, 
            y: bubble.y, 
            opacity: 0.8,
            scale: 0 
          }}
          animate={{ 
            x: bubble.x + (Math.random() * 100 - 50), 
            y: bubble.y - 100 - Math.random() * 50,
            opacity: 0,
            scale: 1
          }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          style={{
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            boxShadow: `0 0 10px ${bubble.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleEffect;