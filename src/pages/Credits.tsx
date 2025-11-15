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

      <div className="flex-1 container mx-auto px-2 pt-40 pb-16">
        {/* Main text section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-4xl font-bold text-[#a0202b] mb-4 text-left">
            WEB DEVELOPMENT TEAM
          </h1>
          <h1 className="text-4xl md:text-2xl font-bold text-[#a0202b] mb-6 text-left">
            网页制作团队
          </h1>

        {/*  7-card grid, 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Flynn.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Flynn Mi</p>
            <p className="text-gray-600">Project Lead</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Melody.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Melody Chen</p>
            <p className="text-gray-600">Deputy Project Lead</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/placeholder.svg"}
            className="h-56 w-44 rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Shufan He</p>
            <p className="text-gray-600">Technical Lead</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Caleb.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Caleb Wu</p>
            <p className="text-gray-600">Design Lead</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Lena.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Lena Wu</p>
            <p className="text-gray-600">Support Member</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Jesse.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Jesse Qin</p>
            <p className="text-gray-600">Support Member</p>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src={import.meta.env.BASE_URL + "uploads/Grace.png"}
            className="h-56 w-auto rounded-lg mb-4"
            />
            <p className="font-semibold text-lg">Grace Zhang</p>
            <p className="text-gray-600">Support Member</p>
        </div>

        <div className="invisible"></div>
        </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Credits;
