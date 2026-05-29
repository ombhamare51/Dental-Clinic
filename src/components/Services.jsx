import { motion } from 'framer-motion';
import { Sparkles, Syringe, Crown, ActivitySquare, SmilePlus, Baby } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Cleaning',
    description: 'Professional plaque and tartar removal for a brighter, healthier smile.',
  },
  {
    icon: ActivitySquare,
    title: 'Root Canal Treatment',
    description: 'Painless endodontic therapy to save and restore infected teeth.',
  },
  {
    icon: Crown,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth.',
  },
  {
    icon: SmilePlus,
    title: 'Teeth Whitening',
    description: 'Advanced whitening procedures for a dazzling, confident smile.',
  },
  {
    icon: Syringe,
    title: 'Braces & Aligners',
    description: 'Orthodontic solutions including clear aligners for perfect teeth alignment.',
  },
  {
    icon: Baby,
    title: 'Kids Dental Care',
    description: 'Gentle, specialized pediatric dentistry for your little ones.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Comprehensive Dental Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We offer a wide range of dental services using the latest technology to ensure 
            you receive the best possible care for your smile.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
