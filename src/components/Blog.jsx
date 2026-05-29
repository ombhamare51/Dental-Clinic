import { motion } from 'framer-motion';

const blogs = [
  {
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600',
    tag: 'DENTAL CARE',
    date: 'Oct 12, 2023',
    title: 'Discover the benefits of daily flossing and routine checkups.',
  },
  {
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
    tag: 'NUTRITION',
    date: 'Oct 15, 2023',
    title: 'Top 5 foods to avoid for maintaining strong and healthy teeth.',
  },
  {
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    tag: 'HEALTH',
    date: 'Oct 18, 2023',
    title: 'Effective tips for managing sensitive teeth in winter.',
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Blog / News</p>
          <h2 className="text-4xl font-bold text-[#1e3a5f]">Latest Update</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-xs font-semibold mb-4">
                  <span className="text-blue-600 uppercase tracking-wider">{blog.tag}</span>
                  <span className="text-slate-400">{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-6 leading-snug">
                  {blog.title}
                </h3>
                <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Read More 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
