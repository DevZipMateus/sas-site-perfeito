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
  return <section id="home" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 fade-in-up">
            <Shield className="h-4 w-4 mr-2" />
            Empresa familiar desde 2014
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            SAS CONTABILIDADE
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl font-medium mb-8 text-white/90 fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            Sua contabilidade perto de você...
          </p>

          {/* Descrição */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            Conquiste a tranquilidade que seu negócio merece com soluções contábeis completas e personalizadas. 
            Desde 2014 cuidando do crescimento saudável da sua empresa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button onClick={() => window.open('https://wa.me/5562984092737', '_blank')} size="lg" className="btn-hero group px-8 py-4 text-lg">
              Fale Conosco Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => scrollToSection('servicos')} size="lg" variant="outline" className="btn-outline px-8 py-4 text-lg">
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up" style={{
          animationDelay: '1s'
        }}>
            <div className="glass-card p-6 rounded-2xl bg-gray-950">
              <Users className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-gray-950">
              <Shield className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Conformidade Fiscal</div>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-gray-950">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;