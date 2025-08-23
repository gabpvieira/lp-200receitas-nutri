import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Star, Clock, Crown, Zap } from "lucide-react";

export default function OfferSection() {
  const handlePurchase = () => {
    window.open('https://nucleosaudavel.pay.yampi.com.br/r/Q4S7ZK1U0Q', '_blank');
  };

  return (
    <section id="oferta" className="bg-primary-green py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-dark-green"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-xs md:text-sm animate-bounce">
            <Crown className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            OFERTA EXCLUSIVA LIMITADA
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl relative">
            {/* Discount Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              50% OFF
            </div>
            
            {/* Title */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2 md:mb-4 leading-tight">
                <span className="block text-alert-red">TRANSFORME</span>
                <span className="block text-dark-green">SEUS CAFÉS DA MANHÃ</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-lg">
                200 receitas que vão revolucionar suas manhãs com sabor e saúde!
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 items-center">
              {/* Product Image */}
              <div className="text-center relative">
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/MOCKUP.png" 
                  alt="Cardápio da Nutri - Mockup do produto" 
                  className="w-full max-w-xs md:max-w-sm mx-auto"
                  data-testid="img-product-mockup"
                />
                
                {/* Product Badges */}
                <div className="absolute top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  200 RECEITAS
                </div>
                <div className="absolute bottom-8 -left-2 bg-dark-green text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  RÁPIDO
                </div>
              </div>
              
              {/* Pricing & CTA */}
              <div className="text-center md:text-left">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-text-secondary text-base md:text-lg line-through mb-1" data-testid="text-original-price">
                    De R$49,90
                  </p>
                  <div className="flex items-baseline justify-center md:justify-start mb-2">
                    <span className="text-6xl md:text-8xl font-black text-alert-red" data-testid="text-sale-price">
                      R$24
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-alert-red">,90</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">à vista</p>
                  <div className="inline-block bg-dark-green text-white px-3 py-1 rounded-full text-sm font-semibold" data-testid="text-installment">
                    ou 5x de R$4,98
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-6 text-xs md:text-sm">
                  <div className="flex items-center justify-center md:justify-start">
                    <Shield className="w-4 h-4 text-dark-green mr-1" />
                    <span>Garantia 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>+5.000 clientes</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Zap className="w-4 h-4 text-alert-red mr-1" />
                    <span>Receitas rápidas</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Crown className="w-4 h-4 text-yellow-600 mr-1" />
                    <span>Por nutricionista</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={handlePurchase}
                  className="w-full bg-gradient-to-r from-dark-green to-primary-green hover:from-primary-green hover:to-dark-green text-white font-bold text-sm md:text-lg py-4 md:py-6 px-4 md:px-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
                  data-testid="button-purchase"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  COMPRAR AGORA
                </Button>
                
                {/* Payment Methods */}
                <div className="mt-4 space-y-3">
                  <img 
                    src="https://cdn.awsli.com.br/1845/1845902/arquivos/jdbstpx.png" 
                    alt="Mercado Pago - Pagamento Seguro" 
                    className="h-12 md:h-16 mx-auto"
                    data-testid="img-payment-logo"
                  />
                  
                  <div className="flex flex-wrap justify-center gap-1 md:gap-2 text-xs" data-testid="text-security-info">
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                      <Shield className="w-3 h-3 mr-1 text-green-600" />
                      <span>Compra segura</span>
                    </div>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 mr-1 text-yellow-600" />
                      <span>Garantia 7 dias</span>
                    </div>
                    <div className="flex items-center bg-red-100 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 mr-1 text-red-600" />
                      <span>Oferta limitada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Urgency Timer */}
            <div className="mt-6 md:mt-8 text-center">
              <div className="inline-flex items-center bg-alert-red text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm animate-pulse">
                <Clock className="w-4 h-4 mr-2" />
                OFERTA VÁLIDA APENAS HOJE - NÃO PERCA!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
