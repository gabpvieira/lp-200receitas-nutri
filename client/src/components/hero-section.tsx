import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary-green text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-dark-green"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            200 CAFÉS DA MANHÃ<br />
            <span className="text-yellow-300">DE NUTRI (COM SABOR)®</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            200 receitas práticas e nutritivas para começar o dia com energia, saciedade e muito sabor.
          </p>
          <Button 
            onClick={scrollToOffer}
            className="cta-button text-lg mb-12"
            data-testid="button-hero-cta"
          >
            QUERO MEUS CAFÉS DA MANHÃ
          </Button>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <img 
                src="https://nucleosaudavel.com/wp-content/uploads/2025/08/01.webp" 
                alt="Receita de café da manhã saudável" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                data-testid="img-hero-gallery-1"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://nucleosaudavel.com/wp-content/uploads/2025/08/03.webp" 
                alt="Café da manhã nutritivo com frutas" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                data-testid="img-hero-gallery-2"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <img 
                src="https://nucleosaudavel.com/wp-content/uploads/2025/08/02.webp" 
                alt="Variedade de cafés da manhã saudáveis" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                data-testid="img-hero-gallery-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
