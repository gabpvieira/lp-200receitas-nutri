import { Button } from "@/components/ui/button";
import { Clock, FileText, Users, Zap, CheckCircle } from "lucide-react";

export default function AdvantagesSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const advantages = [
    {
      icon: Clock,
      title: "Economia de tempo"
    },
    {
      icon: FileText,
      title: "Variedade de opções"
    },
    {
      icon: Users,
      title: "Aprovação da família"
    },
    {
      icon: Zap,
      title: "Energia e disposição"
    },
    {
      icon: CheckCircle,
      title: "Feito por nutricionista"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            O que você vai ganhar com esse cardápio?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center p-6"
              data-testid={`advantage-item-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-dark-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <advantage.icon className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{advantage.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            className="cta-button"
            data-testid="button-advantages-cta"
          >
            QUERO TODAS ESSAS VANTAGENS
          </Button>
        </div>
      </div>
    </section>
  );
}
