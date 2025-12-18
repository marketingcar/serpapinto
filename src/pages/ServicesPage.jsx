import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Scissors, Sparkles, Shield, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Clinical Examinations",
        "description": "Accurate diagnosis starts with the right tools. We use modern veterinary imaging and lab equipment for fast, reliable results."
      },
      {
        "@type": "Service",
        "name": "Surgeries",
        "description": "Our surgical suite is equipped for both routine and complex procedures, with a focus on safety, precision, and post-operative comfort."
      },
      {
        "@type": "Service",
        "name": "Baths & Grooming (SPA)",
        "description": "Keep your pet healthy, clean, and happy. Our grooming team uses gentle techniques and high-quality products suitable for sensitive skin and coat types."
      },
      {
        "@type": "Service",
        "name": "Preventive Care",
        "description": "Prevention is the best medicine. We create individualized plans for vaccinations, parasite prevention, and ongoing wellness to keep your pet thriving all year."
      },
      {
        "@type": "Service",
        "name": "Dental Care",
        "description": "Good dental health prevents pain and improves longevity. Our dental services include oral exams, ultrasonic cleaning, extractions, and owner education for at-home care."
      }
    ]
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};


const ServicesPage = () => {
  const services = [{
    icon: Stethoscope,
    title: 'Clinical Examinations',
    description: 'Accurate diagnosis starts with the right tools. We use modern veterinary imaging and lab equipment for fast, reliable results.',
    details: ['Annual wellness checks', 'Unexplained fatigue or loss of appetite', 'Lumps, bumps, or behavioral changes', 'Pre-surgical or geriatric evaluations'],
    image: 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/cvsp---espacisso-10-Qx5QN.jpg'
  }, {
    icon: Scissors,
    title: 'Surgeries',
    description: 'Our surgical suite is equipped for both routine and complex procedures, with a focus on safety, precision, and post-operative comfort.',
    details: ['Spaying and neutering', 'Tumor removal', 'Abdominal and orthopedic procedures', 'Dental extractions'],
    image: 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/90f57a4a2cd83950f879c2f8eeb416c0.jpg'
  }, {
    icon: Sparkles,
    title: 'Baths & Grooming (SPA)',
    description: 'Keep your pet healthy, clean, and happy. Our grooming team uses gentle techniques and high-quality products suitable for sensitive skin and coat types.',
    details: ['Bathing and brushing', 'Hair trimming and styling', 'Nail trimming and ear cleaning', 'Specialized grooming for puppies, seniors', 'or anxious pets'],
    image: 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/2dce3f89bcca34d6de6a98a876cbe838.jpg'
  }, {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Prevention is the best medicine. We create individualized plans for vaccinations, parasite prevention, and ongoing wellness to keep your pet thriving all year.',
    details: ['Puppy and kitten vaccination schedules', 'Flea, tick, and worm prevention', 'Nutritional guidance and microchipping'],
    image: 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/e055bc4d73349a673d3bc7aae628c117.jpg'
  }, {
    icon: Heart,
    title: 'Dental Care',
    description: 'Good dental health prevents pain and improves longevity. Our dental services include oral exams, ultrasonic cleaning, extractions, and owner education for at-home care.',
    details: ['Comprehensive oral examinations', 'Professional ultrasonic cleaning', 'Dental extractions when necessary', 'At-home dental care guidance'],
    image: 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/65442be24b340f5bdd8df808e39398a1.png'
  }];

  return (
    <>
      <Helmet>
        <title>Veterinary Services in Porto | Serpa Pinto Veterinary Clinic</title>
        <meta name="description" content="Clinical exams, surgeries, dental care, and grooming in Porto. Modern equipment and a compassionate team focused on your pet's health." />
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
                Advanced Veterinary Services in Porto
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              >
                Our clinic combines clinical expertise with diagnostic precision to ensure your pet receives complete and compassionate care.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-brandDeep rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brandDeep rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg group btn-gold-hover text-lg">
                        <span className="relative z-10">
                          Book {service.title}
                        </span>
                        <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        className={`w-full h-[400px] object-cover ${index === 1 ? 'object-center' : ''} ${service.title === 'Dental Care' ? 'object-bottom' : ''}`} 
                        alt={service.title} 
                        src={service.image} 
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brandDeep text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Schedule Your Pet's Care?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Contact us today to book an appointment or learn more about our services.
              </p>
              <a href="https://vet.digitail.io/clinics/clinica-veterinaria-serpa-pinto" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-brandDeep hover:bg-transparent hover:text-white shadow-xl btn-gold-hover text-lg border-2 border-transparent hover:border-white">
                  <span className="relative z-10">
                    Contact Us Now
                  </span>
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;