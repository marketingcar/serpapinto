import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Scissors, Shield, Sparkles, Phone, Mail, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppleAppStoreIcon from '@/components/icons/AppleAppStoreIcon';
import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import HeroBackground from '@/components/HeroBackground';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Serpa Pinto Veterinary Clinic",
    "image": "https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png",
    "@id": "",
    "url": "https://your-domain.com/",
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
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book an Appointment"
      }
    }
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const heroImages = ['https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/frontoffice-pjakr.jpg', 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/d571b83b4406bd1f7d75a8d91bde3e96.jpg', 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/b33ebe8f633dd0346ee961e68696cc02.jpg', 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/e99d2d6b09cbadfe24ac9f3e1b9aa2c7.jpg', 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ce4513f7921b9ad392ab8992c434f016.jpg'];
const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);
  const services = [{
    icon: Stethoscope,
    title: 'Clinical Examinations',
    description: 'Fast, precise diagnostics with top-tier laboratory and imaging equipment.'
  }, {
    icon: Scissors,
    title: 'Surgeries',
    description: 'Safe, effective procedures performed by an experienced surgical team.'
  }, {
    icon: Sparkles,
    title: 'Baths & Grooming (SPA)',
    description: 'Gentle hygiene and beauty care tailored to each pet\'s comfort.'
  }, {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Vaccinations, deworming, and parasite prevention plans.'
  }];
  return <>
      <Helmet>
        <title>Serpa Pinto Veterinary Clinic | Porto | Advanced Care for Dogs and Cats</title>
        <meta name="description" content="Trusted veterinary clinic in Porto offering advanced diagnostics, surgery, grooming, and preventive care. Schedule your pet's appointment today." />
        <JsonLd />
      </Helmet>

      <div className="pt-24">
        <section className="relative overflow-hidden bg-brandDeep">
            <HeroBackground position="top" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Excellence and Innovation in Veterinary Care
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-white/90">
                  Porto, Portugal
                </p>
                <p className="text-lg mb-8 text-white/90 leading-relaxed">
                  At Serpa Pinto Veterinary Clinic, we combine decades of clinical experience with advanced diagnostic technology to provide the highest standard of veterinary care in Porto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-xl group text-lg btn-gold-hover">
                      <span className="relative z-10">Schedule Now</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="tel:+351223239804">
                    <Button size="lg" className="bg-white text-brandDeep hover:bg-transparent hover:text-white border-2 border-white before:bg-transparent text-lg">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <AnimatePresence initial={false}>
                    <motion.img key={currentImageIndex} src={heroImages[currentImageIndex]} initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} exit={{
                    opacity: 0
                  }} transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }} className="absolute inset-0 w-full h-full object-cover" alt="Serpa Pinto Veterinary Clinic interior" />
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
            <HeroBackground position="bottom" />
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Comprehensive Veterinary Services
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From preventive exams to complex surgical procedures, Serpa Pinto Veterinary Clinic offers complete animal healthcare under one roof.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <motion.div key={index} initial={{
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
                  <div className="w-14 h-14 bg-gradient-to-br from-brandDeep to-brandDeep rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg group btn-gold-hover text-lg px-6">
                  <span className="relative z-10">More About Our Services</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
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
                <img className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" alt="Welcoming veterinary clinic interior" src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/frontoffice-pjakr.jpg" />
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
                  A Welcoming Environment for Every Animal
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We believe that healing begins with comfort. Our clinic was designed to create a calm, friendly space where both pets and owners feel at ease.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Every visit is an opportunity to build trust, answer questions, and guide you toward the best choices for your pet's health.
                </p>
                <Link to="/about">
                  <Button size="lg" className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg btn-gold-hover text-lg px-6">
                     <span className="relative z-10">More About Us</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                      Manage Your Pet's Health with Digitail
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Our clinic uses the Digitail app to provide you with seamless access to your pet's health management, right from your smartphone.
                  </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brandDeep to-brandDeep rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Book Appointments</h3>
                      <p className="text-slate-600">Easily schedule visits online, 24/7.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brandDeep to-brandDeep rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Chat with Your Vet</h3>
                      <p className="text-slate-600">Get answers and advice directly from our team.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brandDeep to-brandDeep rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Access Records</h3>
                      <p className="text-slate-600">View medical history, reminders, and updates.</p>
                  </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                  <a href="https://apps.apple.com/app/digitail/id1473042508" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                      <AppleAppStoreIcon className="h-14" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.digitail.digitail&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300">
                       <GooglePlayIcon className="h-14" />
                  </a>
              </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-brandDeep to-brandDeep text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Give Your Pet the Best Care?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Book your appointment or chat with your veterinarian directly through our mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-xl text-lg btn-gold-hover">
                    <span className="relative z-10">Schedule Now</span>
                  </Button>
                </a>
                <a href="tel:+351223239804">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-transparent hover:text-white before:bg-white/10 text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    +351 223 239 804
                  </Button>
                </a>
                <a href="mailto:info@vetserpapinto.pt">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-transparent hover:text-white before:bg-white/10 text-lg">
                    <Mail className="mr-2 w-5 h-5" />
                    Email Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default HomePage;