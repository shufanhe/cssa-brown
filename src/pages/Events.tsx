import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, SendIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import { Button } from "@/components/ui/button";

const Events = () => {
  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];

  const pastEvents = [
    {
      date: "February 15, 2023",
      title: "Lunar New Year Celebration 2023",
      description: "Our biggest celebration of the year brought together over 200 students, faculty, and community members for an evening of traditional performances, including lion dance, musical presentations, and cultural demonstrations. The event featured authentic Chinese cuisine and interactive cultural activities that showcased the rich traditions of Lunar New Year celebrations.",
      image: "/uploads/93fec79f-b702-42af-8871-50e270596a55.png"
    },
    {
      date: "November 10, 2023",
      title: "Mid-Autumn Festival 2023",
      description: "A magical evening under the stars celebrating the Mid-Autumn Festival with mooncakes, lanterns, and traditional storytelling. Students and faculty came together to share cultural traditions and create lasting memories.",
      image: "/uploads/93fec79f-b702-42af-8871-50e270596a55.png"
    },
    {
      date: "October 1, 2023",
      title: "Chinese Cultural Fair 2023",
      description: "An immersive experience featuring traditional Chinese arts, calligraphy workshops, and performances. The event highlighted the diverse cultural heritage of China through interactive exhibitions and demonstrations.",
      image: "/uploads/93fec79f-b702-42af-8871-50e270596a55.png"
    }
  ];

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
                src="/uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"
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

      <div className="container mx-auto pt-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#a0202b] mb-16 text-center"
          >
            Upcoming Events
          </motion.h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4 text-[#a0202b]">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm">March 15, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Lunar New Year Celebration</h3>
                <p className="text-gray-600 mb-4">Join us for our annual Lunar New Year celebration with traditional performances, food, and festivities!</p>
                <button className="text-[#a0202b] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4 text-[#a0202b]">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm">April 5, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Exchange Workshop</h3>
                <p className="text-gray-600 mb-4">A workshop focused on bridging cultural gaps and fostering understanding between different communities.</p>
                <button className="text-[#a0202b] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4 text-[#a0202b]">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-sm">May 1, 2024</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Spring Festival</h3>
                <p className="text-gray-600 mb-4">Welcome spring with traditional Chinese music, dance performances, and authentic cuisine.</p>
                <button className="text-[#a0202b] font-semibold hover:underline">Learn More →</button>
              </div>
            </motion.div>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#a0202b] mb-16 text-center"
          >
            Past Events
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-16 mb-24">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <div className="flex items-center text-white mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/90">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 mb-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-[#a0202b] mb-4">
              Want to propose an event?
            </h3>
            <p className="text-gray-700 mb-6">
              Submit your ideas through our form and help shape our community's future events!
            </p>
            <Button 
              className="bg-[#a0202b] hover:bg-[#8a1b24] text-white font-semibold"
              onClick={() => window.open("#", "_blank")}
            >
              <SendIcon className="w-4 h-4 mr-2" />
              Submit Your Proposal
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <footer className="bg-white text-[#a0202b] mt-0 py-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm">

        <div className="flex items-center space-x-2">
          <img 
            src="/uploads/e297e980-9b24-4317-9a39-edb5c28f857f.png" 
            alt="Brown Logo" 
            className="h-20 w-auto"
          />
          <img 
            src="/uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png" 
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

export default Events;
