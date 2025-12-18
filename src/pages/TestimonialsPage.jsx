import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Client Testimonials | Serpa Pinto Veterinary Clinic",
    "description": "Read what our clients say about Serpa Pinto Veterinary Clinic. Discover heartfelt stories and positive experiences from pet owners.",
    "url": "https://your-domain.com/testimonials"
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const testimonials = [
  {
    quote: "The care my cat received for her surgery was exceptional. The team was so compassionate and kept me informed every step of the way.",
    author: "Ana P., Porto",
    rating: 5,
    avatar: "https://generated.vusercontent.net/placeholder.svg"
  },
  {
    quote: "I'm so grateful for the personalized attention my dog gets during his grooming sessions. He always looks and feels amazing!",
    author: "João M., Matosinhos",
    rating: 5,
    avatar: "https://generated.vusercontent.net/placeholder.svg"
  },
  {
    quote: "The preventive care plan for my puppy has been fantastic. He's growing up healthy and strong, and I feel confident in his well-being.",
    author: "Sofia R., Gondomar",
    rating: 5,
    avatar: "https://generated.vusercontent.net/placeholder.svg"
  },
  {
    quote: "Whenever I have a question or concern, the vets are always available and provide clear, helpful advice. Truly a trusted partner in my pet's health.",
    author: "Ricardo G., Vila Nova de Gaia",
    rating: 5,
    avatar: "https://generated.vusercontent.net/placeholder.svg"
  }
];

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Serpa Pinto Veterinary Clinic</title>
        <meta name="description" content="Read what our clients say about Serpa Pinto Veterinary Clinic. Discover heartfelt stories and positive experiences from pet owners." />
        <JsonLd />
      </Helmet>

      <div className="pt-24">
        <section className="bg-brandDeep text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hear From Our Happy Pet Parents
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            >
              The trust and satisfaction of our clients are the greatest rewards.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <Quote className="text-brandDeep w-10 h-10 mb-4 opacity-70" />
                  <p className="text-lg text-slate-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-500" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.avatar} alt={`Avatar of ${testimonial.author}`} />
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Your feedback helps us grow and continue providing the best care for your beloved pets.
              </p>
              <a href="https://g.page/r/CdvjRz7Q_IR7EAE/review" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-brandDeep to-brandSoft text-white shadow-lg btn-gold-hover text-lg px-6">
                  <span className="relative z-10">
                    Write a Review
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

export default TestimonialsPage;