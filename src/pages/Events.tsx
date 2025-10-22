import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Events = () => {
  const events = [
    {
      title: "Basketball Game",
      date: "April 5, 2024",
      description: ".",
      imgId: "basketball_group.png",
    },
    {
      title: "Spring Festival",
      date: "May 1, 2024",
      description: "Welcome spring with traditional Chinese music, dance performances, and authentic cuisine.",
      imgId: "cny_group.png",
    },
    {
      title: "好声音",
      date: "September 21, 2024",
      description: "Singing contest",
      imgId: "好声音group.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    const offset = card.offsetLeft - (container.offsetWidth / 2 - card.offsetWidth / 2);
    container.scrollTo({ left: offset, behavior: 'smooth' });
    setActiveIndex(index);
  };
  
  // Optional: update active index on scroll (center card)
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const childEl = child as HTMLElement;
      const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });
    setActiveIndex(closestIndex);
  };

  return (
    <div className="min-h-screen font-['Georgia'] bg-white flex flex-col">
      <Header />

      {/* Events Section */}
      <section id="events" className="relative flex-1 min-h-[calc(100vh-6rem)] bg-white overflow-hidden flex flex-col justify-center pt-52 pb-32">
        <RibbonTrail />

        {/* Background corners */}
        <img src={import.meta.env.BASE_URL + "uploads/bottom-left.png"} alt="Top Left" className="absolute top-28 left-0 w-[24rem] h-auto object-contain opacity-90 z-0" />
        <img src={import.meta.env.BASE_URL + "uploads/bottom-right.png"} alt="Bottom Right" className="absolute bottom-5 right-0 w-[24rem] h-auto object-contain opacity-90 z-0" />

        {/* Carousel */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex items-center overflow-x-auto no-scrollbar gap-8 px-8 z-10 scroll-smooth"
        >
          {events.map((event, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                onClick={() => scrollToIndex(index)}
                animate={{ scale: isActive ? 1.05 : 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex-shrink-0 w-[90%] md:w-[70%] lg:w-[55%] xl:w-[50%] rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-white/90 backdrop-blur-sm"
              >
                <img
                  src={import.meta.env.BASE_URL + "uploads/" + event.imgId}
                  alt={event.title}
                  className="w-full h-[280px] md:h-[320px] lg:h-[400px] object-cover transition duration-500 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white px-8">
                  <div className="flex items-center mb-1 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm max-w-lg">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={() => {
                const nextSection = document.querySelector('#past');
                if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#FF0000]/10 text-[#772222] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#a0202b]/30 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#a0202b"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
      </section>

      {/* Activities Section */}
      <section id="past" className="relative w-full bg-white py-20 px-8">
        {/* Background */}
        <img
          src={import.meta.env.BASE_URL + "uploads/bottom-right.png"}
          alt="Bottom Right"
          className="absolute bottom-10 right-0 w-[24rem] h-auto object-contain opacity-90 z-0"
        />

        {/* Header */}
        <div className="relative z-10 mb-12 ml-10 md:ml-20">
          <h2 className="text-[#AB1F24] font-['ABC Diatype'] text-2xl md:text-3xl leading-snug mt-[16px]">
            2024-2025
          </h2>
          <h3 className="text-[#AB1F24] font-['ABC Diatype'] text-2xl md:text-3xl leading-snug">
            活动
          </h3>
        </div>


        {/* Horizontal images */}
        <div className="relative flex justify-center gap-6 overflow-x-auto z-10 no-scrollbar">
          {[
            "新生见面会.png",
            "valentines.png",
            "newyear.png",
            "好声音.png",
            "basketball.png",
            "非诚勿扰.png",
          ].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] aspect-[2/3] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={import.meta.env.BASE_URL + "uploads/" + img}
                alt={`Activity ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Events;
