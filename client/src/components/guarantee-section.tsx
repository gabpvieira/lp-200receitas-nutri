import { CheckCircle } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="bg-light-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://i.postimg.cc/7hBw8NMJ/GARANTIA-14-DIAS.webp" 
                alt="Garantia de 14 dias" 
                className="w-full max-w-sm mx-auto"
                data-testid="img-guarantee"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Garantia de<br />
                <span className="text-dark-green">14 Dias</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Você tem <strong className="text-dark-green">14 dias</strong> para testar todas as receitas sem risco. 
                Se por qualquer motivo você não ficar satisfeita, 
                devolvemos 100% do seu dinheiro.
              </p>
              <div className="flex items-center text-dark-green font-medium" data-testid="text-risk-free">
                <CheckCircle className="w-6 h-6 mr-2" strokeWidth={3} />
                <span>Risco zero para você!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
