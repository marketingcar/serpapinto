import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png" 
              alt="Serpa Pinto Veterinary Clinic" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-300 text-sm">
              Excellence and innovation in veterinary care in Porto, Portugal.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-300 hover:text-[#abcdb3] transition-colors text-sm">Services</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-[#abcdb3] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/testimonials" className="text-slate-300 hover:text-[#abcdb3] transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-[#abcdb3] transition-colors text-sm">Contact</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-[#abcdb3] transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span className="text-slate-300">+351 223 239 804</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span className="text-slate-300">info@vetserpapinto.pt</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span className="text-slate-300">Rua Serpa Pinto 542, 4250-464 Porto</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Opening Hours</span>
            <ul className="space-y-2 text-sm text-slate-300">
               <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span>Monday: 14:00–19:00</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <div>
                  <p>Tues–Fri: 10:00–13:00</p>
                  <p className="pl-0">and 14:00–19:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span>Saturday: 10:00–13:00</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 text-[#abcdb3] flex-shrink-0" />
                <span>Closed Sundays & Holidays</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 mb-8">
            <img 
              src="https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/0a33711f5945cc6219770ed673e25321.webp" 
              alt="Pet illustrations strip" 
              className="w-full h-auto"
            />
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Serpa Pinto Veterinary Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;