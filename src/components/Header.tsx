
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
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
          <div className="text-xs opacity-90 text-center sm:text-right">
            Rua São Jerônimo, qd. 121 lt. 02, Jd. Alto Paraiso - Aparecida de Goiânia/GO
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-primary'
      }`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/7b28aa6f-a6a1-4e11-8135-fc96a629cfb8.png" 
                alt="SAS Contabilidade - Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
                }`}
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
                }`}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
                }`}
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className={`px-6 ${
                  isScrolled 
                    ? 'bg-secondary hover:bg-secondary-light text-white' 
                    : 'bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm'
                } transition-all duration-300`}
              >
                Fale Conosco
              </Button>
            </nav>

            {/* Menu Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className={`lg:hidden ${
                isScrolled ? 'text-primary hover:text-primary-light' : 'text-white hover:text-white/80'
              }`}
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
                className="block w-full text-left text-primary hover:text-primary-light transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-primary hover:text-primary-light transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className="bg-secondary hover:bg-secondary-light text-white w-full"
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
