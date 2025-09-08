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

  const navItems = ["Home", "People", "Partners", "Contact", "Events", "Info"];

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

      {/* Navigation */}
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
                src={import.meta.env.BASE_URL + "uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
                alt="CSSA Logo"
                className="h-20 w-auto ml-1"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={item === "Home" ? "#/" 
                  : item === "Info" ? "#/information-hub" 
                  : item === "Events" ? "#/events" 
                  : `#/${item.toLowerCase()}`}
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
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
              布朗大学中国学生学者联合会 (BrownCSSA) 是由布朗大学中国学生、学者于1998年成立的非盈利性组织。BrownCSSA旨在为远渡重洋的中国学生、学者提供一个互相交流、互相帮助、增进友谊的平台；并在此基础上开展丰富多彩的学术、娱乐、体育和文化类活动，为中国学生、学者提供生活、学业、事业发展上的帮助；同时始终肩负着弘扬中华民族文化的使命，致力于提升美国主流社会对中华文化，及华人群体的文化的社会认同感；促进中国留学生、学者与美国人以及在美华人的交流。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* New Student Information Banner - modified to only keep the button */}
      <section className="py-16 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-8 flex justify-center"
        >
          <Button 
            className="bg-[#a0202b] hover:bg-[#8a1b24] text-white font-semibold text-lg px-8 py-6 h-auto"
            onClick={() => navigate('/information-hub/new-students')}
          >
            Resources for New Students
          </Button>
        </motion.div>
      </section>

      {/* Upcoming Events Section - Added from Events.tsx */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#a0202b] mb-12 text-center"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <Link to="/events" className="text-[#a0202b] font-semibold hover:underline">Learn More →</Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <Link to="/events" className="text-[#a0202b] font-semibold hover:underline">Learn More →</Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <Link to="/events" className="text-[#a0202b] font-semibold hover:underline">Learn More →</Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button className="bg-[#a0202b] hover:bg-[#8a1b24] text-white font-semibold">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Icons Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full bg-white/90 backdrop-blur-md py-6 shadow-sm"
      >
        <div className="container mx-auto flex justify-center items-center space-x-12">
          <a 
            href="mailto:brown_cssa@hotmail.com" 
            className="text-[#a0202b] hover:text-primary transition-colors group"
          >
            <Mail size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://www.instagram.com/brown_cssa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#a0202b] hover:text-primary transition-colors group"
          >
            <Instagram size={32} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>

      <footer className="bg-white text-[#a0202b] mt-0 py-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-sm">

        <div className="flex items-center space-x-2">
          <img 
            src={import.meta.env.BASE_URL + "/uploads/e297e980-9b24-4317-9a39-edb5c28f857f.png" }
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

export default Index;
