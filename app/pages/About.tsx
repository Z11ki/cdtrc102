import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

export function About() {
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
              About <span className="text-[var(--sea-blue)]">CDTRC</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Child Development Training & Research Center is a leading non-governmental organization 
              dedicated to building capacity and excellence in child development practices worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-[var(--sea-blue)] mb-6 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded with a vision to transform child development practices, CDTRC has grown into a 
                trusted partner for professionals working with children across the globe. Our journey began 
                with a simple belief: that every child deserves the best possible start in life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, we have trained thousands of educators, social workers, healthcare professionals, 
                and caregivers, equipping them with the knowledge, skills, and confidence to make a meaningful 
                difference in children's lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, CDTRC stands as a beacon of excellence in child development training and research, continuously 
                evolving our programs to meet the changing needs of professionals and the children they serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Children learning" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sea-blue)]/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--sea-blue)] to-[var(--sea-blue-light)] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every child has access to nurturing, knowledgeable, and skilled professionals 
                who understand and support their developmental needs, creating a foundation for lifelong success 
                and well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--yellow-accent-dark)] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower professionals working with children through comprehensive, evidence-based training 
                programs and innovative research that build capacity, foster excellence, and promote best practices 
                in child development across diverse settings and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Child-Centered',
                description: 'Every decision we make prioritizes the best interests and developmental needs of children.',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in our training programs and continuously strive for improvement.',
                color: 'from-[var(--sea-blue)] to-[var(--sea-blue-light)]'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We believe in the power of partnership and work closely with institutions and communities.',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Globe,
                title: 'Inclusivity',
                description: 'We embrace diversity and ensure our programs are accessible to professionals from all backgrounds.',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Target,
                title: 'Impact-Driven',
                description: 'We measure our success by the positive impact our trained professionals have on children\'s lives.',
                color: 'from-[var(--yellow-accent)] to-orange-500'
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and ethical practices in all our endeavors.',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: '2010',
                title: 'Foundation',
                description: 'CDTRC was established with a mission to transform child development practices through professional training.'
              },
              {
                year: '2013',
                title: 'First Certification Program',
                description: 'Launched our first accredited certification program, training over 500 professionals in the first year.'
              },
              {
                year: '2016',
                title: 'International Expansion',
                description: 'Extended our reach beyond borders, partnering with institutions in 15 countries.'
              },
              {
                year: '2019',
                title: 'Digital Transformation',
                description: 'Introduced online training platforms, making our programs accessible to professionals worldwide.'
              },
              {
                year: '2022',
                title: '5000+ Professionals Trained',
                description: 'Reached a milestone of training over 5000 professionals, impacting countless children\'s lives.'
              },
              {
                year: '2024',
                title: 'Innovation Hub',
                description: 'Established a research and innovation hub to develop cutting-edge training methodologies.'
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center gap-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-bold text-[var(--sea-blue)]">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[var(--yellow-accent)] border-4 border-white shadow-lg relative z-10"></div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                {index < 5 && (
                  <div className="absolute left-[10.5rem] top-8 w-0.5 h-full bg-gradient-to-b from-[var(--sea-blue)] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
