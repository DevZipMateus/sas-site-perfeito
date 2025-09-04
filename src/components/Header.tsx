
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
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 md:gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <a 
              href="tel:62984092737" 
              className="flex items-center gap-1 md:gap-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span>(62) 98409-2737</span>
            </a>
            <a 
              href="mailto:sas.acontabilidade@gmail.com" 
              className="flex items-center gap-1 md:gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">sas.acontabilidade@gmail.com</span>
              <span className="sm:hidden">E-mail</span>
            </a>
          </div>
          <div className="text-xs opacity-90 text-center sm:text-right">
            <span className="hidden lg:inline">Rua São Jerônimo, qd. 121 lt. 02, Jd. Alto Paraiso - Aparecida de Goiânia/GO</span>
            <span className="lg:hidden">Aparecida de Goiânia/GO</span>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/8030153d-c913-4366-bab3-542dc0b8eca8.png" 
                alt="SAS Contabilidade - Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-medium text-primary hover:text-primary/80 transition-colors text-sm xl:text-base"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="font-medium text-primary hover:text-primary/80 transition-colors text-sm xl:text-base"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="font-medium text-primary hover:text-primary/80 transition-colors text-sm xl:text-base"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="font-medium text-primary hover:text-primary/80 transition-colors text-sm xl:text-base"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className="px-4 lg:px-6 py-2 bg-secondary hover:bg-secondary/80 text-white transition-all duration-300 flex items-center text-sm lg:text-base"
              >
                <img 
                  src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                  alt="WhatsApp" 
                  className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2"
                />
                <span className="hidden xl:inline">Fale Conosco</span>
                <span className="xl:hidden">Contato</span>
              </Button>
            </nav>

            {/* Menu Mobile */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary hover:text-primary/80"
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
                className="block w-full text-left text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                className="bg-secondary hover:bg-secondary/80 text-white w-full flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                  alt="WhatsApp" 
                  className="h-4 w-4 mr-2"
                />
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
