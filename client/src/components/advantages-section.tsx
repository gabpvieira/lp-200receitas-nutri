import { Button } from "@/components/ui/button";
import { Clock, FileText, Users, Zap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

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
      title: "Economia de tempo",
      description: "Preparos rápidos de até 15 minutos para sua rotina corrida",
      highlight: "⏰ Até 15 min"
    },
    {
      icon: FileText,
      title: "Variedade de opções",
      description: "200 receitas diferentes para nunca enjoar das refeições",
      highlight: "📚 200 opções"
    },
    {
      icon: Users,
      title: "Aprovação da família",
      description: "Receitas saborosas que agradam crianças e adultos",
      highlight: "👨‍👩‍👧‍👦 Família toda"
    },
    {
      icon: Zap,
      title: "Energia e disposição",
      description: "Comece o dia com mais energia e saciedade duradoura",
      highlight: "⚡ Mais energia"
    },
    {
      icon: CheckCircle,
      title: "Feito por nutricionista",
      description: "Todas as receitas desenvolvidas por profissional qualificada",
      highlight: "👩‍⚕️ Profissional"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-light-bg to-white section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-primary-green to-dark-green text-white px-6 py-2 rounded-full font-bold text-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            BENEFÍCIOS EXCLUSIVOS
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            <span className="block">O que você vai</span>
            <span className="block text-primary-green">GANHAR</span>
            <span className="block">com esse cardápio?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Transforme seus cafés da manhã e conquiste uma rotina mais saudável e prática
          </p>
        </div>
        
        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-green/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              data-testid={`advantage-item-${index}`}
            >
              {/* Background gradient effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-green/10 to-transparent rounded-bl-3xl"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-dark-green rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              
              {/* Highlight badge */}
              <div className="inline-block bg-yellow-400/20 text-primary-green px-3 py-1 rounded-full text-sm font-medium mb-3">
                {advantage.highlight}
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-green transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {advantage.description}
              </p>
              
              {/* Arrow indicator */}
              <div className="flex items-center text-primary-green font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm mr-2">Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
          
          {/* Special highlight card */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary-green to-dark-green rounded-3xl p-6 md:p-8 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  🎯 Resultado Garantido
                </h3>
                <p className="text-lg opacity-90">
                  Mais de 5.000 pessoas já transformaram seus cafés da manhã com nosso método
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">
                  +5.000
                </div>
                <div className="text-sm opacity-80">
                  Clientes satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto mb-8 border-2 border-primary-green/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Pronto para transformar seus cafés da manhã?
            </h3>
            <p className="text-text-secondary mb-6">
              Junte-se às milhares de pessoas que já conquistaram uma rotina mais saudável e saborosa
            </p>
            
            <Button 
              onClick={scrollToOffer}
              className="cta-button text-lg md:text-xl px-12 py-6"
              data-testid="button-advantages-cta"
            >
              <Zap className="w-6 h-6 mr-3" />
              SIM, QUERO TODAS ESSAS VANTAGENS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
