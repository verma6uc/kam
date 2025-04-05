import { Link } from 'react-router-dom';
import { Helicopter, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-helihop-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Helicopter className="h-8 w-8 text-helihop-gold" />
              <span className="text-xl font-bold text-white font-montserrat">
                Heli<span className="text-helihop-gold">Hop</span>
              </span>
            </Link>
            <p className="text-helihop-light max-w-xs">
              Experience luxury helicopter travel with AI-optimized routes for maximum time savings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-gold transition-colors duration-300">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-helihop-gold mt-0.5" />
                <span className="text-helihop-light">123 Aviation Way, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-helihop-gold" />
                <span className="text-helihop-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-helihop-gold" />
                <span className="text-helihop-light">info@helihop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-helihop-light text-sm">
            &copy; {currentYear} HeliHop. All rights reserved.
          </p>
          <p className="text-helihop-light text-sm mt-2 md:mt-0">
            Designed with ❤️ for luxury aerial travel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
