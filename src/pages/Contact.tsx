
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import RibbonTrail from '../components/RibbonTrail';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen font-['Georgia'] relative bg-white">
      <RibbonTrail />
       <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#a0202b] mb-8 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 text-center mb-6">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-[#a0202b] font-semibold text-center mb-12"
          >
            Interested in sponsoring our events or programs? We welcome partnership opportunities! Please reach out to discuss collaboration possibilities.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <MapPin className="w-6 h-6 text-[#a0202b]" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">Providence, RI 02912, USA</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start space-x-4"
              >
                <Mail className="w-6 h-6 text-[#a0202b]" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:brown_cssa@hotmail.com" className="text-gray-600 hover:text-[#a0202b] transition-colors">brown_cssa@hotmail.com</a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start space-x-4"
              >
                <Linkedin className="w-6 h-6 text-[#a0202b]" />
                <div>
                  <h3 className="font-semibold text-lg">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/company/brown-chinese-students-and-scholars-association/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-[#a0202b] transition-colors"
                  >
                    Brown CSSA
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#a0202b] hover:bg-[#8a1b24] text-white"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Donation Bar - Added from Index.tsx */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-16 bg-[#f8f8f8] border-t border-gray-200"
      >
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 bg-[#a0202b] md:w-48 flex items-center justify-center p-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="64" 
                  height="64" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center text-center">
                  {/* Fake QR Code */}
                  <div className="bg-white p-2 rounded-lg shadow-md mb-2">
                    <svg 
                      viewBox="0 0 100 100" 
                      width="120" 
                      height="120" 
                      style={{ background: 'white' }}
                    >
                      {/* This is a simplified representation of a QR code */}
                      <rect x="10" y="10" width="80" height="80" fill="white" stroke="black" strokeWidth="1" />
                      {/* Top-left position detection pattern */}
                      <rect x="20" y="20" width="20" height="20" fill="black" />
                      <rect x="25" y="25" width="10" height="10" fill="white" />
                      {/* Top-right position detection pattern */}
                      <rect x="60" y="20" width="20" height="20" fill="black" />
                      <rect x="65" y="25" width="10" height="10" fill="white" />
                      {/* Bottom-left position detection pattern */}
                      <rect x="20" y="60" width="20" height="20" fill="black" />
                      <rect x="25" y="65" width="10" height="10" fill="white" />
                      {/* Fake data pattern */}
                      <rect x="50" y="50" width="5" height="5" fill="black" />
                      <rect x="55" y="55" width="5" height="5" fill="black" />
                      <rect x="60" y="50" width="5" height="5" fill="black" />
                      <rect x="50" y="60" width="5" height="5" fill="black" />
                      <rect x="40" y="40" width="5" height="5" fill="black" />
                      <rect x="70" y="70" width="5" height="5" fill="black" />
                      <rect x="30" y="50" width="5" height="5" fill="black" />
                      <rect x="50" y="30" width="5" height="5" fill="black" />
                      <rect x="65" y="65" width="5" height="5" fill="black" />
                      <rect x="35" y="65" width="5" height="5" fill="black" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">更多详情请搜索"BrownCSSA"公众号</p>
                </div>
                <div className="flex-1">
                  <div className="uppercase tracking-wide text-sm text-[#a0202b] font-semibold">Support Our Mission</div>
                  <h3 className="mt-1 text-2xl font-medium text-gray-900">Help Us Make a Difference</h3>
                  <p className="mt-2 text-gray-600">Your donation will help us continue to provide cultural events, academic support, and community building for Chinese students at Brown University.</p>
                  <div className="mt-6">
                    <Link to="/">
                      <Button className="bg-[#a0202b] hover:bg-[#8a1b24] text-white px-6">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Contact;
