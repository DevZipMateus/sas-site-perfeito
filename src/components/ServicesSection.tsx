import React from 'react';
import { Building2, FileText, Calculator, Users, TrendingUp, Banknote, UserCheck, Shield, Monitor, FileBarChart, Vote, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ServicesSection = () => {
  const services = [{
    icon: Building2,
    title: 'Abertura de Empresa',
    description: 'Processo completo para abertura do seu negócio com toda documentação necessária e orientação especializada.',
    color: 'primary'
  }, {
    icon: FileText,
    title: 'Contabilidade Gerencial',
    description: 'Relatórios e análises contábeis para tomada de decisões estratégicas e gestão eficiente do seu negócio.',
    color: 'secondary'
  }, {
    icon: Calculator,
    title: 'Contabilidade Fiscal',
    description: 'Gestão completa das obrigações fiscais, garantindo conformidade com a legislação tributária vigente.',
    color: 'primary'
  }, {
    icon: Users,
    title: 'Folha de Pagamento',
    description: 'Processamento completo da folha de pagamento, cálculos trabalhistas e gestão de benefícios.',
    color: 'secondary'
  }, {
    icon: TrendingUp,
    title: 'Assessoria Tributária',
    description: 'Orientação especializada em planejamento tributário e recuperação de créditos fiscais.',
    color: 'primary'
  }, {
    icon: Banknote,
    title: 'BPO Financeiro',
    description: 'Terceirização completa dos processos financeiros com controle e gestão profissional.',
    color: 'secondary'
  }, {
    icon: UserCheck,
    title: 'MEI - Microempreendedor',
    description: 'Serviços especializados para MEIs, incluindo regularização e acompanhamento mensal.',
    color: 'primary'
  }, {
    icon: Shield,
    title: 'Certificados Digitais',
    description: 'Emissão e renovação de certificados digitais A1 e A3 para pessoas físicas e jurídicas.',
    color: 'secondary'
  }, {
    icon: Monitor,
    title: 'Sistema de Gestão @egestor',
    description: 'Implementação do sistema de gestão de vendas para controle completo do seu negócio.',
    color: 'primary'
  }, {
    icon: FileBarChart,
    title: 'Imposto de Renda',
    description: 'Declaração de Imposto de Renda para pessoas físicas e jurídicas com máxima segurança.',
    color: 'secondary'
  }, {
    icon: Vote,
    title: 'Contabilidade Eleitoral',
    description: 'Prestação de contas eleitorais para candidatos, partidos e comitês financeiros com total conformidade legal.',
    color: 'primary'
  }];
  return <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4 md:mb-6 px-4 sm:px-0">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Oferecemos uma ampla gama de serviços contábeis e fiscais para atender 
              todas as necessidades do seu negócio com excelência e qualidade.
            </p>
          </div>

          {/* Grid de serviços */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 px-4 sm:px-0">
            {services.map((service, index) => {
            const Icon = service.icon;
            const isPrimary = service.color === 'primary';
            return <div key={index} className="service-card p-6 md:p-8 rounded-2xl group" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4 group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>;
          })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white mx-4 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold font-heading mb-4 md:mb-6 text-slate-950">
              Precisa de Algum Destes Serviços?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-zinc-950">
              Entre em contato conosco agora mesmo e descubra como podemos ajudar 
              sua empresa a crescer com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button onClick={() => window.open('https://wa.me/5562984092737', '_blank')} size="lg" className="btn-hero px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
                <img src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" alt="WhatsApp" className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Fale Conosco no WhatsApp
              </Button>
              <Button onClick={() => window.location.href = 'mailto:marcelo.meacontabilidade@gmail.com'} size="lg" variant="outline" className="btn-outline px-6 py-3 md:px-8 md:py-4 text-base md:text-lg flex items-center justify-center w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;