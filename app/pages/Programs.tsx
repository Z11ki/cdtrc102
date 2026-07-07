import { motion } from 'motion/react';
import { BookOpen, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export function Programs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--sea-blue)]/10 via-white to-[var(--yellow-accent)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--sea-blue)]">Programs</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive training programs designed to build capacity and excellence in child development practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ImpactStat number="5000" suffix="+" label="Professionals Trained" />
            <ImpactStat number="150" suffix="+" label="Workshops Conducted" />
            <ImpactStat number="20" suffix="+" label="Certification Programs" />
            <ImpactStat number="100" suffix="+" label="Partner Institutions" />
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8">
            <ProgramCard
              icon={BookOpen}
              title="Professional Development Training"
              description="Comprehensive training programs for educators, social workers, and child care professionals. Our courses cover child psychology, developmental milestones, behavior management, and evidence-based teaching strategies."
              duration="3-6 months"
              format="Hybrid (Online + In-person)"
              features={[
                'Evidence-based curriculum',
                'Interactive learning modules',
                'Practical case studies',
                'Expert mentorship',
                'Continuous assessment'
              ]}
              color="from-[var(--sea-blue)] to-[var(--sea-blue-light)]"
              delay={0}
            />

            <ProgramCard
              icon={Users}
              title="Workshops & Seminars"
              description="Interactive sessions covering the latest research and best practices in child development. Topics include trauma-informed care, inclusive education, play-based learning, and family engagement strategies."
              duration="1-5 days"
              format="In-person & Virtual"
              features={[
                'Expert-led sessions',
                'Hands-on activities',
                'Networking opportunities',
                'Resource materials',
                'Certificate of attendance'
              ]}
              color="from-purple-500 to-indigo-500"
              delay={0.2}
            />

            <ProgramCard
              icon={Award}
              title="Certification Programs"
              description="Accredited certification courses that validate expertise in child-centered practices. Our certifications are recognized internationally and demonstrate professional competence in specialized areas of child development."
              duration="6-12 months"
              format="Blended Learning"
              features={[
                'Internationally recognized',
                'Rigorous assessment',
                'Practical examinations',
                'Continuing education credits',
                'Professional credential'
              ]}
              color="from-[var(--yellow-accent)] to-orange-500"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Training Areas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Early Childhood Education',
                description: 'Specialized training in early years development, play-based learning, and age-appropriate pedagogy.',
                icon: '👶'
              },
              {
                title: 'Special Needs Education',
                description: 'Inclusive practices, individualized education plans, and supporting children with diverse abilities.',
                icon: '🤝'
              },
              {
                title: 'Child Protection',
                description: 'Safeguarding practices, recognizing abuse, and creating safe environments for children.',
                icon: '🛡️'
              },
              {
                title: 'Trauma-Informed Care',
                description: 'Understanding childhood trauma and implementing healing-centered approaches.',
                icon: '💚'
              },
              {
                title: 'Family Engagement',
                description: 'Building strong partnerships with families and communities for child success.',
                icon: '👨‍👩‍👧‍👦'
              },
              {
                title: 'Child Mental Health',
                description: 'Promoting emotional well-being and addressing mental health challenges in children.',
                icon: '🧠'
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Camp Section */}
      <section className="py-20 bg-gradient-to-br from-[#129246] to-[#0F7E3C] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-8xl mb-6">🏕️</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              <span className="text-[#F79321]">TESFA</span> <span className="text-white">TEWLED</span>
            </h2>
            <p className="text-xl text-white/90 mb-4">Summer Camp 2026</p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Leadership • Growth • Adventure • Character Building
            </p>

            {/* Location Info */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30 text-white"
              >
                <span className="text-xl">📍</span>
                <span className="font-medium">Sendafa, about 30km northeast of Addis Ababa</span>
              </motion.div>
            </div>

            {/* Camp Activities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">📈</div>
                <div className="font-bold text-lg">Leadership</div>
                <div className="text-sm opacity-90">Development</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">🌱</div>
                <div className="font-bold text-lg">Personal</div>
                <div className="text-sm opacity-90">Growth</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">👥</div>
                <div className="font-bold text-lg">Team</div>
                <div className="text-sm opacity-90">Activities</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">🔥</div>
                <div className="font-bold text-lg">Campfire</div>
                <div className="text-sm opacity-90">Program</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">🎯</div>
                <div className="font-bold text-lg">Character</div>
                <div className="text-sm opacity-90">Building</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">🗺️</div>
                <div className="font-bold text-lg">Adventure</div>
                <div className="text-sm opacity-90">Games</div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-lg">📞</span>
                <span>+251996004242</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-lg">📱</span>
                <span>+251116677997</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/summer-camp/register">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-12 py-5 bg-[#F79321] text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-[#F79321]/30 transition-all duration-300 hover:bg-[#e87a0a] group"
                >
                  Register Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <p className="text-white/80 mt-4 text-sm">
                Join us for an unforgettable summer experience!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--sea-blue-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of professionals who have transformed their practice through our training programs.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--yellow-accent)] hover:bg-[var(--yellow-accent-dark)] text-gray-900 rounded-xl font-semibold transition-all duration-300 glow-yellow">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ImpactStat({ number, suffix, label }: { number: string; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = parseInt(number);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[var(--sea-blue)] mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
}

function ProgramCard({
  icon: Icon,
  title,
  description,
  duration,
  format,
  features,
  color,
  delay
}: {
  icon: any;
  title: string;
  description: string;
  duration: string;
  format: string;
  features: string[];
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center text-center border-r border-gray-100">
          <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 glow-sea-blue`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 text-[var(--sea-blue)]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 text-[var(--sea-blue)]" />
              <span>{format}</span>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 p-8">
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--sea-blue)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
