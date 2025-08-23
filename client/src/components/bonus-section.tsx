import { Button } from "@/components/ui/button";
import { Gift, CheckCircle, Star, Crown } from "lucide-react";

export default function BonusSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bonuses = [
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/bonus1.webp",
      title: "Guia de Lanches Saudáveis",
      value: "R$29,90",
      description: "Receitas práticas e rápidas para manter a dieta no dia a dia."
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/bonus2.webp",
      title: "Cardápio Semanal Planejado",
      value: "R$19,90",
      description: "Sugestão completa de cardápio para organizar suas refeições."
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/bonus3.webp",
      title: "Lista de Compras Inteligente",
      value: "R$14,90",
      description: "Facilite sua vida no mercado comprando apenas o necessário."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-light-bg to-white section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-green/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with emphasis on FREE */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-6 animate-bounce">
            <Gift className="w-4 h-4 mr-2" />
            OFERTA ESPECIAL LIMITADA
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            <span className="block">Você recebe</span>
            <span className="block text-alert-red text-4xl md:text-6xl">3 BÔNUS EXCLUSIVOS</span>
            <span className="block text-dark-green text-4xl md:text-6xl">TOTALMENTE GRÁTIS!</span>
          </h2>
          
          {/* Value proposition */}
          <div className="bg-gradient-to-r from-alert-red/10 to-orange-500/10 rounded-2xl p-6 max-w-3xl mx-auto border-2 border-alert-red/20 mb-6">
            <p className="text-lg md:text-xl text-text-secondary mb-2">
              Valor total dos bônus:
            </p>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl md:text-3xl text-text-secondary line-through">R$64,70</span>
              <span className="text-4xl md:text-5xl font-black text-dark-green">GRÁTIS</span>
            </div>
            <p className="text-text-secondary">
              Ao adquirir o Cardápio da Nutri hoje, você leva todos esses materiais extras sem pagar nada a mais!
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl recipe-card border-2 border-yellow-400/30 relative"
              data-testid={`bonus-card-${index}`}
            >
              {/* FREE badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-alert-red to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                GRÁTIS
              </div>
              
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-full h-48 object-cover"
                data-testid={`img-bonus-${index}`}
              />
              
              <div className="p-6">
                {/* Value and bonus badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full font-bold text-xs flex items-center">
                    <Crown className="w-3 h-3 mr-1" />
                    BÔNUS #{index + 1}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary line-through">{bonus.value}</div>
                    <div className="text-lg font-bold text-dark-green">GRÁTIS</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">{bonus.title}</h3>
                <p className="text-text-secondary mb-4">{bonus.description}</p>
                
                <div className="flex items-center text-dark-green font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">Incluso na sua compra</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total value emphasis */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border-4 border-yellow-400 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500 mr-2" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Resumo da Oferta</h3>
              <Star className="w-8 h-8 text-yellow-500 ml-2" />
            </div>
            
            <div className="space-y-3 text-lg">
              <div className="flex justify-between items-center">
                <span>Cardápio da Nutri (200 Receitas)</span>
                <span className="font-semibold">R$24,90</span>
              </div>
              <div className="flex justify-between items-center text-dark-green">
                <span>3 Bônus Exclusivos</span>
                <span className="font-bold">GRÁTIS</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total que você paga:</span>
                <span className="text-alert-red">R$24,90</span>
              </div>
              <div className="text-sm text-text-secondary">
                (Economia de R$64,70 nos bônus!)
              </div>
            </div>
          </div>
          
          <Button 
            onClick={scrollToOffer}
            className="cta-button text-lg px-12 py-6"
            data-testid="button-bonus-cta"
          >
            <Gift className="w-6 h-6 mr-3" />
            QUERO TODOS OS BÔNUS GRÁTIS
          </Button>
        </div>
      </div>
    </section>
  );
}
