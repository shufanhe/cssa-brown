import React from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';

const Partners = () => {
  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];

  return (
    <div className="min-h-screen font-['Georgia'] relative">
      <RibbonTrail />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="container mx-auto px-8 h-24 flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <a href="/">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/lovable-uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"
                alt="CSSA Logo"
                className="h-20 w-auto ml-1"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" 
                  : item === "Info" ? "/information-hub" 
                  : item === "Events" ? "/events" 
                  : `/${item.toLowerCase()}`}
                className="nav-link text-[#a0202b] text-xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>

      <div className="pt-48 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#a0202b] mb-12 text-center">Student Groups</h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 1" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Group Name</h3>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 2" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Group Name</h3>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 3" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Group Name</h3>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>


      <div className="pt-16 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-[#a0202b] mb-12 text-center">Our Sponsors</h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 1" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Sponsor Name</h3>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 2" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Sponsor Name</h3>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="w-full h-24 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                    <p className="text-center text-gray-600 text-sm px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque erat.</p>
                  </div>
                  <img src="/placeholder.svg" alt="Sponsor 3" className="w-full h-full object-cover rounded-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#a0202b]">Sponsor Name</h3>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto"
              >
                We are grateful to our sponsors for their generous support which enables us to continue serving the Chinese student community at Brown University.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className="bg-white text-[#a0202b] mt-0 py-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm">

        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e297e980-9b24-4317-9a39-edb5c28f857f.png" 
            alt="Brown Logo" 
            className="h-20 w-auto"
          />
          <img 
            src="/lovable-uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png" 
            alt="CSSA Logo" 
            className="h-24 w-auto"
          />
        </div>


          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left justify-center gap-32 md:justify-start">
            
            <div>
              <h4 className="font-bold text-base mb-2">Address</h4>
              <p>Brown University<br />Providence, RI 02912</p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-2">Email</h4>
              <p>
                <a href="brown_cssa@hotmail.com" className="underline hover:text-[#7a1822]">
                brown_cssa@hotmail.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-2">LinkedIn</h4>
              <p>
                <a 
                  href="https://www.linkedin.com/company/brown-chinese-students-and-scholars-association/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-[#7a1822]"
                >
                  linkedin.com/company/<br />brown-chinese-students-and-scholars-association/
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partners;
