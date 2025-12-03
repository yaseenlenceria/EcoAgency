import React from 'react';
import SectionHeading from './SectionHeading';
import { Layout, Cpu, Globe, Search, BarChart3, PenTool } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "SEO-optimering Sverige",
    description: "Ledande SEO-byrå i Stockholm. Vi rankar ditt företag högst på Google för svenska sökord. Teknisk SEO, lokal SEO och e-handelsSEO."
  },
  {
    icon: Layout,
    title: "Webbutveckling & Webbdesign",
    description: "Responsive webbplatser för svenska företag. Specialister på Shopify, Magento, och WordPress. Mobilanpassat med svensk UX."
  },
  {
    icon: Globe,
    title: "E-handelslösningar",
    description: "Komplett e-handelsutveckling för svenska marknaden. Shopify SEO, konverteringsoptimering och svensk betalningsintegration."
  },
  {
    icon: BarChart3,
    title: "Digital Marknadsföring",
    description: "Performance marketing och PPC annonsering i Sverige. Facebook Ads, Instagram Ads och Google Ads med svensk expertis."
  },
  {
    icon: PenTool,
    title: "Social Media Management",
    description: "Hantering av sociala medier för svenska företag. Content creation, community management och annonsering på svenska."
  },
  {
    icon: Cpu,
    title: "Branding & Varumärkesbyggande",
    description: "Grafisk design och branding för svenska företag. Logotyp, profilmaterial och varumärkesstrategi som converterar."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Våra Tjänster" title="Digital Marknadsföring & SEO för Svenska Företag" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-eco-100/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-eco-600 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-eco-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;