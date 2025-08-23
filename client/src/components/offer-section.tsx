import { Button } from "@/components/ui/button";

export default function OfferSection() {
  const handlePurchase = () => {
    window.open('https://nucleosaudavel.pay.yampi.com.br/r/Q4S7ZK1U0Q', '_blank');
  };

  return (
    <section id="oferta" className="bg-primary-green section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-dark-green"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                🔥 OFERTA ESPECIAL
              </h2>
              <p className="text-text-secondary text-lg">
                Transforme seus cafés da manhã agora mesmo!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://nucleosaudavel.com/wp-content/uploads/2025/08/MOCKUP.png" 
                  alt="Cardápio da Nutri - Mockup do produto" 
                  className="w-full max-w-sm mx-auto"
                  data-testid="img-product-mockup"
                />
              </div>
              
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <p className="text-text-secondary text-lg line-through mb-2" data-testid="text-original-price">
                    De R$49,90
                  </p>
                  <div className="text-5xl font-bold text-alert-red mb-2" data-testid="text-sale-price">
                    R$24,90
                  </div>
                  <p className="text-text-secondary text-sm mb-2">à vista</p>
                  <p className="text-dark-green font-semibold" data-testid="text-installment">ou 5x de R$4,98</p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handlePurchase}
                    className="cta-button w-full text-lg py-4 animate-pulse"
                    data-testid="button-purchase"
                  >
                    🛒 COMPRAR AGORA
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4">
                    <img 
                      src="https://cdn.awsli.com.br/1845/1845902/arquivos/jdbstpx.png" 
                      alt="Mercado Pago - Pagamento Seguro" 
                      className="h-8"
                      data-testid="img-payment-logo"
                    />
                  </div>
                  
                  <p className="text-xs text-text-secondary text-center" data-testid="text-security-info">
                    ✅ Compra 100% segura • ⭐ Garantia de 7 dias • 🔥 Oferta válida hoje
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
