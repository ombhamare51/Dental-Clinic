import { motion } from 'framer-motion';
import { SmilePlus, ActivitySquare, Crown, Sparkles, Syringe, Stethoscope } from 'lucide-react';

// Custom Dental Icon Components
const GeneralDentistryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M12 6c-2 0-4-1.5-6 0-1.5 1.5-1.5 4.5-1 7 .5 3 2.5 5 2.5 8 0 .5.5 1 1 1s1-.5 1.3-2c.7-3 1.2-5 2.2-5s1.5 2 2.2 5c.3 1.5.8 2 1.3 2s1-.5 1-1c0-3 2-5 2.5-8 .5-2.5.5-5.5-1-7-2-1.5-4 0-6 0z" />
    <path d="M12 9v4M10 11h4" strokeWidth="1.5" />
  </svg>
);

const CosmeticDentistryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M12 6c-2 0-4-1.5-6 0-1.5 1.5-1.5 4.5-1 7 .5 3 2.5 5 2.5 8 0 .5.5 1 1 1s1-.5 1.3-2c.7-3 1.2-5 2.2-5s1.5 2 2.2 5c.3 1.5.8 2 1.3 2s1-.5 1-1c0-3 2-5 2.5-8 .5-2.5.5-5.5-1-7-2-1.5-4 0-6 0z" />
    <path d="M18 4c.8 0 1-.2 1-1c0 .8.2 1 1 1c-.8 0-1 .2-1 1c0-.8-.2-1-1-1zM5 8c.5 0 .6-.1.6-.6 0 .5.1.6.6.6c-.5 0-.6.1-.6.6 0-.5-.1-.6-.6-.6z" fill="currentColor" stroke="none" />
  </svg>
);

const DentalImplantsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M12 6c-2 0-4-1.5-6 0-1.5 1.5-1.5 4.5-1 7 .5 2.5 2.5 4 4.5 4h5c2 0 4-1.5 4.5-4 .5-2.5.5-5.5-1-7-2-1.5-4 0-6 0z" />
    <path d="M12 17v5M9 19h6M10 20.5h4M11 22h2" />
  </svg>
);

const RootCanalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M12 6c-2 0-4-1.5-6 0-1.5 1.5-1.5 4.5-1 7 .5 3 2.5 5 2.5 8 0 .5.5 1 1 1s1-.5 1.3-2c.7-3 1.2-5 2.2-5s1.5 2 2.2 5c.3 1.5.8 2 1.3 2s1-.5 1-1c0-3 2-5 2.5-8 .5-2.5.5-5.5-1-7-2-1.5-4 0-6 0z" />
    <path d="M12 9c-.5 0-1 1-1 2s-1.5 4-2.5 7M12 11c.5 0 1 1 1 2s1.5 4 2.5 7" />
  </svg>
);

const OrthodonticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
    <path d="M12 6c-2 0-4-1.5-6 0-1.5 1.5-1.5 4.5-1 7 .5 3 2.5 5 2.5 8 0 .5.5 1 1 1s1-.5 1.3-2c.7-3 1.2-5 2.2-5s1.5 2 2.2 5c.3 1.5.8 2 1.3 2s1-.5 1-1c0-3 2-5 2.5-8 .5-2.5.5-5.5-1-7-2-1.5-4 0-6 0z" />
    <path d="M4 11.5h16" strokeWidth="1.2" />
    <rect x="9" y="10" width="6" height="3" rx="0.5" fill="currentColor" stroke="none" />
    <path d="M10 9v5M14 9v5" />
  </svg>
);

const mainDeps = [
  { icon: GeneralDentistryIcon, name: 'General\nDentistry' },
  { icon: CosmeticDentistryIcon, name: 'Cosmetic\nDentistry' },
  { icon: DentalImplantsIcon, name: 'Dental\nImplants' },
  { icon: RootCanalsIcon, name: 'Root\nCanals' },
  { icon: OrthodonticsIcon, name: 'Orthodontics' },
];

const detailedDeps = [
  { icon: Stethoscope, title: 'General Checkups', text: 'Comprehensive oral examinations, digital x-rays, and routine cleaning for optimal dental health.' },
  { icon: ActivitySquare, title: 'Root Canal Treatment', text: 'Painless endodontic therapy to save infected teeth and restore your natural smile.' },
  { icon: Crown, title: 'Dental Implants', text: 'Permanent, natural-looking replacements for missing teeth to restore function and confidence.' },
  { icon: Sparkles, title: 'Teeth Whitening', text: 'Advanced whitening procedures to remove stains and give you a dazzling, bright smile.' },
];

export default function Departments() {
  return (
    <section id="services" className="pt-24 pb-12">
      {/* Top Section with Blue Curved Background */}
      <div className="relative bg-[#D4E8F9] pt-16 pb-32 rounded-t-[3rem] mx-4 sm:mx-8 lg:mx-16">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold text-[#1e3a5f]">Our Services</h2>
        </div>
        
        {/* Floating 5 Cards */}
        <div className="absolute -bottom-16 left-0 w-full px-4 sm:px-12 z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            {mainDeps.map((dep, idx) => {
              const Icon = dep.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white hover:bg-[#2b82d4] rounded-2xl p-6 shadow-xl w-36 sm:w-44 h-40 sm:h-48 flex flex-col items-center justify-center text-center gap-4 group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 flex items-center justify-center text-[#0ea5e9] group-hover:text-white transition-colors duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-[#1e3a5f] group-hover:text-white font-semibold text-sm whitespace-pre-line leading-tight transition-colors duration-300">{dep.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacing for floating cards */}
      <div className="h-32"></div>

      {/* Bottom Detailed Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10">Specialized Treatments</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detailedDeps.map((dep, idx) => {
            const Icon = dep.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{dep.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{dep.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
