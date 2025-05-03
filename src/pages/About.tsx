
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const People = () => {
  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const navigate = useNavigate();
  
  const years = Array.from({ length: 25 }, (_, i) => 2025 - i);

  const knownHistoricEboards: Partial<Record<number, {
    members: Array<{ name: string; title: string; image: string }>;
    description: string;
  }>> = {
    2025: {
      members: [
        { name: "吴林溪 Lena", title: "President", image: "/placeholder.svg" },
        { name: "周泽晖 Zehui", title: "Executive of Activities", image: "/placeholder.svg" },
        { name: "秦沛彦 Jesse", title: "Executive of Outreach", image: "/placeholder.svg" },
        { name: "朱钰泽 Michael", title: "Executive of Marketing", image: "/placeholder.svg" },
        { name: "余乐湉 Letian", title: "Executive of Grad Student Events", image: "/placeholder.svg" },
      ],
      description: `In 2024–2025, the Brown CSSA E-Board organized a variety of events to engage students, foster community, and celebrate Chinese culture.`,
    },
  
  };
  
  const historicEboardByYear = years.reduce<Record<number, {
    members: Array<{ name: string; title: string; image: string }>;
    description: string;
  }>>((acc, year) => {
    if (knownHistoricEboards[year]) {
      acc[year] = knownHistoricEboards[year]!;
    } else {
      acc[year] = {
        members: [
          { name: `${year} President`, title: "President", image: "/placeholder.svg" },
          { name: `${year} Activities Exec`, title: "Executive of Activities", image: "/placeholder.svg" },
          { name: `${year} Outreach Exec`, title: "Executive of Outreach", image: "/placeholder.svg" },
          { name: `${year} Marketing Exec`, title: "Executive of Marketing", image: "/placeholder.svg" },
          { name: `${year} Grad Events Exec`, title: "Executive of Grad Student Events", image: "/placeholder.svg" },
        ],
        description: `In ${year - 1}–${year}, the Brown CSSA focused on strengthening ties between Chinese students and the broader Brown community. The E-Board organized cultural events, workshops, and social gatherings.`,
      };
    }
    return acc;
  }, {});
  

  const formatAcademicYear = (year: number) => `${year-1}-${year} E-Board`;

  return (
    <div className="min-h-screen font-['Georgia'] relative">
      <div className="relative z-10">
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

        <div className="pt-48 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >

            <div>
              <h3 className="text-3xl font-bold text-[#a0202b] mb-6 text-center">E-board Members</h3>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="max-w-4xl mx-auto">
                  {/* Header with Year Selection Dropdown - Now side by side */}
                  <div className="mb-8 flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-[#a0202b]">
                      {formatAcademicYear(selectedYear)}
                    </h4>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="text-lg font-bold flex items-center gap-2 bg-white border-gray-300 text-[#a0202b] hover:bg-gray-50">
                          Select Year <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 max-h-[60vh] overflow-y-auto bg-white">
                        {years.map((year) => (
                          <DropdownMenuItem 
                            key={year} 
                            className="cursor-pointer font-semibold p-2 hover:bg-gray-100"
                            onClick={() => setSelectedYear(year)}
                          >
                            {formatAcademicYear(year)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  {/* Display Board Members for Selected Year */}
                  <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
                      {historicEboardByYear[selectedYear].members.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center group"
                        >
                          <div className="aspect-square mb-4 relative overflow-hidden rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-bold text-lg text-[#a0202b] group-hover:text-[#8b1a24] transition-colors">{member.name}</h4>
                          <p className="text-gray-600">{member.title}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* E-Board description text - now centered */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md text-center">
                      <motion.p 
                        initial={{ opacity: 0.3 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.8 }}
                        className="text-lg leading-relaxed text-gray-700 mx-auto"
                      >
                        {historicEboardByYear[selectedYear].description}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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

export default People;
