import React from 'react';
import { motion } from 'framer-motion';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Georgia'] relative bg-white">
      <RibbonTrail />
      <Header />

      <div className="flex-1 container mx-auto px-8 sm:px-6 pt-40 md:pt-40 pb-16">
        {/* Main text section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#a0202b] mb-3 md:mb-4 text-left">
            OUR PARTNERS
          </h1>
          <h1 className="text-2xl md:text-2xl font-bold text-[#a0202b] mb-4 md:mb-6 text-left">
            合作社团
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-left leading-relaxed">
            布朗大学中国学生学者联合会（Brown CSSA）与罗德岛的众多其他学联、华人社团保持着紧密而友好的合作关系。我们积极携手各类学生组织、团体，共同营造开放、融洽的氛围，持续推动中美文化的交流与融合。 我们努力为在美华人学生学者及本地社区搭建更广阔的交流平台。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Column 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={import.meta.env.BASE_URL + "uploads/bamboorhyme.png"}
                  alt="Partner 1"
                  className="h-24 sm:h-32 w-auto rounded-lg"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="font-semibold text-lg">竹韵琴社</p>
                <p className="text-gray-600 text-sm md:text-base">BAMBOO RHYME</p>
                <div className="flex space-x-2 mt-2">
                  <img src={import.meta.env.BASE_URL + "uploads/Instagram.png"} alt="Instagram" className="h-4 w-4" />
                  <img src={import.meta.env.BASE_URL + "uploads/email.png"} alt="Email" className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
              <div className="flex-shrink-0">
                <img
                  src={import.meta.env.BASE_URL + "uploads/uphill.png"}
                  alt="Partner 2"
                  className="h-24 sm:h-32 w-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="font-semibold text-lg">山上剧社</p>
                <p className="text-gray-600 text-sm md:text-base">UPHILL CHINESE THEATRE</p>
                <div className="flex space-x-2 mt-2">
                  <img src={import.meta.env.BASE_URL + "uploads/WeChat.png"} alt="WeChat" className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
              <div className="flex-shrink-0">
                <img
                  src={import.meta.env.BASE_URL + "uploads/risdcssa.png"}
                  alt="Partner 3"
                  className="h-24 sm:h-32 w-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="font-semibold text-lg">RISD 中国学联</p>
                <p className="text-gray-600 text-sm md:text-base">RISD CSSA</p>
                <div className="flex space-x-2 mt-2">
                  <img src={import.meta.env.BASE_URL + "uploads/Instagram.png"} alt="Instagram" className="h-4 w-4" />
                  <img src={import.meta.env.BASE_URL + "uploads/WeChat.png"} alt="WeChat" className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;