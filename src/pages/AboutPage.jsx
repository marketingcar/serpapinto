import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Serpa Pinto Veterinary Clinic",
    "image": "https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png",
    "@id": "",
    "url": "https://your-domain.com/about",
    "telephone": "+351-223-239-804",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Serpa Pinto 542",
      "addressLocality": "Porto",
      "postalCode": "4250-464",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.1604,
      "longitude": -8.6300
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "14:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "13:00"
      }
    ]
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const AboutPage = () => {
  const values = [{
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We provide honest guidance and empathetic support for every pet and family.'
  }, {
    icon: Award,
    title: 'Modern Technology',
    description: 'Advanced diagnostic and surgical equipment for precise, effective treatment.'
  }, {
    icon: Users,
    title: 'Transparent Communication',
    description: 'Clear explanations and consistent follow-up throughout your pet\'s care journey.'
  }, {
    icon: Sparkles,
    title: 'Welcoming Environment',
    description: 'A calm, friendly space designed for the comfort of pets and their owners.'
  }];
  return <>
      <Helmet>
        <title>About Serpa Pinto Veterinary Clinic | Experienced Veterinarians in Porto</title>
        <meta name="description" content="Meet our dedicated veterinary team providing advanced and compassionate care in Porto." />
        <JsonLd />
      </Helmet>

      <div className="pt-24">
        <section className="bg-brandDeep text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Dedicated to Veterinary Excellence in Porto
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              >
                A team of experienced veterinarians committed to providing modern, compassionate care for your beloved pets.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <img className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" alt="Veterinary team at Serpa Pinto Veterinary Clinic" src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/equipa-sem-fundo-GRlML.png" />
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                  Meet Our Team
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Serpa Pinto Veterinary Clinic is led by <span className="font-semibold text-brandDeep">Dr. Ivo Malta</span> and <span className="font-semibold text-brandDeep">Dr. Mafalda</span>, a team of experienced veterinarians who share a passion for providing modern, compassionate care.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  With a strong background in diagnostic medicine and preventive care, our clinicians ensure each patient receives the attention they deserve.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our approach blends science and empathy—offering precise diagnostics, transparent communication, and individualized treatment for every pet and family.
                </p>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Our Values
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Everything we do is guided by our commitment to excellence, compassion, and innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200">
                  <div className="w-14 h-14 bg-brandDeep rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                  Why Choose Serpa Pinto Veterinary Clinic?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700">Decades of combined clinical experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700">State-of-the-art diagnostic equipment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700">Personalized treatment plans for every pet</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700">Comfortable, stress-free environment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700">Convenient mobile app for appointments and consultations</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <img className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" alt="Modern veterinary clinic facility" src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/screenshot-2025-07-01-at-06.59.39-d6yh3.png" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default AboutPage;