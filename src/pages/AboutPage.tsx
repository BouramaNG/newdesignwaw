import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Rocket,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Building,
  Clock,
  Award,
  Heart,
  Target
} from 'lucide-react';
import type { PageType } from '../App';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valueAddRef, valueAddInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const values = [
    {
      icon: Users,
      emoji: '💼',
      title: 'Service Client',
      subtitle: 'Réactivité, Expertise, Confiance',
      description: 'Chaque contact est simplifié pour permettre à nos clients de se concentrer sur ce qui compte vraiment : la réussite de leurs projets.'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Repousser nos limites',
      subtitle: 'Une culture de croissance et de résilience',
      description: 'Innover constamment pour dépasser les attentes et relever les défis technologiques de demain.'
    },
    {
      icon: Globe,
      emoji: '🌍',
      title: 'Franchir les frontières',
      subtitle: 'Une connectivité pour réduire la fracture numérique',
      description: 'Connecter les entreprises et les individus au-delà des frontières, en bâtissant un monde plus interconnecté.'
    }
  ];

  const valueAdds = [
    {
      icon: Globe,
      emoji: '🌐',
      title: 'Accessibilité',
      subtitle: 'Internet rapide et fiable pour tous',
      description: 'WAW TELECOM, nous croyons que l\'accès à un Internet rapide et fiable ne devrait pas être un luxe. Nous nous engageons à offrir des solutions de connectivité de qualité, adaptées à tous les budgets, grâce à des tarifs compétitifs. Cette approche inclusive permet aux particuliers, entreprises et communautés de rester connectés, sans compromis sur la performance ni sur la fiabilité.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    },
    {
      icon: Award,
      emoji: '🏆',
      title: 'Qualité',
      subtitle: 'Une connexion sur laquelle vous pouvez compter',
      description: 'Chez WAW TELECOM, la qualité est notre priorité absolue. Nous nous engageons à offrir un service Internet performant, fiable et à la hauteur des attentes de nos clients. Chaque connexion est pensée pour garantir une expérience fluide et une satisfaction durable. Avec WAW TELECOM, vous bénéficiez d\'une excellence technique et d\'un accompagnement sur mesure.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Utilité',
      subtitle: 'Une valeur ajoutée pour votre quotidien',
      description: 'Chez WAW TELECOM, nous faisons de l\'utilité la pierre angulaire de nos services. Nos solutions ne se limitent pas à un simple accès à Internet : elles offrent une réelle valeur ajoutée pour simplifier votre quotidien et booster vos activités professionnelles. Avec des forfaits flexibles, un support client réactif, et des services innovants.',
      image: 'https://wawtelecom.com/Services-Synapsys-04.jpg'
    }
  ];

  const partners = [
    { name: 'AFR-X', logo: 'https://via.placeholder.com/200x100/FFDD33/333333?text=AFR-X' },
    { name: 'Banque Atlantique', logo: 'https://via.placeholder.com/200x100/FFDD33/333333?text=Banque+Atlantique' },
    { name: 'Delta Air Lines', logo: 'https://via.placeholder.com/200x100/FFDD33/333333?text=Delta+Airlines' },
    { name: 'AIBD', logo: 'https://via.placeholder.com/200x100/FFDD33/333333?text=AIBD' },
    { name: 'BNDE', logo: 'https://via.placeholder.com/200x100/FFDD33/333333?text=BNDE' }
  ];

  const stats = [
    { icon: Building, value: '2015', label: 'Année de création' },
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: Globe, value: '200+', label: 'Pays couverts' },
    { icon: Award, value: '99.9%', label: 'Disponibilité' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-waw-dark via-gray-900 to-black text-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-waw-yellow/10 to-waw-yellow-dark/10 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-waw-yellow/5 to-white/5 rounded-full blur-3xl"
          />

          {/* Floating Tech Icons */}
          {[
            { icon: Globe, position: 'top-40 left-20', delay: 0 },
            { icon: Zap, position: 'top-60 right-40', delay: 1 },
            { icon: Shield, position: 'bottom-60 left-40', delay: 2 },
            { icon: Building, position: 'bottom-40 right-20', delay: 0.5 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.position} hidden lg:block`}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + item.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: item.delay,
              }}
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
                <item.icon size={24} className="text-waw-yellow" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="inline-block px-6 py-3 bg-waw-yellow/20 text-waw-yellow rounded-full text-lg font-semibold"
              >
                🏢 À Propos de WAW TELECOM
              </motion.span>

              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Redéfinir les{' '}
                <span className="bg-gradient-to-r from-waw-yellow to-waw-yellow-dark bg-clip-text text-transparent">
                  télécommunications
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Chez WAW TELECOM, nous redéfinissons les télécommunications au Sénégal. Leader innovant du secteur, nous offrons une gamme complète de services adaptés aux besoins des particuliers et des entreprises. Notre mission : fournir des solutions technologiques avancées qui allient performance, fiabilité et simplicité, pour connecter le Sénégal au reste du monde.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('contact')}
                  className="bg-waw-yellow text-waw-dark font-bold px-8 py-4 rounded-lg text-lg hover:bg-waw-yellow-dark transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Contactez-nous</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('connectivite')}
                  className="border-2 border-waw-yellow text-waw-yellow font-bold px-8 py-4 rounded-lg text-lg hover:bg-waw-yellow hover:text-waw-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <Globe size={20} />
                  <span>Nos services</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 bg-waw-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-waw-dark" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-waw-yellow/20 to-waw-yellow-dark/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            ref={valuesRef}
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-waw-yellow/20 text-waw-dark rounded-full text-sm font-semibold mb-4"
            >
              ⭐ Nos Valeurs
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-display font-bold text-waw-dark mb-6"
            >
              Les valeurs qui nous{' '}
              <span className="gradient-text">définissent</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              Nos valeurs fondamentales guident chacune de nos actions et définissent notre identité d'entreprise.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-waw-yellow to-waw-yellow-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-waw-dark mb-2">{value.title}</h3>
                  <p className="text-waw-yellow font-semibold text-lg mb-4">{value.subtitle}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Valeur Ajoutée */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            ref={valueAddRef}
            variants={containerVariants}
            initial="hidden"
            animate={valueAddInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-waw-yellow/20 text-waw-dark rounded-full text-sm font-semibold mb-4"
            >
              💎 Notre Valeur Ajoutée
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-display font-bold text-waw-dark mb-6"
            >
              Ce qui nous rend{' '}
              <span className="gradient-text">uniques</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-20">
            {valueAdds.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valueAddInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative bg-gradient-to-br from-waw-dark to-gray-800 rounded-3xl p-8 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-waw-dark/20 to-transparent rounded-2xl" />

                    {/* Floating Badge */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-waw-yellow rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">{item.emoji}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-waw-yellow to-waw-yellow-dark rounded-lg flex items-center justify-center">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-waw-dark">{item.title}</h3>
                        <p className="text-waw-yellow font-semibold text-lg">{item.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-waw-yellow">
                    <CheckCircle size={20} />
                    <span className="font-semibold">Avec WAW TELECOM, la connectivité devient un levier d'opportunités pour tous.</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="section-padding bg-gradient-to-br from-waw-yellow/5 to-waw-yellow-dark/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            ref={partnersRef}
            variants={containerVariants}
            initial="hidden"
            animate={partnersInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-waw-yellow/20 text-waw-dark rounded-full text-sm font-semibold mb-4"
            >
              🤝 Nos Partenaires
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-display font-bold text-waw-dark mb-6"
            >
              Parmi nos partenaires de{' '}
              <span className="gradient-text">confiance</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-16 max-w-full object-contain filter hover:brightness-110 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-waw-dark to-gray-800 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-block px-6 py-3 bg-waw-yellow/20 text-waw-yellow rounded-full text-lg font-semibold mb-6"
            >
              🚀 Rejoignez l'aventure
            </motion.span>

            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Prêt à découvrir{' '}
              <span className="bg-gradient-to-r from-waw-yellow to-waw-yellow-dark bg-clip-text text-transparent">
                WAW TELECOM
              </span> ?
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Avec une expertise de pointe et un engagement envers l'excellence, WAW TELECOM est votre partenaire de confiance pour répondre aux défis de l'ère numérique.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="bg-waw-yellow text-waw-dark font-bold px-8 py-4 rounded-lg text-lg hover:bg-waw-yellow-dark transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Contactez nos experts</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('travel')}
                className="border-2 border-waw-yellow text-waw-yellow font-bold px-8 py-4 rounded-lg text-lg hover:bg-waw-yellow hover:text-waw-dark transition-all flex items-center justify-center space-x-2"
              >
                <Globe size={20} />
                <span>Découvrir nos solutions</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
