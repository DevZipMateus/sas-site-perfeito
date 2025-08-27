
import React from 'react';
import { 
  Building2, 
  FileText, 
  Calculator, 
  Users, 
  TrendingUp, 
  Banknote,
  UserCheck,
  Shield,
  Monitor,
  FileBarChart,
  Vote,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Abertura de Empresa',
      description: 'Processo completo para abertura do seu negócio com toda documentação necessária e orientação especializada.',
      color: 'primary'
    },
    {
      icon: FileText,
      title: 'Contabilidade Gerencial',
      description: 'Relatórios e análises contábeis para tomada de decisões estratégicas e gestão eficiente do seu negócio.',
      color: 'secondary'
    },
    {
      icon: Calculator,
      title: 'Contabilidade Fiscal',
      description: 'Gestão completa das obrigações fiscais, garantindo conformidade com a legislação tributária vigente.',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Folha de Pagamento',
      description: 'Processamento completo da folha de pagamento, cálculos trabalhistas e gestão de benefícios.',
      color: 'secondary'
    },
    {
      icon: TrendingUp,
      title: 'Assessoria Tributária',
      description: 'Orientação especializada em planejamento tributário e recuperação de créditos fiscais.',
      color: 'primary'
    },
    {
      icon: Banknote,
      title: 'BPO Financeiro',
      description: 'Terceirização completa dos processos financeiros com controle e gestão profissional.',
      color: 'secondary'
    },
    {
      icon: UserCheck,
      title: 'MEI - Microempreendedor',
      description: 'Serviços especializados para MEIs, incluindo regularização e acompanhamento mensal.',
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Certificados Digitais',
      description: 'Emissão e renovação de certificados digitais A1 e A3 para pessoas físicas e jurídicas.',
      color: 'secondary'
    },
    {
      icon: Monitor,
      title: 'Sistema de Gestão @egestor',
      description: 'Implementação do sistema de gestão de vendas para controle completo do seu negócio.',
      color: 'primary'
    },
    {
      icon: FileBarChart,
      title: 'Imposto de Renda',
      description: 'Declaração de Imposto de Renda para pessoas físicas e jurídicas com máxima segurança.',
      color: 'secondary'
    },
    {
      icon: Vote,
      title: 'Contabilidade Eleitoral',
      description: 'Prestação de contas eleitorais para candidatos, partidos e comitês financeiros com total conformidade legal.',
      color: 'primary'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços contábeis e fiscais para atender 
              todas as necessidades do seu negócio com excelência e qualidade.
            </p>
          </div>

          {/* Grid de serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isPrimary = service.color === 'primary';
              
              return (
                <div 
                  key={index}
                  className="service-card p-8 rounded-2xl group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 ${isPrimary ? 'bg-gradient-primary' : 'bg-gradient-secondary'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Precisa de Algum Destes Serviços?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco agora mesmo e descubra como podemos ajudar 
              sua empresa a crescer com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://wa.me/5562984092737', '_blank')}
                size="lg"
                className="btn-hero px-8 py-4 text-lg flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/8edf1f78-0d2a-48d0-9215-136645befd25.png" 
                  alt="WhatsApp" 
                  className="h-5 w-5 mr-2"
                />
                Fale Conosco no WhatsApp
              </Button>
              <Button 
                onClick={() => window.location.href = 'mailto:marcelo.meacontabilidade@gmail.com'}
                size="lg"
                variant="outline"
                className="btn-outline px-8 py-4 text-lg flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
