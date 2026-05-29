import { useState, useEffect } from 'react';
import { Menu, Phone, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/images/tooth_logo.png" alt="Clinic Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
            <span className="text-3xl font-extrabold text-[#213b5c] tracking-tight" style={{ fontFamily: '"Inter", sans-serif' }}>Dr. Abhinandan</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                className="text-[#4a6b8c] hover:text-blue-600 font-medium transition-colors text-[15px]"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-600" size={20} />
              <span className="text-[#1e3a5f] font-semibold">+1 75777 41275</span>
            </div>
            <button className="text-[#1e3a5f] hover:text-blue-600 transition-colors">
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1e3a5f] focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl absolute w-full top-full"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  href={`#${link.toLowerCase()}`}
                  key={link}
                  className="block px-4 py-3 text-base font-medium text-[#4a6b8c] hover:text-[#1e3a5f] hover:bg-blue-50 rounded-lg cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
