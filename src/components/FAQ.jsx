import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, SmilePlus, Sparkles, Syringe, Crown, ActivitySquare, ShieldPlus } from 'lucide-react';

const faqs = [
  {
    question: 'How to book an appointment online?',
    answer: 'You can easily book an appointment by clicking the "Book Appointment" button on our website, selecting your preferred dental service and time slot, and filling out the necessary details.'
  },
  {
    question: 'Are root canal treatments painful?',
    answer: 'Not at all! With our advanced technology and experienced dental surgeons, we ensure that root canal treatments are virtually painless and extremely comfortable.'
  },
  {
    question: 'How often should I get my teeth cleaned?',
    answer: 'We recommend visiting the dentist for a professional teeth cleaning and checkup every 6 months to maintain optimal oral health and prevent cavities.'
  },
  {
    question: 'Do you provide dental implants?',
    answer: 'Yes, we specialize in high-quality dental implants that look and feel like your natural teeth, restoring both function and aesthetics to your smile.'
  }
];

const iconsList = [
  { icon: SmilePlus, label: 'General' },
  { icon: Sparkles, label: 'Cosmetic' },
  { icon: Crown, label: 'Implants' },
  { icon: ActivitySquare, label: 'Root Canal' },
  { icon: Syringe, label: 'Orthodontics' },
  { icon: ShieldPlus, label: 'Protection' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-2">What to do?</p>
          <h2 className="text-4xl font-bold text-[#1e3a5f]">Usually Asked</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-24">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-100 bg-[#EBF4FA]' : 'border-slate-100 bg-white'}`}
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={`font-semibold text-left ${isOpen ? 'text-[#1e3a5f]' : 'text-slate-600'}`}>
                    {faq.question}
                  </span>
                  <div className="text-blue-600 flex-shrink-0 ml-4">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12 border-t border-slate-100">
          {iconsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-3 text-slate-300 hover:text-blue-600 transition-colors cursor-pointer grayscale hover:grayscale-0">
                <Icon size={40} strokeWidth={1} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
