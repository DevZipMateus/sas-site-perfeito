
import React from 'react';
import { Building2, Users, Target, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4 md:mb-6 px-4 sm:px-0">
              Sobre a SAS Contabilidade
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Uma empresa familiar que há mais de uma década constrói relacionamentos sólidos 
              baseados em confiança, competência e dedicação.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Conteúdo principal */}
            <div className="fade-in-left px-4 sm:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                Nossa História e Compromisso
              </h3>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Desde <strong className="text-primary">2014</strong>, a SAS Contabilidade é uma empresa familiar 
                  que se dedica a oferecer soluções contábeis completas para empresas comerciais, 
                  prestadoras de serviços e do 3º Setor.
                </p>
                <p>
                  Nosso escritório está estrategicamente localizado no Jardim Alto Paraíso, 
                  em Aparecida de Goiânia - GO, sempre próximo aos nossos clientes para 
                  oferecer o melhor atendimento personalizado.
                </p>
                <p>
                  Conquistamos a cada dia a <strong className="text-secondary">confiança de nossos clientes</strong> com 
                  propostas e soluções gerenciais focando no crescimento saudável de cada empresa.
                </p>
              </div>
            </div>

            {/* Imagem/Cards de destaque */}
            <div className="fade-in-right px-4 sm:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="service-card p-4 md:p-6 rounded-2xl text-center">
                  <Building2 className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Empresa Familiar</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Valores sólidos e atendimento humanizado</p>
                </div>
                <div className="service-card p-4 md:p-6 rounded-2xl text-center">
                  <Users className="h-10 w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Equipe Especializada</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Profissionais dedicados e experientes</p>
                </div>
                <div className="service-card p-4 md:p-6 rounded-2xl text-center">
                  <Target className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Foco no Cliente</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Soluções personalizadas para cada negócio</p>
                </div>
                <div className="service-card p-4 md:p-6 rounded-2xl text-center">
                  <Award className="h-10 w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 md:mb-4" />
                  <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">Excelência</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Sempre os melhores resultados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nossos diferenciais */}
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl mx-4 sm:mx-0">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6 md:mb-8">
              Nossos Diferenciais
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Building2 className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">Desde a Abertura</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Acompanhamos seu negócio desde a abertura até a implementação 
                  dos processos operacionais mais avançados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">Profissionais Especializados</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Nossa equipe é formada por profissionais altamente qualificados 
                  e dedicados ao sucesso do seu negócio.
                </p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-primary mb-2 md:mb-3">Melhores Resultados</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Nossos clientes têm a certeza de obter sempre os melhores 
                  resultados com nossas soluções personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
