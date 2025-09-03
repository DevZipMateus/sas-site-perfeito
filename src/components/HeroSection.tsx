
import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/574643db-9848-4372-bf94-11192e9d0f3e.png')`
        }}
      ></div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-10 md:top-20 right-5 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 fade-in-up">
            <Shield className="h-3 w-3 md:h-4 md:w-4 mr-2" />
            Empresa familiar desde 2014
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 md:mb-6 fade-in-up px-2 sm:px-0" style={{
            animationDelay: '0.2s'
          }}>
            SAS CONTABILIDADE
          </h1>
          
          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 md:mb-8 text-white/90 fade-in-up px-4 sm:px-0" style={{
            animationDelay: '0.4s'
          }}>
            Sua contabilidade perto de você...
          </p>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 text-white/80 leading-relaxed fade-in-up px-4 sm:px-0" style={{
            animationDelay: '0.6s'
          }}>
            Conquiste a tranquilidade que seu negócio merece com soluções contábeis completas e personalizadas. 
            Desde 2014 cuidando do crescimento saudável da sua empresa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 fade-in-up px-4 sm:px-0" style={{
            animationDelay: '0.8s'
          }}>
            <Button onClick={() => window.open('https://wa.me/5562984092737', '_blank')} size="lg" className="btn-hero group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
              <img 
                src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                alt="WhatsApp" 
                className="h-4 w-4 md:h-5 md:w-5 mr-2"
              />
              Fale Conosco Agora
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => scrollToSection('servicos')} size="lg" variant="outline" className="btn-outline px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto">
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto fade-in-up px-4 sm:px-0" style={{
            animationDelay: '1s'
          }}>
            <div className="glass-card p-4 md:p-6 rounded-2xl bg-gray-950">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-white mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">10+</div>
              <div className="text-white/80 text-sm md:text-base">Anos de Experiência</div>
            </div>
            <div className="glass-card p-4 md:p-6 rounded-2xl bg-gray-950">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-white mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Conformidade Fiscal</div>
            </div>
            <div className="glass-card p-4 md:p-6 rounded-2xl bg-gray-950">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">24h</div>
              <div className="text-white/80 text-sm md:text-base">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
