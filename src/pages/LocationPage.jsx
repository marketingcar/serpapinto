import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationPage = () => {
  return (
    <>
      <Helmet>
        <title>Visit Our Clinic | Vet Serpa Pinto Location in Porto</title>
        <meta name="description" content="Find Vet Serpa Pinto veterinary clinic in Porto. Easy parking, convenient location, and friendly team ready to help." />
      </Helmet>

      <div className="pt-20">
        <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Visit Vet Serpa Pinto in Porto
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                You'll find us in a convenient, easy-to-access location in Boavista / Porto with nearby parking and public transportation.
              </p>
            </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Address</p>
                      <p className="text-slate-700">Rua Serpa Pinto 542</p>
                      <p className="text-slate-700">4250-464 Porto</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <a href="tel:+351223239804" className="text-emerald-600 hover:text-emerald-700">
                        +351 223 239 804
                      </a>
                      <p className="text-sm text-slate-500 mt-1">Call to national landline</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <a href="mailto:info@vetserpapinto.pt" className="text-emerald-600 hover:text-emerald-700">
                        info@vetserpapinto.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                    <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Opening Hours</p>
                      <div className="space-y-1 text-slate-700">
                        <p>Monday – Friday: 9:00 – 19:00</p>
                        <p>Saturday: 9:00 – 13:00</p>
                        <p className="text-slate-500">Closed Sundays and Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Serpa+Pinto+542,+4250-464+Porto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg">
                      <Navigation className="mr-2 w-5 h-5" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-8.6350%2C41.1580%2C-8.6250%2C41.1630&layer=mapnik&marker=41.1605,-8.6300"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '600px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vet Serpa Pinto Location Map"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Parking Information
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                We understand that convenient parking is important when visiting with your pet. Our clinic is located in an area with nearby street parking and public parking facilities.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 max-w-2xl mx-auto">
                <p className="text-slate-700">
                  For detailed parking information and recommendations, please contact us or check local parking availability near Rua Serpa Pinto 542.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationPage;