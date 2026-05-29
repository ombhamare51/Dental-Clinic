import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#AECDF2] rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center min-h-[300px]"
      >
        <div className="p-12 md:p-20 md:w-2/3 z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Let Your Dental Health<br />Take a Backseat!
          </h2>
          <p className="text-white/90 text-lg max-w-md mb-8">
            Take charge of your smile today by scheduling an appointment with our expert dentists.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
            Book Appointment
          </button>
        </div>
        
        <div className="absolute right-0 bottom-0 h-full w-1/3 md:w-1/2 flex justify-end z-0">
          <img 
            src="/images/banner_dentist.png" 
            alt="Dentist smiling" 
            className="h-full object-cover rounded-tl-full opacity-90 mix-blend-multiply"
          />
        </div>
      </motion.div>
    </section>
  );
}
