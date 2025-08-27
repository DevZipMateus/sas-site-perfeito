
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barra de contato superior */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a 
              href="tel:62984092737" 
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(62) 98409-2737</span>
            </a>
            <a 
              href="mailto:marcelo.meacontabilidade@gmail.com" 
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>marcelo.meacontabilidade@gmail.com</span>
            </a>
          </div>
          <div className="text-xs opacity-90">
            Rua São Jerônimo, qd. 121 lt. 02, Jd. Alto Paraiso - Aparecida de Goiânia/GO
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4b51bbab-66c5-4a19-872a-16e15622ee7c.png" 
                alt="SAS Contabilidade - Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className={`${isScrolled ? 'btn-primary' : 'btn-hero'} px-6`}
              >
                Fale Conosco
              </Button>
            </nav>

            {/* Menu Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className="btn-primary w-full"
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
