import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const navItems = ["Events", "Info", "Contact", "Partners", "Credits"];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.25 }}
          className="container mx-auto px-8 h-24 flex items-center justify-between"
        >
        {/* Logo */}
        <a href="#/">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={import.meta.env.BASE_URL + "uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
            alt="CSSA Logo"
            className="h-20 w-auto"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={
                item === "Info"
                  ? "#/information-hub"
                  : item === "Events"
                  ? "#/events"
                  : `#/${item.toLowerCase()}`
              }
              className="text-[#a0202b] text-xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
              className="h-8 w-8"
            />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-8 h-1 bg-[#a0202b] rounded"></span>
          <span className="block w-8 h-1 bg-[#a0202b] rounded"></span>
          <span className="block w-8 h-1 bg-[#a0202b] rounded"></span>
        </button>
      </motion.div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="fixed top-20 left-0 bottom-0 w-full bg-white z-45 md:hidden flex flex-col items-center pt-10 space-y-8"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={
                  item === "Info"
                    ? "#/information-hub"
                    : item === "Events"
                    ? "#/events"
                    : `#/${item.toLowerCase()}`
                }
                className="text-[#a0202b] text-3xl font-semibold"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <a href="#/" onClick={() => setOpen(false)}>
              <img
                src={import.meta.env.BASE_URL + "uploads/home.png"}
                alt="Home"
                className="h-10 w-10"
              />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
