import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-50/50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Ready for a brighter smile? Book an appointment today or reach out with any questions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Clinic Address</h4>
                <p className="text-slate-600 text-sm">123 Dental Plaza, Health Avenue,<br />New Delhi, India 110001</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Phone Number</h4>
                <p className="text-slate-600 text-sm">+91 9423733101</p>
                <p className="text-slate-600 text-sm">011-23456789</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Clinic Timings</h4>
                <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-600 text-sm">Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Email Address</h4>
                <p className="text-slate-600 text-sm">info@drabhinandanclinic.com</p>
              </div>
            </div>
          </motion.div>

          {/* Form & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Book an Appointment</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="+91 9423733101"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                    <option>Teeth Cleaning</option>
                    <option>Root Canal Treatment</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Braces & Aligners</option>
                    <option>Kids Dental Care</option>
                    <option>Other Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea 
                    rows="3" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5"
                  >
                    Submit Request
                  </button>
                  <button 
                    type="button" 
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </button>
                </div>
              </form>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-64 mt-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d224345.83923192776!2d77.0688975472578!3d28.527582006176066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
