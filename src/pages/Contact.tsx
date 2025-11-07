import React from 'react';
import { motion } from 'framer-motion';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Georgia'] relative bg-white">
      <RibbonTrail />
      <Header />

      <div className="flex-1 container mx-auto px-2 pt-40 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto grid md:grid-cols-[70%_30%] gap-0 items-center"
        >
          {/* Left column: Title, text, icons */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-[#a0202b] mb-4 text-left">
              Our Contact
            </h1>
            <h1 className="text-4xl md:text-2xl font-bold text-[#a0202b] mb-6 text-left">
              联系方式
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-left">
              布朗大学中国学生学者联合会秉持着开放、包容、积极的态度，欢迎全体在校学生学生，校友，社会各界人士为我们的建设和举办的活动提出宝贵的意见；欢迎关注我们的社交媒体账号，获取最新的一手资讯并和我们取得联系。
            </p>

            {/* Icons */}
            <div className="flex space-x-8">
              <motion.a
                href="https://www.instagram.com/brown_cssa/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <img
                  src={import.meta.env.BASE_URL + "uploads/Instagram.png"}
                  alt="Instagram"
                  className="h-6 w-6 hover:opacity-80 transition-opacity"
                />
              </motion.a>

              <motion.a
                href={import.meta.env.BASE_URL + "uploads/WeChatQR.png"} 
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <img
                  src={import.meta.env.BASE_URL + "uploads/WeChat.png"} 
                  alt="WeChat"
                  className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </motion.a>

              <motion.a
                href="mailto:brown_cssa@hotmail.com"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <img
                  src={import.meta.env.BASE_URL + "uploads/email.png"}
                  alt="Email"
                  className="h-6 w-6 hover:opacity-80 transition-opacity"
                />
              </motion.a>
            </div>
          </div>

          {/* Right column: single image */}
          <div className="flex justify-start md:justify-end">
            <img
              src={import.meta.env.BASE_URL + "uploads/logo.png"}
              alt="CSSA Logo"
              className="w-40 md:w-48 h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>


      <Footer />
    </div>
  );
};

export default Contact;
