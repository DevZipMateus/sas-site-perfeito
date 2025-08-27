import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você! Entre em contato e descubra como 
              podemos ajudar sua empresa a alcançar o sucesso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-primary mb-8">
                Fale Conosco
              </h3>

              {/* Cartões de contato */}
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5562984092737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-card p-6 rounded-2xl flex items-center space-x-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                      alt="WhatsApp" 
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Telefone/WhatsApp</h4>
                    <p className="text-muted-foreground">(62) 98409-2737</p>
                  </div>
                </a>

                <a 
                  href="mailto:marcelo.meacontabilidade@gmail.com" 
                  className="service-card p-6 rounded-2xl flex items-center space-x-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">E-mail</h4>
                    <p className="text-muted-foreground">marcelo.meacontabilidade@gmail.com</p>
                  </div>
                </a>

                <div className="service-card p-6 rounded-2xl flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua São Jerônimo, qd. 121 lt. 02<br />
                      Jd. Alto Paraiso, CEP: 74.948-520<br />
                      Aparecida de Goiânia - GO
                    </p>
                  </div>
                </div>

                <a 
                  href="https://www.instagram.com/sas.contabilidade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-card p-6 rounded-2xl flex items-center space-x-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Instagram</h4>
                    <p className="text-muted-foreground">@sas.contabilidade</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                Pronto para Começar?
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground text-center">
                  Entre em contato agora mesmo e receba uma consultoria personalizada 
                  para as necessidades específicas da sua empresa.
                </p>

                <div className="space-y-4">
                  <Button 
                    onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                    size="lg"
                    className="btn-primary w-full py-4 text-lg group flex items-center justify-center"
                  >
                    <img 
                      src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                      alt="WhatsApp" 
                      className="h-5 w-5 mr-3"
                    />
                    Falar no WhatsApp
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button 
                    onClick={() => window.location.href = 'mailto:marcelo.meacontabilidade@gmail.com'}
                    size="lg"
                    variant="outline"
                    className="btn-outline w-full py-4 text-lg"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Enviar E-mail
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 text-center">
                    Por que escolher a SAS Contabilidade?
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Atendimento personalizado
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Empresa familiar
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      10+ anos de experiência
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      Equipe especializada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
