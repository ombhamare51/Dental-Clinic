import { motion } from 'framer-motion';

export default function Appointment() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-blue-600 font-medium mb-2 uppercase tracking-wider text-sm">Make An</p>
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-8">Appointment</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white">
                    <option value="">Select Service</option>
                    <option value="general">General Checkup</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-slate-500">
                  I agree to the <a href="#" className="text-blue-600 underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                </label>
              </div>

              <button 
                type="button"
                className="bg-[#1e3a5f] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </form>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-end"
          >
            <div className="bg-[#d6e8fc] rounded-[3rem] w-full max-w-md h-[500px] relative overflow-hidden flex items-end justify-center">
              <img 
                src="/images/doctor_profile.png" 
                alt="Dentist pointing" 
                className="h-[95%] object-cover object-top mix-blend-multiply drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
