import { motion } from 'framer-motion';
import { Heart, Star, Shield, ThumbsUp, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    text: 'We understand that seeking dental care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.',
    featured: false,
  },
  {
    icon: Star,
    title: 'Excellence',
    text: 'We are committed to providing excellent dental care and oral health services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
    featured: true,
  },
  {
    icon: Shield,
    title: 'Integrity',
    text: 'We believe in practicing dentistry with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient\'s interests first & provide the best solution.',
    featured: false,
  },
  {
    icon: ThumbsUp,
    title: 'Respect',
    text: 'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
    featured: false,
  },
  {
    icon: Users,
    title: 'Teamwork',
    text: 'We believe in working collaboratively with our team members and other dental professionals to provide comprehensive and effective care to our patients.',
    featured: false,
  },
];

export default function Values() {
  const row1 = values.slice(0, 3);
  const row2 = values.slice(3, 5);

  return (
    <section className="values-section">
      <div className="values-container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1e3a5f]">Our Values</h2>
        </div>

        {/* Row 1: 3 cards */}
        <div className="values-row values-row-3">
          {row1.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className={`value-card ${value.featured ? 'value-card--featured' : ''}`}
              >
                <div className="value-header-wrapper">
                  <div className="value-header-capsule">
                    <div className={`value-icon-wrap ${value.featured ? 'value-icon-wrap--featured' : ''} value-icon-${value.title.toLowerCase()}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className={`value-title ${value.featured ? 'value-title--featured' : ''}`}>{value.title}</h3>
                  </div>
                </div>
                <p className={`value-text ${value.featured ? 'value-text--featured' : ''}`}>{value.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="values-row values-row-2">
          {row2.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 + 0.3, duration: 0.5 }}
                className="value-card"
              >
                <div className="value-header-wrapper">
                  <div className="value-header-capsule">
                    <div className={`value-icon-wrap value-icon-${value.title.toLowerCase()}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="value-title">{value.title}</h3>
                  </div>
                </div>
                <p className="value-text">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .values-section {
          padding: 60px 0 80px;
          background: #ffffff;
        }

        .values-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .values-row {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: stretch;
        }

        .values-row-3 {
          margin-bottom: 28px;
        }

        /* Bottom 2 cards are exactly 2/3 of the top row width — true pyramid */
        .values-row-2 {
          max-width: 1100px;
          margin: 0 auto;
        }

        .values-row-2 .value-card {
          max-width: calc((1100px - 48px) / 3);
        }

        /* ─── Normal Card ─── */
        .value-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px 28px;
          box-shadow: 0 2px 18px rgba(0, 0, 0, 0.07);
          border: 1px solid #e8eef5;
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          cursor: default;
        }

        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(59, 130, 246, 0.15);
          border-color: #93c5fd;
        }

        .value-header-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
          width: 100%;
        }

        .value-header-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 10px 24px;
          border-radius: 9999px;
          background: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .value-header-capsule:hover {
          background: #93c5fd; /* Soft light blue capsule background as in image */
          transform: scale(1.15); /* More zoomer! */
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.18);
          animation: pulse-bg 3s infinite ease-in-out;
        }

        .value-icon-wrap {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 50%;
          background: #1e60b8;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.28s ease, transform 0.28s ease;
        }

        .value-header-capsule:hover .value-icon-wrap {
          background: #164f9c;
          transform: scale(1.08);
        }

        .value-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a2e4a;
          margin: 0;
          transition: color 0.25s ease;
        }

        .value-header-capsule:hover .value-title {
          color: #1a2e4a; /* Keep title text clean and dark */
        }

        /* ─── Icon Hover Animations ─── */
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.18); }
          50% { transform: scale(1); }
          75% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }

        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shield-pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(30, 96, 184, 0.4); }
          100% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(30, 96, 184, 0); }
        }

        @keyframes thumbs-up-bounce {
          0% { transform: translateY(0) rotate(0deg); }
          30% { transform: translateY(-4px) rotate(-12deg); }
          50% { transform: translateY(0) rotate(6deg); }
          70% { transform: translateY(-2px) rotate(-4deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        @keyframes teamwork-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @keyframes pulse-bg {
          0% { background-color: #93c5fd; }
          50% { background-color: #a5f3fc; } /* pulse between soft light blue and cyan */
          100% { background-color: #93c5fd; }
        }

        /* Trigger them when the parent capsule is hovered */
        .value-header-capsule:hover .value-icon-compassion svg {
          animation: heartbeat 1s infinite ease-in-out;
        }

        .value-header-capsule:hover .value-icon-excellence svg {
          animation: spin-once 0.8s ease-in-out;
        }

        .value-header-capsule:hover .value-icon-integrity svg {
          animation: shield-pulse 1s infinite alternate ease-in-out;
        }

        .value-header-capsule:hover .value-icon-respect svg {
          animation: thumbs-up-bounce 0.8s ease-in-out;
        }

        .value-header-capsule:hover .value-icon-teamwork svg {
          animation: teamwork-bounce 1s infinite ease-in-out;
        }

        .value-text {
          font-size: 0.875rem;
          color: #6b8aac;
          line-height: 1.75;
          margin: 0;
          text-align: center;
          flex-grow: 1;
        }

        /* ─── Featured Card (Excellence) ─── */
        .value-card--featured {
          background: #ffffff;
          border-color: #bdd6f5;
          position: relative;
        }

        .value-card--featured:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 40px rgba(59, 130, 246, 0.2);
          border-color: #60a5fa;
        }

        .value-icon-wrap--featured {
          width: 36px;
          height: 36px;
          min-width: 36px;
          background: #1e60b8;
          transition: background 0.28s ease, transform 0.28s ease;
        }

        .value-header-capsule:hover .value-icon-wrap--featured {
          background: #164f9c;
          transform: scale(1.08);
        }

        .value-title--featured {
          font-size: 1.4rem;
          color: #1a2e4a;
          margin: 0;
          transition: color 0.25s ease;
        }

        .value-header-capsule:hover .value-title--featured {
          color: #1a2e4a;
        }

        .value-text--featured {
          font-size: 0.875rem;
          color: #6b8aac;
          line-height: 1.75;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 960px) {
          .values-row-3 {
            flex-wrap: wrap;
          }
          .values-row-2 .value-card {
            max-width: none;
          }
          .value-card {
            min-width: calc(50% - 12px);
          }
        }

        @media (max-width: 600px) {
          .values-row,
          .values-row-2 {
            flex-direction: column;
            align-items: stretch;
          }
          .value-card,
          .values-row-2 .value-card {
            min-width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
