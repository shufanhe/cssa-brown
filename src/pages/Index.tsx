import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Mail, Instagram, ChevronDown, GraduationCap } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(() => {
    const hasSeen = sessionStorage.getItem("hasSeenNewsletter");
    if (!hasSeen) {
      sessionStorage.setItem("hasSeenNewsletter", "true");
      return true;
    }
    return false;
  });

  const [email, setEmail] = useState("");
  const [showNewStudentTitle, setShowNewStudentTitle] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const backgroundImages = [
    import.meta.env.BASE_URL + "uploads/ed1be671-c838-4655-a5a5-2c2a4e739b16.png"
  ];

  useEffect(() => {
    setIsVisible(true);

    // Set up scroll event listener to track scroll position
    const handleScroll = () => {
      // Show new title after scrolling 200px
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setShowNewStudentTitle(true);
      } else {
        setShowNewStudentTitle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setShowNewsletter(false);
    }
  };

  //const navItems = ["Events", "Info", "Contact", "Credit"];

  return (
    <div className="min-h-screen font-['Georgia'] relative">
      <RibbonTrail />
      {/* Newsletter Dialog */}
      <Dialog open={showNewsletter} onOpenChange={setShowNewsletter}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#a0202b]">
              Stay Connected with Brown CSSA!
            </DialogTitle>
            <DialogDescription className="text-lg">
              Subscribe to our newsletter to stay updated with our latest events and activities.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowNewsletter(false)}
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                className="bg-[#a0202b] hover:bg-[#8a1b24] text-white"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Header />

    
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <img 
                    src={image}
                    alt={`Performance backdrop ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="z-50 left-4" />
            <CarouselNext className="z-50 right-4" />
          </Carousel>
        </div>
        <div className="relative flex flex-col items-center justify-between h-full pt-32 pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl inline-block"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={import.meta.env.BASE_URL + "/uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
                alt="CSSA Logo"
                className="w-[312px] mx-auto"
              />
            </motion.div>
            
            {/* Conditional rendering based on scroll position */}
            {!showNewStudentTitle && (
              <>
                <motion.h1 
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]"
                >
                  Welcome to Brown CSSA
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-lg"
                >
                  Chinese Students and Scholars Association
                </motion.p>
              </>
            ) 
            }
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section id="who-we-are" className="relative min-h-[calc(100vh-6rem)] bg-white overflow-hidden flex flex-col justify-center">        
        {/* Background corners */}
        <img 
          src={import.meta.env.BASE_URL + "uploads/top-left.png"} 
          alt="Top Left"
          className="absolute top-0 left-0 w-96 h-auto object-contain"
        />
        <img 
          src={import.meta.env.BASE_URL + "uploads/top-right.png"} 
          alt="Top Right"
          className="absolute top-0 right-0 w-96 h-auto object-contain"
        />
        <img 
          src={import.meta.env.BASE_URL + "uploads/bottom-left.png"} 
          alt="Bottom Left"
          className="absolute bottom-0 left-0 w-96 h-auto object-contain"
        />
        <img 
          src={import.meta.env.BASE_URL + "uploads/bottom-right.png"} 
          alt="Bottom Right"
          className="absolute bottom-0 right-0 w-96 h-auto object-contain"
        />

        {/* Content */}
        <div className="bg-[#FFC9CA]/20 p-8 rounded-2xl relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left space-y-8 flex-1"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#a0202b]"
            >
              Who We Are
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-chinese"
            >
              布朗大学中国学生学者联合会 (BrownCSSA) 是由布朗大学中国学生、学者于1998年成立的非盈利性组织。
              BrownCSSA旨在为远渡重洋的中国学生、学者提供一个互相交流、互相帮助、增进友谊的平台；
              并在此基础上开展丰富多彩的学术、娱乐、体育和文化类活动，为中国学生、学者提供生活、学业、事业发展上的帮助；
              同时始终肩负着弘扬中华民族文化的使命，致力于提升美国主流社会对中华文化，及华人群体的文化的社会认同感；
              促进中国留学生、学者与美国人以及在美华人的交流。
            </motion.p>

            <a 
              href="#/information-hub" 
              className="inline-flex items-center bg-[#FFE8E8] text-[#AB1F24] font-semibold text-lg px-4 py-2 rounded-2xl hover:bg-[#ffdcdc] transition-colors duration-200"
            >
              RESOURCES FOR NEW STUDENTS
              <img 
                src={import.meta.env.BASE_URL + "uploads/arrow.png"} 
                alt="Arrow pointing top-left"
                className="ml-2 w-6 h-6 object-contain"
              />
            </a>
          </motion.div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <img
              src={import.meta.env.BASE_URL + "uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
              alt="Who We Are illustration"
              className="w-64 md:w-80 h-auto rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Down Arrow Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => {
              const nextSection = document.querySelector('#events');
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

      {/* Upcoming Events Section - Added from Events.tsx */}
      <section id="events" className="bg-white relative min-h-[calc(100vh-6rem)] overflow-hidden flex flex-col justify-center">
       {/* Background corners */}
        <img 
          src={import.meta.env.BASE_URL + "uploads/top-right.png"} 
          alt="Top Right"
          className="absolute top-0 right-0 w-96 h-auto object-contain"
        />
        <img 
          src={import.meta.env.BASE_URL + "uploads/bottom-left.png"} 
          alt="Bottom Left"
          className="absolute bottom-0 left-0 w-96 h-auto object-contain"
        />
        <img 
          src={import.meta.env.BASE_URL + "uploads/bottom-right.png"} 
          alt="Bottom Right"
          className="absolute bottom-0 right-0 w-96 h-auto object-contain"
        />

        <div className="container mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-black mb-8"
          >
            Stay tuned for upcoming events!
          </motion.h2>

          <p className="text-[#a0202b] text-3xl mb-10 font-chinese">
            请关注我们的微信公众号Brown CSSA，加入我们的订阅列表
          </p>

          <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#a0202b]"
            />
            <button className="bg-[#a0202b] text-white px-6 py-2 rounded-lg hover:bg-[#8a1b24]">
              Enter
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Index;
