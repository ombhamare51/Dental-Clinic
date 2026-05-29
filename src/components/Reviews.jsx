import { useState } from 'react';
import { motion } from 'framer-motion';

const reviewsData = [
  {
    name: 'William James',
    role: 'Patient',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote: '"The staff at Dr. Abhinandan\'s clinic is incredibly welcoming and professional. I went in for a routine checkup and teeth cleaning, and the experience was exceptionally comfortable. Highly recommend to anyone seeking trusted dental care!"',
    rating: 5
  },
  {
    name: 'Sarah Jasmine',
    role: 'Patient, India',
    avatar: 'https://i.pravatar.cc/150?img=5',
    quote: '"They provide excellent dental service. Dr. Abhinandan and the staff are very professional and caring. The clinic is modern, clean, and the root canal treatment was completely painless! I highly recommend this clinic to anyone looking for quality dental care."',
    rating: 5
  },
  {
    name: 'Christina Jones',
    role: 'Patient',
    avatar: 'https://i.pravatar.cc/150?img=9',
    quote: '"I had my teeth alignment treatment here using clear aligners. The results are amazing, and the process was so smooth. Dr. Abhinandan was very patient and explained every step of the journey. Five stars!"',
    rating: 5
  }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-2 font-sans">Some Reviews</h2>
          <p className="text-blue-500 font-semibold tracking-wider text-xs uppercase">What our patients say</p>
        </div>

        {/* Desktop Split 3-Column Timeline Layout */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Left Column: Avatars List */}
          <div className="flex flex-col justify-between h-[300px]">
            {reviewsData.map((review, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="flex justify-end items-center h-20"
                >
                  <motion.div 
                    className={`flex items-center gap-4 cursor-pointer transition-all duration-300 w-full max-w-[320px] ${
                      isActive 
                        ? 'bg-white p-4 rounded-2xl shadow-xl border border-slate-100/80 z-10 scale-105' 
                        : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img 
                      src={review.avatar} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
                      alt={review.name} 
                    />
                    <div>
                      <p className="font-bold text-[#1e3a5f] text-sm tracking-wide">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">{review.role}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Middle Column: Timeline Line & Dots */}
          <div className="relative flex flex-col justify-between items-center h-[260px] w-12">
            <div className="absolute top-2 bottom-2 w-[1.5px] bg-blue-200"></div>
            {reviewsData.map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative z-10 rounded-full border-2 border-white transition-all duration-300 ${
                    isActive ? 'w-5 h-5 bg-blue-500 scale-110 shadow-md' : 'w-3 h-3 bg-blue-300 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Right Column: Active Quote & Rating */}
          <div className="flex flex-col justify-center h-[300px] pl-4 lg:pl-8">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-md"
            >
              {/* Double Quote SVG Outline */}
              <svg className="w-8 h-8 text-blue-400/50 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 11a4 4 0 1 1-4-4c3 0 4 2 4 4zm10 0a4 4 0 1 1-4-4c3 0 4 2 4 4z" />
              </svg>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed italic">
                {reviewsData[activeIndex].quote}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < reviewsData[activeIndex].rating ? 'text-blue-500 fill-current' : 'text-slate-200'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Mobile-Only Layout */}
        <div className="md:hidden max-w-sm mx-auto">
          {/* Avatar Bar */}
          <div className="flex justify-center gap-6 mb-8">
            {reviewsData.map((review, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-110 opacity-100' : 'opacity-40'
                  }`}
                >
                  <img 
                    src={review.avatar} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" 
                    alt={review.name} 
                  />
                  <span className="text-[10px] font-bold text-[#1e3a5f] text-center max-w-[80px] truncate">{review.name.split(' ')[0]}</span>
                </div>
              );
            })}
          </div>

          {/* Active Review Box */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100/50"
          >
            {/* Double Quote SVG Outline */}
            <svg className="w-8 h-8 text-blue-400/50 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 11a4 4 0 1 1-4-4c3 0 4 2 4 4zm10 0a4 4 0 1 1-4-4c3 0 4 2 4 4z" />
            </svg>

            <p className="text-slate-500 text-sm leading-relaxed italic mb-4">
              {reviewsData[activeIndex].quote}
            </p>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-[#1e3a5f] text-xs tracking-wider">{reviewsData[activeIndex].name}</p>
                <p className="text-[10px] text-slate-400">{reviewsData[activeIndex].role}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < reviewsData[activeIndex].rating ? 'text-blue-500 fill-current' : 'text-slate-200'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
