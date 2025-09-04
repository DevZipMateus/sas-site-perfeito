import React from 'react';
import { Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const PricingSection = () => {
  const plans = [{
    title: 'MEI',
    monthlyPrice: 'R$ 250,00',
    annualPrice: 'R$ 200,00',
    features: ['Emissão de notas fiscais', 'Declaração Anual', 'Acompanhamento básico de tributos', 'Registro de 1 Funcionário', 'Máquina de Cartão com taxas reduzidas', 'Aplicativo para Gestão COMMEI', 'Dashboard e Controle de Caixa', 'Contas a Pagar e Receber', 'Clientes e Fornecedores', 'Produtos e Controle de Estoque'],
    color: 'primary'
  }, {
    title: 'Para Micro Empresas',
    monthlyPrice: 'R$ 650,00',
    annualPrice: 'R$ 550,00',
    features: ['Apuração de impostos', 'Consultoria fiscal mensal', 'Emissão de guias fiscais', 'Folha de pagamento (até 5 funcionários)', 'Sistema PDV para emissão de NFC-e ilimitado', 'Desconto em certificado digital 20%'],
    color: 'secondary'
  }, {
    title: 'Para Empresas Pequenas',
    monthlyPrice: 'R$ 760,00',
    annualPrice: 'R$ 660,00',
    features: ['Sistema PDV com gestão financeira completa', 'Apuração de impostos', 'Consultoria fiscal mensal', 'Emissão de guias fiscais', 'Folha de pagamento (até 5 funcionários)', 'Sistema PDV para emissão de NFC-e ilimitado', 'Desconto em certificado digital 20%'],
    color: 'primary'
  }, {
    title: 'Empresas - Lucro Presumido/Real e 3º Setor',
    monthlyPrice: 'R$ 1.700,00',
    annualPrice: 'R$ 1.518,00',
    features: ['Sistema PDV com gestão financeira completa', 'Apuração de impostos', 'Consultoria fiscal mensal', 'Emissão de guias fiscais', 'Folha de pagamento (até 5 funcionários)', 'Sistema PDV para emissão de NFC-e ilimitado', 'Desconto em certificado digital 20%'],
    color: 'secondary'
  }];
  return <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4 md:mb-6 px-4 sm:px-0">
              Nossos Planos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Escolha o plano ideal para o seu negócio. Oferecemos soluções personalizadas 
              para cada tipo de empresa, desde MEI até empresas de grande porte.
            </p>
          </div>

          {/* Grid de planos */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4 sm:px-0">
            {plans.map((plan, index) => {
            const isPrimary = plan.color === 'primary';
            return <div key={index} className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <h3 className={`text-xl md:text-2xl font-bold font-heading mb-4 md:mb-6 ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                    {plan.title}
                  </h3>
                  
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground text-sm">Contrato mensal:</span>
                        <span className={`font-bold text-lg ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                          {plan.monthlyPrice}/mês
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground text-sm">Contrato anual:</span>
                        <span className={`font-bold text-lg ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                          {plan.annualPrice}/mês
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 md:h-5 md:w-5 ${isPrimary ? 'text-primary' : 'text-secondary'} mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                      </li>)}
                  </ul>
                </div>;
          })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white mx-4 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-heading mb-4 md:mb-6 text-zinc-950">
              Quer Saber Mais Sobre Nossos Planos?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-zinc-950">
              Entre em contato conosco para uma consultoria gratuita e descubra 
              qual plano é o mais adequado para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button onClick={() => window.open('https://wa.me/5562984092737', '_blank')} size="lg" className="btn-hero px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
                <img src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" alt="WhatsApp" className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Solicitar Consultoria
              </Button>
              <Button onClick={() => window.location.href = 'mailto:sas.acontabilidade@gmail.com'} size="lg" variant="outline" className="btn-outline px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;