import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function NutritionistSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const qualifications = [
    "10+ anos de experiência",
    "Foco em unir saúde e sabor",
    "Mais de 5.000 clientes impactados"
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Conheça a Nutricionista<br />
              <span className="text-primary-green">Maria Aguiar</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Com mais de 10 anos de experiência em nutrição clínica e funcional, 
                Maria Aguiar é especialista em criar receitas que unem saúde e sabor.
              </p>
              <p>
                Seu foco principal é mostrar que comer saudável pode ser prático, 
                gostoso e acessível para toda a família.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-6">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center" data-testid={`qualification-${index}`}>
                    <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="font-medium">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Button 
                onClick={scrollToOffer}
                className="cta-button"
                data-testid="button-nutritionist-cta"
              >
                QUERO AS RECEITAS DA MARIA
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://i.postimg.cc/bw6n6fnp/NUTRI.webp" 
              alt="Nutricionista Maria Aguiar" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              data-testid="img-nutritionist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
