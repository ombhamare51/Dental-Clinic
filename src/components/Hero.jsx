import { motion } from 'framer-motion';
import { Play, Phone, MapPin, Clock, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    /* 1. Hero section: 100vh height + padding-bottom for breathing room */
    <section
      id="home"
      className="relative overflow-hidden bg-[#EBF4FA]"
      style={{ minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] border border-blue-50 rounded-full opacity-50 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-white to-transparent rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full h-full" style={{ zIndex: 5 }}>

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-1/2 relative"
          style={{ zIndex: 5 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-[#1e3a5f] leading-[1.1] mb-6 tracking-tight">
            Your Partner in <br /> Dental Health &{' '}
            <span className="text-[#2E6BBA]">Smiles</span>
          </h1>

          <p className="text-sm lg:text-base text-slate-500 mb-10 leading-relaxed max-w-md">
            We are committed to providing you with the best dental care,
            treatments, and clinical services. We put your smile and oral health first.
          </p>

          <div className="flex items-center gap-3 cursor-pointer group w-fit">
            <div className="w-10 h-10 rounded-full border border-[#2E6BBA] flex items-center justify-center text-[#2E6BBA] group-hover:bg-[#2E6BBA] group-hover:text-white transition-all duration-300">
              <Play size={14} className="ml-0.5" fill="currentColor" />
            </div>
            <span className="text-[#1e3a5f] font-semibold text-sm group-hover:text-[#2E6BBA] transition-colors">
              See how it works
            </span>
          </div>
        </motion.div>
      </div>

      {/* 2. Doctors Image Container — z-index: 1 so it sits BEHIND the white card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: '8%',
          bottom: '80px',
          width: '46%',
          zIndex: 1,          /* LOW z-index — behind the white card */
        }}
      >
        <div className="relative flex items-end justify-center w-full">
          <img
            src="/images/two_doctors_hero.png"
            alt="Doctors"
            className="w-auto max-h-[580px] object-contain object-bottom mix-blend-multiply"
          />

          {/* 3. 10K+ Badge — shifted left so it doesn't crash into doctor's coat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: '-20%',       /* Pushes badge left into the empty gap */
              bottom: '45%',
              zIndex: 11,         /* On top of everything */
            }}
            className="bg-white/90 backdrop-blur-sm border border-white/60 p-3 pr-6 rounded-full shadow-lg flex items-center gap-3 whitespace-nowrap"
          >
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
              <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
              <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1e3a5f] leading-none">10K+</p>
              <p className="text-[10px] text-slate-500">Happy Patients</p>
            </div>
          </motion.div>

          {/* 870+ Reviews Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              position: 'absolute',
              right: '0',
              top: '28%',
              zIndex: 11,
            }}
            className="bg-white/90 backdrop-blur-sm border border-white/60 p-5 rounded-2xl shadow-lg flex flex-col items-center gap-1"
          >
            <div className="flex -space-x-1 mb-1">
              <img src="https://i.pravatar.cc/100?img=4" className="w-6 h-6 rounded-full border border-white" alt="Avatar" />
              <img src="https://i.pravatar.cc/100?img=5" className="w-6 h-6 rounded-full border border-white" alt="Avatar" />
              <img src="https://i.pravatar.cc/100?img=6" className="w-6 h-6 rounded-full border border-white" alt="Avatar" />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-[#1e3a5f] leading-none">870+</p>
              <p className="text-[10px] text-slate-500 mb-1">Reviews</p>
              <div className="flex text-yellow-400">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 4. Bottom White Card — z-index: 10 so it sits ON TOP of the doctors */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1152px',
          zIndex: 10,           /* HIGH z-index — doctors tuck behind this */
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 w-full"
        >
          {/* Call Us */}
          <div className="flex items-center gap-4 flex-1 w-full md:border-r border-slate-100 justify-center md:justify-start pl-4">
            <div className="w-12 h-12 bg-[#2E6BBA] text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-0.5">Call Us</p>
              <p className="text-sm text-[#1e3a5f] font-bold">+91 75777 41275</p>
            </div>
          </div>

          {/* Visit Us */}
          <div className="flex items-center gap-4 flex-1 w-full md:border-r border-slate-100 justify-center md:justify-start">
            <div className="w-12 h-12 bg-[#2E6BBA] text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-0.5">Visit Us</p>
              <p className="text-sm text-[#1e3a5f] font-bold">Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 flex-1 w-full justify-center md:justify-start">
            <div className="w-12 h-12 bg-[#2E6BBA] text-white rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-0.5">Location</p>
              <p className="text-sm text-[#1e3a5f] font-bold">Nashik, Maharashtra</p>
            </div>
          </div>

          {/* Book Now */}
          <div className="flex-1 w-full flex justify-center md:justify-end pr-4">
            <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2">
              Book Now <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
