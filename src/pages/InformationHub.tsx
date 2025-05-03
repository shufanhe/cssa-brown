import React from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import { GraduationCap, Briefcase, Coffee, Users, BookOpen, MoreHorizontal } from 'lucide-react';

const InformationHub = () => {
  const navigate = useNavigate();
  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];

  return (
    <div className="min-h-screen font-['Georgia'] relative bg-white">
      <RibbonTrail />
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

      <div className="container mx-auto pt-32 pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#a0202b] mb-16 text-center">
            Information Hub
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "For New Students",
                icon: <GraduationCap className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Essential resources and guides for newly admitted students",
                onClick: () => navigate('/information-hub/new-students')
              },
              {
                title: "Career",
                icon: <Briefcase className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Job opportunities, internships, and career development resources",
                onClick: () => navigate('/information-hub/career')
              },
              {
                title: "Campus Life",
                icon: <Coffee className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Activities, events, and daily life at Brown University",
                onClick: () => navigate('/information-hub/campus-life')
              },
              {
                title: "Alumni Stories",
                icon: <Users className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Inspiring stories and experiences from our alumni network",
                onClick: () => navigate('/information-hub/alumni')
              },
              {
                title: "Academic",
                icon: <BookOpen className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Study resources, course information, and academic support",
                onClick: () => navigate('/information-hub/academic')
              },
              {
                title: "Others",
                icon: <MoreHorizontal className="w-12 h-12 mb-4" />,
                color: "#FDE1D3",
                description: "Additional resources and helpful information",
                onClick: () => navigate('/information-hub/others')
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={category.onClick}
              >
                <div
                  className="h-64 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: category.color }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-[#4E3629]"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#4E3629] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#4E3629]/80">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
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

export default InformationHub;
