import { Button } from "@/components/ui/button";

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
      description: "Receitas práticas e rápidas para manter a dieta no dia a dia."
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/bonus2.webp",
      title: "Cardápio Semanal Planejado",
      description: "Sugestão completa de cardápio para organizar suas refeições."
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/bonus3.webp",
      title: "Lista de Compras Inteligente",
      description: "Facilite sua vida no mercado comprando apenas o necessário."
    }
  ];

  return (
    <section className="bg-light-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Bônus Exclusivos para Você
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ao adquirir o Cardápio da Nutri, você ainda recebe materiais extras para potencializar seus resultados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg recipe-card"
              data-testid={`bonus-card-${index}`}
            >
              <img 
                src={bonus.image} 
                alt={bonus.title} 
                className="w-full h-48 object-cover"
                data-testid={`img-bonus-${index}`}
              />
              <div className="p-6">
                <div className="w-12 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white">BÔNUS</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{bonus.title}</h3>
                <p className="text-text-secondary">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            className="cta-button"
            data-testid="button-bonus-cta"
          >
            QUERO TODOS OS BÔNUS
          </Button>
        </div>
      </div>
    </section>
  );
}
