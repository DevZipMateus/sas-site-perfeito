
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EgestorERP from '@/components/EgestorERP';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Configuração de meta tags SEO
    document.title = 'SAS Contabilidade - Sua Contabilidade Perto de Você | Aparecida de Goiânia';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SAS Contabilidade em Aparecida de Goiânia/GO. Empresa familiar desde 2014 oferecendo serviços completos de contabilidade, abertura de empresa, folha de pagamento e assessoria tributária.');
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'SAS Contabilidade - Sua Contabilidade Perto de Você | Aparecida de Goiânia');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'SAS Contabilidade em Aparecida de Goiânia/GO. Empresa familiar desde 2014 oferecendo serviços completos de contabilidade, abertura de empresa, folha de pagamento e assessoria tributária.');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', '/lovable-uploads/7b28aa6f-a6a1-4e11-8135-fc96a629cfb8.png');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://www.sascontabilidade.com.br');
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', 'website');
    }

  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EgestorERP />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
