import React, { useState } from "react";
import { motion } from 'framer-motion';
import RibbonTrail from '../components/RibbonTrail';

const years = [
  "2025-2026", "2024-2025", "2023-2024", "2022-2023", "2021-2022",
  "2020-2021", "2019-2020", "2018-2019", "2017-2018", "2016-2017",
  "2015-2016", "1998-1999",
];

type Person = {
  name: string;
  title: string;
};

const SampleBoxContent = ({ people }: { people: Person[] }) => (
  <div className="w-full flex flex-col gap-8">
    {/* Top image and text block */}
    <div className="flex gap-6">
      <img
        src="https://via.placeholder.com/549x300"
        alt="placeholder"
        className="w-[549px] h-[300px] object-cover rounded-lg shadow"
      />
      <div className="flex-1 text-black text-2xl leading-normal">
        Welcome message or description for the year.
      </div>
    </div>

    {/* People grid */}
    <div className="grid grid-cols-2 gap-10">
      {people.map((person, i) => (
        <div key={i} className="flex gap-4 items-start">
          <img
            src="https://via.placeholder.com/196"
            alt="placeholder"
            className="w-[196px] h-[196px] object-cover rounded-lg shadow"
          />
          <div>
            <p className="text-black text-[24px] leading-[32px] font-bold">{person.name}</p>
            <p className="text-[18px] text-gray-600">{person.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const contentByYear: Record<string, JSX.Element> = {
  "2025-2026": (
    <SampleBoxContent
      people={[
        { name: "吴林溪 Lena", title: "President" },
        { name: "周泽晖 Zehui", title: "Executive of Activities" },
        { name: "秦沛彦 Jesse", title: "Executive of Outreach" },
        { name: "朱钰泽 Michael", title: "Executive of Marketing" },
      ]}
    />
  ),
  "2024-2025": (
    <SampleBoxContent
      people={[
        { name: "吴林溪 Lena", title: "President" },
        { name: "周泽晖 Zehui", title: "Executive of Activities" },
        { name: "秦沛彦 Jesse", title: "Executive of Outreach" },
        { name: "朱钰泽 Michael", title: "Executive of Marketing" },
      ]}
    />
  ),
};

const Box = (): JSX.Element => {
  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];
  const [hoveredYear, setHoveredYear] = useState<string>("2025-2026");

  return (
    <>
      <RibbonTrail />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="container mx-auto px-8 h-24 flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <a href="#/">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={import.meta.env.BASE_URL + "/uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
                alt="CSSA Logo"
                className="h-20 w-auto ml-1"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={
                  item === "Home" ? "#/" 
                  : item === "Info" ? "#/information-hub" 
                  : item === "Events" ? "#/events" 
                  : `#/${item.toLowerCase()}`
                }
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

      {/* Page content */}
      <div className="relative w-full flex px-12 box-border pt-32 pb-16">
        {/* Left hover-expand year column */}
        <div className="relative">
          <div className="sticky top-32 left-0 h-fit bg-white shadow-lg z-40 w-48">
            <div className="p-3">
              {years.map((year) => (
                <div
                  key={year}
                  onMouseEnter={() => setHoveredYear(year)}
                  className={`transition-transform duration-300 cursor-pointer text-lg leading-[40px] whitespace-nowrap ${
                    hoveredYear === year ? "scale-105 font-semibold text-[#a0202b]" : ""
                  }`}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Right content area */}
        <div className="flex-1 ml-4 md:ml-16">
          <div className="bg-[#f3f3f3] p-8 rounded-xl min-h-[600px]">
            {contentByYear[hoveredYear] || <div>Select a year</div>}
          </div>
        </div>
      </div>

      <footer className="bg-white text-[#a0202b] mt-0 py-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm">

          <div className="flex items-center space-x-2">
            <img 
              src={ import.meta.env.BASE_URL + "/uploads/e297e980-9b24-4317-9a39-edb5c28f857f.png" }
              alt="Brown Logo" 
              className="h-20 w-auto"
            />
            <img 
              src={ import.meta.env.BASE_URL + "/uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png" }
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
                <a href="mailto:brown_cssa@hotmail.com" className="underline hover:text-[#7a1822]">
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
    </>
  );
};

export default Box;
