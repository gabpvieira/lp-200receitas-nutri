import { Button } from "@/components/ui/button";
import { Star, Clock, Heart, CheckCircle, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-green via-dark-green to-primary-green text-white relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/95 to-dark-green/95"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Badge de destaque */}
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-8 animate-bounce">
            <Star className="w-4 h-4 mr-2" />
            +5.000 PESSOAS JÁ TRANSFORMARAM SEUS CAFÉS DA MANHÃ
          </div>

          {/* Headline Principal */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fade-in">
            <span className="block text-white">MANUAL DA NUTRI:</span>
            <span className="block text-yellow-300 text-4xl md:text-7xl lg:text-8xl">200 RECEITAS</span>
            <span className="block text-white text-2xl md:text-5xl lg:text-6xl">RÁPIDAS DE CAFÉ DA MANHÃ</span>
          </h1>

          {/* Subtítulo com destaque */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto border border-white/20">
            <p className="text-lg md:text-2xl leading-relaxed font-medium">
              <span className="text-yellow-300 font-bold">200 receitas práticas e nutritivas</span> para começar o dia com 
              <span className="text-yellow-300 font-bold"> energia, saciedade e muito sabor.</span>
            </p>
            
            {/* Benefits highlights */}
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm md:text-base">
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-5 h-5 mr-2 text-yellow-300" />
                <span>Preparos em até 15 min</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Heart className="w-5 h-5 mr-2 text-yellow-300" />
                <span>Baixas calorias e sabor</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-5 h-5 mr-2 text-yellow-300" />
                <span>Criado por nutricionista</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 mb-12 animate-pulse"
            data-testid="button-hero-cta"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            QUERO TRANSFORMAR MEUS CAFÉS DA MANHÃ AGORA
          </Button>

          {/* Image Gallery com títulos */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="group animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/01.webp" 
                  alt="Receita de café da manhã saudável" 
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover mb-4"
                  data-testid="img-hero-gallery-1"
                />
                <h3 className="text-lg font-bold text-yellow-300 mb-2">RECEITAS SAUDÁVEIS</h3>
                <p className="text-sm opacity-90">Opções nutritivas e deliciosas para toda família</p>
              </div>
            </div>
            <div className="group animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/03.webp" 
                  alt="Café da manhã nutritivo com frutas" 
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover mb-4"
                  data-testid="img-hero-gallery-2"
                />
                <h3 className="text-lg font-bold text-yellow-300 mb-2">PREPAROS RÁPIDOS</h3>
                <p className="text-sm opacity-90">Receitas práticas para rotinas corridas</p>
              </div>
            </div>
            <div className="group animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 transform transition-all duration-300 group-hover:scale-105">
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/02.webp" 
                  alt="Variedade de cafés da manhã saudáveis" 
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover mb-4"
                  data-testid="img-hero-gallery-3"
                />
                <h3 className="text-lg font-bold text-yellow-300 mb-2">MUITA VARIEDADE</h3>
                <p className="text-sm opacity-90">200 opções para nunca enjoar das refeições</p>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-lg md:text-xl font-medium mb-4">
              <span className="text-yellow-300">✨ Transforme seus cafés da manhã</span> e comece o dia com muito mais energia e sabor!
            </p>
            <div className="flex items-center justify-center text-sm opacity-80">
              <CheckCircle className="w-4 h-4 mr-2 text-yellow-300" />
              <span>Acesso imediato após a compra</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
