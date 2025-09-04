
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo e descrição */}
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/8030153d-c913-4366-bab3-542dc0b8eca8.png" 
                alt="SAS Contabilidade - Logo" 
                className="h-16 w-auto"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                Empresa familiar desde 2014, oferecendo soluções contábeis completas 
                com foco no crescimento saudável do seu negócio.
              </p>
              <p className="text-lg font-medium">
                "SAS CONTABILIDADE, SUA CONTABILIDADE PERTO DE VOCÊ..."
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contato</h3>
              <div className="space-y-4">
                <a 
                  href="tel:62984092737" 
                  className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>(62) 98409-2737</span>
                </a>
                <a 
                  href="mailto:marcelo.meacontabilidade@gmail.com" 
                  className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>marcelo.meacontabilidade@gmail.com</span>
                </a>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>
                    <p>Rua São Jerônimo, qd. 121 lt. 02</p>
                    <p>Jd. Alto Paraiso, CEP: 74.948-520</p>
                    <p>Aparecida de Goiânia - GO</p>
                  </div>
                </div>
                <a 
                  href="https://www.instagram.com/sas.contabilidade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@sas.contabilidade</span>
                </a>
              </div>
            </div>

            {/* Serviços principais */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Principais Serviços</h3>
              <div className="space-y-3">
                <p className="hover:text-white/80 transition-colors cursor-pointer">Abertura de Empresa</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">Contabilidade Gerencial</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">Contabilidade Fiscal</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">Folha de Pagamento</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">Assessoria Tributária</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">BPO Financeiro</p>
                <p className="hover:text-white/80 transition-colors cursor-pointer">Certificados Digitais</p>
              </div>
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-primary-foreground/80 text-center md:text-left">
                <p>© 2024 RM CONSULTORIA SERVIÇOS E VENDAS LTDA. Todos os direitos reservados.</p>
                <p className="text-sm mt-1">CNPJ: Consulte nossos canais de atendimento</p>
              </div>
              <div className="flex space-x-6">
                <a 
                  href="https://wa.me/5562984092737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/sas.contabilidade/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
