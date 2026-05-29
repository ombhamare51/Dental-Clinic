import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  // Stagger variants for right side text and list elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-50/70 rounded-full blur-3xl translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side Images with custom floating animations & interactive badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center"
          >
            {/* Background dashed circle that slowly spins */}
            <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-blue-200/60 animate-spin-slow"></div>
            
            {/* Main Image - floats and scales on hover */}
            <div className="absolute top-6 right-8 md:right-16 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20 animate-float-slow hover:scale-105 hover:shadow-blue-200/50 transition-all duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" 
                alt="Dentist talking to patient" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image - floats out of phase and scales on hover */}
            <div className="absolute bottom-6 left-8 md:left-16 w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-white shadow-2xl z-30 animate-float-delay hover:scale-105 hover:shadow-blue-200/50 transition-all duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                alt="Dentist smiling" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glassmorphic Stats Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
              className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-slate-100/80 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 z-40 hover:scale-105 transition-transform duration-300 animate-float-slow"
              style={{ animationDelay: '-2s' }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
                15+
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">Years of</p>
                <p className="text-sm text-[#1e3a5f] font-extrabold leading-none">Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Content with Staggered Scroll-Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-6 lg:pl-4"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-4xl font-extrabold text-[#1e3a5f] tracking-tight">About Us</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-2xl text-blue-600 font-semibold leading-snug">
              Your Journey to a Healthier, Brighter Smile
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-slate-600 leading-relaxed text-[15px]">
              We are dedicated to providing excellent dental services. Our team of experienced dental surgeons and staff are here to ensure you receive the best treatment possible for a healthy, beautiful smile.
            </motion.p>

            <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Expert Dental Surgeons',
                'State-of-the-art Equipment',
                'Painless Procedures',
                'Patient-centered Approach'
              ].map((item, idx) => (
                <motion.li 
                  variants={itemVariants}
                  key={idx} 
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="text-blue-500 bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300 flex-shrink-0 cursor-pointer shadow-sm"
                  >
                    <CheckCircle2 size={16} className="stroke-[2.5]" />
                  </motion.div>
                  <span className="text-slate-700 font-semibold text-sm group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="pt-6">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer">
                Learn More 
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
