import { Button } from "@/components/ui/button";
import { ShoppingCart, Crown, Clock, Shield, Star, Zap } from "lucide-react";

export default function OfferSection() {
  const handlePurchase = () => {
    window.open('https://nucleosaudavel.pay.yampi.com.br/r/Q4S7ZK1U0Q', '_blank');
  };

  return (
    <section id="oferta" className="bg-gradient-to-br from-primary-green via-dark-green to-primary-green py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/90 to-dark-green/90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-4 animate-bounce">
            <Crown className="w-4 h-4 mr-2" />
            OFERTA EXCLUSIVA LIMITADA
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-[4rem]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-green/20 to-transparent rounded-tr-[3rem]"></div>
            
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
                <span className="bg-gradient-to-r from-alert-red to-orange-500 bg-clip-text text-transparent">
                  TRANSFORME
                </span>
                <br />
                <span className="text-dark-green">SEUS CAFÉS DA MANHÃ</span>
              </h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                200 receitas que vão revolucionar suas manhãs com sabor e saúde!
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Image */}
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-dark-green/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/MOCKUP.png" 
                  alt="Cardápio da Nutri - Mockup do produto" 
                  className="w-full max-w-md mx-auto relative z-10 animate-float"
                  data-testid="img-product-mockup"
                />
                
                {/* Product Features Badges */}
                <div className="absolute top-0 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  200 RECEITAS
                </div>
                <div className="absolute bottom-10 -left-4 bg-dark-green text-white px-3 py-1 rounded-full text-xs font-bold">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    RÁPIDO
                  </span>
                </div>
              </div>
              
              {/* Pricing & CTA */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                {/* Price Box */}
                <div className="bg-gradient-to-br from-alert-red/10 to-orange-500/10 rounded-2xl p-6 md:p-8 mb-6 border-2 border-alert-red/20">
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-text-secondary text-lg md:text-xl line-through mb-2" data-testid="text-original-price">
                      De R$49,90
                    </p>
                    <div className="flex items-center mb-4">
                      <span className="text-5xl md:text-6xl lg:text-7xl font-black text-alert-red" data-testid="text-sale-price">
                        R$24
                      </span>
                      <div className="ml-2">
                        <span className="text-2xl md:text-3xl font-bold text-alert-red">,90</span>
                        <p className="text-sm text-text-secondary">à vista</p>
                      </div>
                    </div>
                    <div className="bg-dark-green text-white px-4 py-2 rounded-full font-semibold" data-testid="text-installment">
                      ou 5x de R$4,98
                    </div>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    50% OFF
                  </div>
                </div>
                
                {/* Benefits List */}
                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-dark-green mr-2" />
                    <span>Garantia 7 dias</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span>+5.000 clientes</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-alert-red mr-2" />
                    <span>Receitas rápidas</span>
                  </div>
                  <div className="flex items-center">
                    <Crown className="w-4 h-4 text-yellow-600 mr-2" />
                    <span>Por nutricionista</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="space-y-4">
                  <Button 
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-dark-green to-primary-green hover:from-primary-green hover:to-dark-green text-white font-bold text-lg md:text-xl py-4 md:py-6 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-pulse"
                    data-testid="button-purchase"
                  >
                    <ShoppingCart className="w-6 h-6 mr-3" />
                    QUERO TRANSFORMAR MEUS CAFÉS AGORA
                  </Button>
                  
                  {/* Payment Methods */}
                  <div className="flex flex-col items-center space-y-3">
                    <img 
                      src="https://cdn.awsli.com.br/1845/1845902/arquivos/jdbstpx.png" 
                      alt="Mercado Pago - Pagamento Seguro" 
                      className="h-8 md:h-10"
                      data-testid="img-payment-logo"
                    />
                    
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-text-secondary" data-testid="text-security-info">
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                        <Shield className="w-3 h-3 mr-1 text-green-600" />
                        <span>Compra 100% segura</span>
                      </div>
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 mr-1 text-yellow-600" />
                        <span>Garantia de 7 dias</span>
                      </div>
                      <div className="flex items-center bg-red-100 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 mr-1 text-red-600" />
                        <span>Oferta limitada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Urgency Timer */}
            <div className="mt-8 md:mt-12 text-center">
              <div className="inline-flex items-center bg-alert-red text-white px-6 py-3 rounded-full font-bold animate-pulse">
                <Clock className="w-5 h-5 mr-2" />
                OFERTA VÁLIDA APENAS HOJE - NÃO PERCA!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
