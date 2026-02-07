"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavigationIsland() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const sections = ['hero', 'que-es', 'experiencia', 'boletos'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Pequeño delay para asegurar que el DOM esté completamente renderizado
    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    // Fallback: detectar por scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mounted]);

  const navLinks = [
    { href: '/', label: 'Caribe-IA', id: 'hero', isLogo: true },
    { href: '#que-es', label: '¿Qué es Barranqui-IA?', id: 'que-es' },
    { href: '#experiencia', label: 'Experiencia', id: 'experiencia' },
    { href: '#boletos', label: 'Boletos', id: 'boletos' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="z-[9999] fixed top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-4 md:px-8 py-4" style={{ willChange: 'transform' }}>
        {/* Wrapper with animated gradient border */}
        <div
          className="relative rounded-full p-[2px] animate-gradient-border"
          style={{
            background:
              'linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #8b5cf6, #a855f7)',
            backgroundSize: '300% 300%',
          }}
        >
          {/* Navigation container with glassmorphism - transparent background with blur */}
          <div className="relative flex items-center space-x-4 md:space-x-8 px-4 md:px-8 py-3 md:py-4 rounded-full bg-black/90 backdrop-blur-2xl backdrop-saturate-150">
            {/* Logo - siempre visible */}
            <Link
              href="/"
              className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              Caribe-IA
            </Link>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.slice(1).map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`relative text-sm md:text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-glow-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[9998] w-[90%] max-w-sm">
          <div className="relative rounded-2xl p-[2px] animate-gradient-border" style={{
            background: 'linear-gradient(45deg, #a855f7, #ec4899, #3b82f6, #8b5cf6, #a855f7)',
            backgroundSize: '300% 300%',
          }}>
            <div className="bg-black/95 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl p-4">
              {navLinks.slice(1).map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 text-base font-medium transition-all duration-300 rounded-lg mb-2 last:mb-0 ${
                      isActive
                        ? 'text-white bg-purple-500/20 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9997] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}