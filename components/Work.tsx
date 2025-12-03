import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const projects = [
  {
    id: 1,
    title: "Svensk Möbel AB",
    category: "E-handel / SEO / Shopify",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    stats: "+340% Organisk Trafik"
  },
  {
    id: 2,
    title: "Stockholm Fashion Week",
    category: "Branding / Digital Marknadsföring",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    stats: "2.5M Sociala Medier Räckvidd"
  },
  {
    id: 3,
    title: "Nordic Tech Startup",
    category: "Webbutveckling / PPC",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    stats: "450% Konverteringsökning"
  },
  {
    id: 4,
    title: "Göteborg E-handel",
    category: "Magento / SEO Optimering",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    stats: "Top 3 Google Ranking"
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-8 md:mb-0 text-center md:text-left w-full md:w-auto">
             <span className="uppercase tracking-widest text-sm font-semibold mb-2 block text-eco-600">Svenska Case Studies</span>
             <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900">Resultat för Svenska Företag</h2>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">Se Alla Projekt</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-eco-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.stats}
                </div>
              </div>
              <div>
                <span className="text-eco-600 text-sm font-semibold tracking-wider uppercase">{project.category}</span>
                <h3 className="text-2xl font-serif text-slate-900 mt-1 group-hover:text-eco-700 transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">Se Alla Projekt</Button>
        </div>
      </div>
    </section>
  );
};

export default Work;