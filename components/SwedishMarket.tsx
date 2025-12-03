import React from 'react';
import SectionHeading from './SectionHeading';
import { Target, TrendingUp, Globe2, Users, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Lokal SEO för Sverige",
    description: "Vi rankar ditt företag #1 på Google.se för lokala sökord i Stockholm, Göteborg, Malmö och hela Sverige."
  },
  {
    icon: TrendingUp,
    title: "E-handelsexpertis",
    description: "Specialister på Shopify, Magento och WooCommerce med svensk betalningsintegration och Klarna."
  },
  {
    icon: Globe2,
    title: "Svensk Marknadskunskap",
    description: "Vi förstår svenska konsumenter och bygger strategier som konverterar på den nordiska marknaden."
  },
  {
    icon: Users,
    title: "Bilingual Content",
    description: "Professionellt innehåll på både svenska och engelska som når hela den svenska målgruppen."
  },
  {
    icon: Zap,
    title: "Snabba Resultat",
    description: "Genomförande av SEO och digital marknadsföring som ger mätbara resultat inom 90 dagar."
  },
  {
    icon: Award,
    title: "Svensk GDPR Kompatibilitet",
    description: "Alla våra lösningar är 100% GDPR-kompatibla och anpassade för svenska lagkrav."
  }
];

const SwedishMarket: React.FC = () => {
  return (
    <section id="swedish-market" className="py-24 bg-gradient-to-br from-eco-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-eco-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              🇸🇪 Svensk Digital Marknad
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-6">
            Varför Välja Oss för den Svenska Marknaden?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Med 98.3% internetpenetration och 81.4% sociala medier-användare i Sverige (2025),
            är digital närvaro avgörande. Vi hjälper svenska företag att dominera online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-eco-100"
            >
              <div className="w-12 h-12 bg-eco-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-eco-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">340%</div>
              <div className="text-sm text-slate-600">Genomsnittlig ökning av organisk trafik</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">150+</div>
              <div className="text-sm text-slate-600">Svenska företag hjälpta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">4.9★</div>
              <div className="text-sm text-slate-600">Kundbetyg på Google</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-eco-600 mb-2">24h</div>
              <div className="text-sm text-slate-600">Responsgaranti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwedishMarket;