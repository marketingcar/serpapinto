import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your opening hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our clinic is open Monday from 14:00 to 19:00, Tuesday to Friday from 10:00 to 13:00 and 14:00 to 19:00, and Saturday from 10:00 to 13:00. We are closed on Sundays and public holidays."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we operate by appointment to ensure each pet receives the time and attention they deserve. You can book an appointment through our Digitail app, by phone, or via our website."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do in an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For emergencies during our opening hours, please call us immediately at +351 223 239 804 so we can prepare for your arrival. For after-hours emergencies, please contact the nearest 24-hour veterinary hospital."
        }
      },
      {
        "@type": "Question",
        "name": "What types of animals do you treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily treat dogs and cats. If you have another type of pet, please contact us to see if we can accommodate their needs."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash, debit cards, and major credit cards."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at Rua Serpa Pinto 542, 4250-464 Porto, Portugal. There is street parking available nearby."
        }
      }
    ]
  };
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-brandDeep" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "Our clinic is open Monday from 14:00 to 19:00, Tuesday to Friday from 10:00 to 13:00 and 14:00 to 19:00, and Saturday from 10:00 to 13:00. We are closed on Sundays and public holidays.",
    },
    {
      question: "Do I need to book an appointment?",
      answer: "Yes, we operate by appointment to ensure each pet receives the time and attention they deserve. You can book an appointment through our Digitail app, by phone, or via our website.",
    },
    {
      question: "What should I do in an emergency?",
      answer: "For emergencies during our opening hours, please call us immediately at +351 223 239 804 so we can prepare for your arrival. For after-hours emergencies, please contact the nearest 24-hour veterinary hospital.",
    },
    {
      question: "What types of animals do you treat?",
      answer: "We primarily treat dogs and cats. If you have another type of pet, please contact us to see if we can accommodate their needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, debit cards, and major credit cards.",
    },
    {
      question: "Where is the clinic located?",
      answer: "We are located at Rua Serpa Pinto 542, 4250-464 Porto, Portugal. There is street parking available nearby.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | Serpa Pinto Veterinary Clinic</title>
        <meta name="description" content="Find answers to frequently asked questions about our veterinary services, appointments, hours, and more." />
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
              >
                <HelpCircle className="w-12 h-12" />
                Frequently Asked Questions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              >
                Have a question? We’ve compiled answers to some common inquiries below.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FaqPage;