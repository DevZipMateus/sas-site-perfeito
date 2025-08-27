
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      title: 'MEI',
      features: [
        'Emissão de notas fiscais',
        'Declaração Anual',
        'Acompanhamento básico de tributos',
        'Registro de 1 Funcionário',
        'Máquina de Cartão com taxas reduzidas',
        'Aplicativo para Gestão COMMEI',
        'Dashboard e Controle de Caixa',
        'Contas a Pagar e Receber',
        'Clientes e Fornecedores',
        'Produtos e Controle de Estoque'
      ],
      color: 'primary'
    },
    {
      title: 'Para Micro Empresas',
      features: [
        'Apuração de impostos',
        'Consultoria fiscal mensal',
        'Emissão de guias fiscais',
        'Folha de pagamento (até 5 funcionários)',
        'Sistema PDV para emissão de NFC-e ilimitado',
        'Desconto em certificado digital 20%'
      ],
      color: 'secondary'
    },
    {
      title: 'Para Empresas Pequenas',
      features: [
        'Sistema PDV com gestão financeira completa',
        'Apuração de impostos',
        'Consultoria fiscal mensal',
        'Emissão de guias fiscais',
        'Folha de pagamento (até 5 funcionários)',
        'Sistema PDV para emissão de NFC-e ilimitado',
        'Desconto em certificado digital 20%'
      ],
      color: 'primary'
    },
    {
      title: 'Empresas - Lucro Presumido/Real e 3º Setor',
      features: [
        'Sistema PDV com gestão financeira completa',
        'Apuração de impostos',
        'Consultoria fiscal mensal',
        'Emissão de guias fiscais',
        'Folha de pagamento (até 5 funcionários)',
        'Sistema PDV para emissão de NFC-e ilimitado',
        'Desconto em certificado digital 20%'
      ],
      color: 'secondary'
    }
  ];

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Nossos Planos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o plano ideal para o seu negócio. Oferecemos soluções personalizadas 
              para cada tipo de empresa, desde MEI até empresas de grande porte.
            </p>
          </div>

          {/* Grid de planos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => {
              const isPrimary = plan.color === 'primary';
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={`text-2xl font-bold font-heading mb-8 ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                    {plan.title}
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 ${isPrimary ? 'text-primary' : 'text-secondary'} mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Quer Saber Mais Sobre Nossos Planos?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consultoria gratuita e descubra 
              qual plano é o mais adequado para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                size="lg"
                className="btn-hero px-8 py-4 text-lg"
              >
                Solicitar Consultoria
              </Button>
              <Button 
                onClick={() => window.location.href = 'mailto:marcelo.meacontabilidade@gmail.com'}
                size="lg"
                variant="outline"
                className="btn-outline px-8 py-4 text-lg"
              >
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
