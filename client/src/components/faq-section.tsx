import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Como recebo o material?",
      answer: "Após a confirmação do pagamento, você receberá o material completo por e-mail em formato PDF, pronto para download e impressão."
    },
    {
      question: "As receitas têm sabor de verdade?",
      answer: "Sim! Todas as receitas foram desenvolvidas priorizando o sabor sem abrir mão da saúde. Você não vai sentir que está fazendo \"comida de dieta\"."
    },
    {
      question: "São realmente saudáveis?",
      answer: "Absolutamente! Todas as receitas foram criadas por uma nutricionista com mais de 10 anos de experiência, seguindo critérios científicos de nutrição."
    },
    {
      question: "Servem para a família toda?",
      answer: "Sim! As receitas foram pensadas para agradar adultos e crianças, facilitando a rotina da família inteira."
    },
    {
      question: "São fáceis de fazer?",
      answer: "Muito fáceis! Todas as receitas podem ser preparadas em até 15 minutos, com instruções passo a passo muito claras."
    },
    {
      question: "Preciso saber cozinhar?",
      answer: "Não é necessário! As receitas são tão simples que até quem não tem experiência na cozinha consegue fazer sem problemas."
    },
    {
      question: "Os ingredientes são acessíveis?",
      answer: "Sim! Todos os ingredientes são fáceis de encontrar em qualquer mercado e têm preços acessíveis. Nada de ingredientes caros ou difíceis de achar."
    },
    {
      question: "Preciso de utensílios especiais?",
      answer: "Não! Todas as receitas podem ser feitas com utensílios básicos que você já tem em casa: panela, frigideira, liquidificador, etc."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Dúvidas Frequentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-light-bg rounded-xl px-6 border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-lg font-semibold text-text-primary hover:text-dark-green py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
