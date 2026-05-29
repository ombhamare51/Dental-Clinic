import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#d4e8fc] text-[#1e3a5f] pt-24 pb-0 mt-40">
      
      {/* Peaked Top Border SVG */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '100px', transform: 'translateY(-99%)' }}>
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full fill-[#d4e8fc]">
          <polygon points="0,100 500,0 1000,100" />
        </svg>
      </div>

      {/* Central Shield Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: '-130px' }}>
        <div className="relative drop-shadow-2xl" style={{ width: '160px', height: '180px' }}>
          <svg viewBox="0 0 200 230" className="w-full h-full" style={{ filter: 'drop-shadow(0 8px 20px rgba(26, 58, 110, 0.35))' }}>
            {/* Shield body — dark navy blue, angular flat top with V-notch */}
            <path 
              d="M 100 6 L 190 30 L 190 50 C 190 130, 155 190, 100 222 C 45 190, 10 130, 10 50 L 10 30 Z" 
              fill="#1a3a6e" 
            />
            {/* Lighter left face for 3D depth */}
            <path 
              d="M 100 6 L 10 30 L 10 50 C 10 130, 45 190, 100 222 L 100 6 Z" 
              fill="#1e4080" 
            />
            {/* Darker right face for 3D depth */}
            <path 
              d="M 100 6 L 190 30 L 190 50 C 190 130, 155 190, 100 222 L 100 6 Z" 
              fill="#152e5c" 
            />

            {/* White circle with border ring */}
            <circle cx="100" cy="110" r="58" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="12 8" className="shield-circle-rotate" />
            <circle cx="100" cy="110" r="50" fill="#ffffff" />
            {/* White circle acts as background for the tooth image */}
          </svg>
          
          {/* Smiling tooth image overlaid on white circle */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '18px' }}>
            <img 
              src="/images/smiling_tooth.png" 
              alt="Smiling Tooth" 
              style={{ width: '78px', height: '78px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Shield animation */}
      <style>{`
        @keyframes shield-spin-circle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .shield-circle-rotate {
          transform-origin: 100px 110px;
          animation: shield-spin-circle 15s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 items-start">
          
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img 
                src="/images/tooth_logo.png" 
                alt="Clinic Logo" 
                className="w-14 h-14 object-contain rounded-full shadow-md flex-shrink-0" 
              />
              <h3 className="font-bold text-lg xl:text-xl text-[#1e3a5f] leading-snug">
                Dr. Abhinandan's Dental Clinic &<br />Implant Center
              </h3>
            </div>
            
            <div className="space-y-3.5 mt-6">
              <div className="flex items-center gap-3 text-sm text-[#1e3a5f]/90">
                <div className="w-8 h-8 rounded-full bg-[#2e6bba] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <MapPin size={14} />
                </div>
                <span>123 Dental Plaza, Health Avenue</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1e3a5f]/90">
                <div className="w-8 h-8 rounded-full bg-[#2e6bba] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Phone size={14} />
                </div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1e3a5f]/90">
                <div className="w-8 h-8 rounded-full bg-[#2e6bba] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Mail size={14} />
                </div>
                <span>info@drabhinandanclinic.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:pl-8">
            <h4 className="text-[#1e3a5f] font-bold text-lg mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1e3a5f]/80">
              {['About Us', 'Departments', 'Doctors', 'Timetable', 'Appointment', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#2e6bba] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:pl-4">
            <h4 className="text-[#1e3a5f] font-bold text-lg mb-6 tracking-tight">Support</h4>
            <ul className="space-y-4 text-sm font-semibold text-[#1e3a5f]/80">
              {['Blog', 'Contact Us', 'FAQs', 'Privacy Policy', 'Terms and Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#2e6bba] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription Newsletter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#1e3a5f] tracking-tight">Be Our Subscribers</h3>
            <p className="text-xs text-[#1e3a5f]/80 leading-normal">
              To get the latest dental care tips and news from our experts
            </p>
            
            <div className="flex items-center bg-white/60 border border-[#2e6bba]/30 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-[#2e6bba]/50 focus-within:border-transparent transition-all duration-300">
              <input 
                type="email" 
                placeholder="example@email.com" 
                className="w-full bg-transparent pl-4 pr-2 text-sm text-[#1e3a5f] placeholder-[#1e3a5f]/80 outline-none"
              />
              <button className="bg-[#2e6bba] text-white rounded-full px-5 py-2.5 text-xs font-bold hover:bg-[#1a4fa0] transition-colors flex items-center gap-1.5 flex-shrink-0">
                Submit <ArrowRight size={12} />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Darker Blue Copyright Bottom Bar */}
      <div className="bg-[#2e6bba] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white/90">Follow Us</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-105">
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <p className="text-white/80 text-xs sm:text-sm text-center sm:text-right">
            Copyright &copy; {new Date().getFullYear()} Dr. Abhinandan Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
