import { Button } from "@/components/ui/button";
import { Check, FileText, Heart, Clock, ShoppingCart, Users } from "lucide-react";

export default function BenefitsSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Check,
      title: "Criado por nutricionista",
      description: "Receitas desenvolvidas por profissional qualificada"
    },
    {
      icon: FileText,
      title: "Mais de 200 opções saudáveis",
      description: "Variedade para nunca enjoar das refeições"
    },
    {
      icon: Heart,
      title: "Baixas calorias e sabor de verdade",
      description: "Saudável sem abrir mão do prazer"
    },
    {
      icon: Clock,
      title: "Preparos em menos de 15 min",
      description: "Perfeito para rotinas corridas"
    },
    {
      icon: ShoppingCart,
      title: "Ingredientes simples e acessíveis",
      description: "Encontra tudo no mercado do bairro"
    },
    {
      icon: Users,
      title: "Perfeito para toda família",
      description: "Receitas que agradam crianças e adultos"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Por que esse cardápio é diferente?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 animate-slide-up" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              data-testid={`benefit-item-${index}`}
            >
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            className="cta-button"
            data-testid="button-benefits-cta"
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
