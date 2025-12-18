import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const WhatsAppIconSvg = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="whatsapp-gradient-contact" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#566e61" />
          <stop offset="100%" stopColor="#abcdb3" />
        </linearGradient>
      </defs>
      <path 
        fill="url(#whatsapp-gradient-contact)"
        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
      />
    </svg>
);

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Serpa Pinto Veterinary Clinic",
    "image": "https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png",
    "@id": "",
    "url": "https://your-domain.com/contact",
    "telephone": "+351-223-239-804",
    "email": "info@vetserpapinto.pt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Serpa Pinto 542",
      "addressLocality": "Porto",
      "postalCode": "4250-464",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.165385053515614, 
      "longitude": -8.620383056522071
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
    "sameAs": [
      "https://web.whatsapp.com/send?phone=351915476601"
    ]
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  const newLatitude = 41.165385053515614;
  const newLongitude = -8.620383056522071;

  const minLat = newLatitude - 0.001;
  const maxLat = newLatitude + 0.001;
  const minLon = newLongitude - 0.001;
  const maxLon = newLongitude + 0.001;
  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`;

  return (
    <>
      <Helmet>
        <title>Contact Serpa Pinto Veterinary Clinic | Schedule Appointment in Porto</title>
        <meta name="description" content="Book online, call, or visit our veterinary clinic in Porto. Easy parking and a friendly team ready to help. Find our location and hours." />
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
                Get in Touch
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              >
                Have a question or need to book an appointment? We're here to help.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">
                  Our Clinic
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                    <MapPin className="w-6 h-6 text-brandDeep flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brandDeep mb-1">Address</p>
                      <p className="text-slate-700">Rua Serpa Pinto 542</p>
                      <p className="text-slate-700">4250-464 Porto, Portugal</p>
                    </div>
                  </div>
                   <div className="flex items-start space-x-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                    <Clock className="w-6 h-6 text-brandDeep flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brandDeep mb-2">Opening Hours</p>
                      <div className="space-y-1 text-slate-700">
                        <p>Monday: 14:00 – 19:00</p>
                        <p>Tuesday – Friday: 10:00 – 13:00 & 14:00 - 19:00</p>
                        <p>Saturday: 10:00 – 13:00</p>
                        <p className="text-slate-500">Closed Sundays and Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>

                 <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] mb-8">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${newLatitude},${newLongitude}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Serpa Pinto Veterinary Clinic Location Map"
                  ></iframe>
                </div>
                 <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${newLatitude},${newLongitude}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg btn-gold-hover" size="lg">
                      <Navigation className="mr-2 w-5 h-5" />
                       <span className="relative z-10">Get Directions</span>
                    </Button>
                  </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="flex items-start space-x-4 mb-6">
                        <Phone className="w-6 h-6 text-brandDeep flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">Phone</p>
                          <a href="tel:+351223239804" className="text-brandDeep hover:text-brandGold text-lg">
                            +351 223 239 804
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 mb-6">
                        <Mail className="w-6 h-6 text-brandDeep flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">Email</p>
                          <a href="mailto:info@vetserpapinto.pt" className="text-brandDeep hover:text-brandGold text-lg">
                            info@vetserpapinto.pt
                          </a>
                        </div>
                      </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brandSoft focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brandSoft focus:border-transparent transition-all resize-none"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg btn-gold-hover"
                      size="lg"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Button>
                  </form>
                   <div className="mt-8 text-center">
                    <p className="text-slate-700 mb-2">For a faster response, chat with us:</p>
                     <a
                    href="https://web.whatsapp.com/send?phone=351915476601&text=Em%20que%20podemos%20ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg btn-gold-hover text-lg px-6">
                      <WhatsAppIconSvg className="mr-2 w-5 h-5 relative z-10" />
                       <span className="relative z-10">Chat on WhatsApp</span>
                    </Button>
                  </a>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;