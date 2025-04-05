import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Helicopter, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-300 ${
      isActive
        ? 'text-helihop-blue'
        : 'text-helihop-dark hover:text-helihop-blue'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Helicopter className="h-8 w-8 text-helihop-blue" />
          <span className="text-xl font-bold text-helihop-dark font-montserrat">
            Heli<span className="text-helihop-blue">Hop</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/book-now" className={navLinkClasses}>
            Book Now
          </NavLink>
          <NavLink to="/how-it-works" className={navLinkClasses}>
            How It Works
          </NavLink>
          <NavLink to="/membership" className={navLinkClasses}>
            Membership
          </NavLink>
          <Link to="/book-now" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-helihop-dark hover:text-helihop-blue"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-helihop-light">
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/book-now"
              className={navLinkClasses}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={navLinkClasses}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/membership"
              className={navLinkClasses}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Membership
            </NavLink>
            <Link
              to="/book-now"
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
