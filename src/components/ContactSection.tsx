import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ContactSection = () => {
  return <section id="contato" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4 md:mb-6 px-4 sm:px-0">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Estamos prontos para atender você! Entre em contato e descubra como 
              podemos ajudar sua empresa a alcançar o sucesso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-0">
            {/* Informações de contato */}
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">
                Fale Conosco
              </h3>

              {/* Cartões de contato */}
              <div className="space-y-4 md:space-y-6">
                <a href="https://wa.me/5562984092737" target="_blank" rel="noopener noreferrer" className="service-card p-4 md:p-6 rounded-2xl flex items-center space-x-3 md:space-x-4 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <img src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" alt="WhatsApp" className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-1 md:mb-2">Telefone/WhatsApp</h4>
                    <p className="text-muted-foreground text-sm md:text-base">(62) 98409-2737</p>
                  </div>
                </a>

                <a href="mailto:sas.acontabilidade@gmail.com" className="service-card p-4 md:p-6 rounded-2xl flex items-center space-x-3 md:space-x-4 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center bg-zinc-950 flex-shrink-0">
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-1 md:mb-2">E-mail</h4>
                    <p className="text-muted-foreground text-sm md:text-base break-all">sas.acontabilidade@gmail.com</p>
                  </div>
                </a>

                <div className="service-card p-4 md:p-6 rounded-2xl flex items-start space-x-3 md:space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center bg-neutral-400 flex-shrink-0">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-1 md:mb-2">Endereço</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Rua São Jerônimo, qd. 121 lt. 02<br />
                      Jd. Alto Paraiso, CEP: 74.948-520<br />
                      Aparecida de Goiânia - GO
                    </p>
                  </div>
                </div>

                <a href="https://www.instagram.com/sas.contabilidade/" target="_blank" rel="noopener noreferrer" className="service-card p-4 md:p-6 rounded-2xl flex items-center space-x-3 md:space-x-4 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center bg-red-400 flex-shrink-0">
                    <Instagram className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-primary mb-1 md:mb-2">Instagram</h4>
                    <p className="text-muted-foreground text-sm md:text-base">@sas.contabilidade</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6 text-center">
                Pronto para Começar?
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-muted-foreground text-center">
                  Entre em contato agora mesmo e receba uma consultoria personalizada 
                  para as necessidades específicas da sua empresa.
                </p>

                <div className="space-y-3 md:space-y-4">
                  <Button onClick={() => window.open('https://wa.me/5562984092737', '_blank')} size="lg" className="btn-primary w-full py-3 md:py-4 text-base md:text-lg group flex items-center justify-center">
                    <img src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" alt="WhatsApp" className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    Falar no WhatsApp
                    <Send className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button onClick={() => window.location.href = 'mailto:sas.acontabilidade@gmail.com'} size="lg" variant="outline" className="btn-outline w-full py-3 md:py-4 text-base md:text-lg">
                    <Mail className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" />
                    Enviar E-mail
                  </Button>
                </div>

                <div className="border-t pt-4 md:pt-6">
                  <h4 className="text-base md:text-lg font-semibold text-primary mb-3 md:mb-4 text-center">
                    Por que escolher a SAS Contabilidade?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 md:mr-3"></div>
                      Atendimento personalizado
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2 md:mr-3"></div>
                      Empresa familiar
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 md:mr-3"></div>
                      10+ anos de experiência
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2 md:mr-3"></div>
                      Equipe especializada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;