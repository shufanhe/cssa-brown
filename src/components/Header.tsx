import { motion } from "framer-motion";
import React from "react";

const navItems: string[] = ["Events", "Info", "Contact", "Partners"];

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="container mx-auto px-8 h-24 flex items-center justify-between"
      >
        {/* logo */}
        <div className="flex items-center space-x-2">
          <a href="#/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={import.meta.env.BASE_URL + "uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
              alt="CSSA Logo"
              className="h-20 w-auto ml-1"
            />
          </a>
        </div>

        {/* Nav items + home icon */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item: string, index: number) => (
            <motion.a
              key={item}
              href={
                item === "Info" ? "#/information-hub" 
                : item === "Events" ? "#/events" 
                
                : `#/${item.toLowerCase()}`
              }
              className="nav-link text-[#a0202b] text-xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}

          <a href="#/">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={import.meta.env.BASE_URL + "uploads/home.png"}
              alt="Home"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
