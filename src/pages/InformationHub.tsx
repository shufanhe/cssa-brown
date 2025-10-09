import React from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import { GraduationCap, Briefcase, Coffee, Users, BookOpen, MoreHorizontal } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const InformationHub = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-['Georgia'] relative bg-white">
      <RibbonTrail />
      <Header />

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

      <Footer />
    </div>
  );
};

export default InformationHub;
