import React from 'react';
import { motion } from 'framer-motion';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Credits = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Georgia'] relative bg-white">
      <RibbonTrail />
      <Header />

      <div className="flex-1 container mx-auto px-8 pt-40 pb-16">
        {/* Main text section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#a0202b] mb-3 md:mb-4 text-left">
            WEB DEVELOPMENT TEAM
          </h1>
          <h1 className="text-2xl md:text-2xl font-bold text-[#a0202b] mb-4 md:mb-6 text-left">
            网页制作团队
          </h1>

      {/*  7-card responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {[
          { name: "Flynn Mi", role: "Project Lead", img: "Flynn.png" },
          { name: "Melody Chen", role: "Deputy Project Lead", img: "Melody.png" },
          { name: "Shufan He", role: "Technical Lead", img: "placeholder.svg", w: "w-44" },
          { name: "Caleb Wu", role: "Design Lead", img: "Caleb.png" },
          { name: "Lena Wu", role: "Support Member", img: "Lena.png" },
          { name: "Jesse Qin", role: "Support Member", img: "Jesse.png" },
          { name: "Grace Zhang", role: "Support Member", img: "Grace.png" },
        ].map((person) => (
          <div key={person.name} className="flex flex-col items-center text-center">
            <img
              src={import.meta.env.BASE_URL + "uploads/" + person.img}
              className={`h-56 ${person.w || "w-auto"} rounded-lg mb-4`}
            />
            <p className="font-semibold text-lg">{person.name}</p>
            <p className="text-gray-600">{person.role}</p>
          </div>
        ))}
        {/* Filler to keep grid consistent */}
        <div className="invisible"></div>
      </div>


        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Credits;
