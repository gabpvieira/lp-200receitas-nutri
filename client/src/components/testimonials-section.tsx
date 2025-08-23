export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "https://i.postimg.cc/YCV6rwC8/whats-2.webp",
      alt: "Depoimento de cliente satisfeita"
    },
    {
      image: "https://i.postimg.cc/mrHQh6c4/instadp.webp",
      alt: "Feedback positivo no Instagram"
    },
    {
      image: "https://i.postimg.cc/Z50Pzq4C/whatsas1.webp",
      alt: "Mensagem de agradecimento"
    }
  ];

  return (
    <section className="bg-primary-green section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-dark-green"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mais de 5.427 pessoas já adquiriram
          </h2>
          <p className="text-white/80 text-lg">Veja o que estão falando sobre o Cardápio da Nutri</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="recipe-card" data-testid={`testimonial-${index}`}>
              <img 
                src={testimonial.image} 
                alt={testimonial.alt} 
                className="rounded-2xl shadow-2xl w-full"
                data-testid={`img-testimonial-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
