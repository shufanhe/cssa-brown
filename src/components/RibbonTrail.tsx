
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ribbon {
  id: number;
  x: number;
  y: number;
}

const RibbonTrail: React.FC = () => {
  const [ribbons, setRibbons] = useState<Ribbon[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (Math.random() > 0.8) { // Changed from 0.5 to 0.8, meaning only 20% chance to create ribbon
        const newRibbon = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        
        setRibbons(prev => [...prev.slice(-15), newRibbon]); // Keep last 15 ribbons
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Clean up old ribbons
  useEffect(() => {
    const cleanup = setInterval(() => {
      setRibbons(prev => prev.filter(ribbon => Date.now() - ribbon.id < 2000));
    }, 2000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ribbons.map(ribbon => (
          <motion.div
            key={ribbon.id}
            initial={{ 
              x: ribbon.x,
              y: ribbon.y,
              opacity: 0.8,
              scale: 1,
              rotate: Math.random() * 360
            }}
            animate={{
              x: ribbon.x + (Math.random() * 100 - 50),
              y: ribbon.y + 100,
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-2 h-6 origin-top"
          >
            <div 
              className="w-full h-full bg-[#a0202b]"
              style={{
                clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)"
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RibbonTrail;
