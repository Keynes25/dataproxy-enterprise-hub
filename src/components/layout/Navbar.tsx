
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Dataproxy</span>
              <span className="text-2xl font-light text-gray-800">Enterprise</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">{t('nav.home')}</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">{t('nav.services')}</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">{t('nav.about')}</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">{t('nav.clients')}</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">{t('nav.contact')}</a>
          </nav>

          {/* Language Switcher and Contact Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-primary-600 hover:bg-primary-700">{t('nav.getStarted')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.clients')}
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <Button className="bg-primary-600 hover:bg-primary-700 w-full mt-2">
                {t('nav.getStarted')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
