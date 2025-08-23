import { Button } from "@/components/ui/button";

export default function RecipeGallery() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const recipes = [
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/OMELETE.webp",
      title: "Omelete Fit",
      description: "Rápido e cheio de proteínas.",
      time: "8 min",
      calories: "180 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/OVOSFRITOS.webp",
      title: "Ovos Fritos Saudáveis",
      description: "Versão leve e prática.",
      time: "5 min",
      calories: "150 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/PIZZA-RAPIDA.webp",
      title: "Pizza Fit Rápida",
      description: "Mata a vontade sem sair da dieta.",
      time: "12 min",
      calories: "210 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/PANQUECA.webp",
      title: "Panqueca Integral",
      description: "Doce saudável para variar a manhã.",
      time: "10 min",
      calories: "190 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/SALADA-FRUTA.webp",
      title: "Salada de Frutas",
      description: "Refrescante e cheia de vitaminas.",
      time: "6 min",
      calories: "120 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/SHAKES.webp",
      title: "Shake Proteico",
      description: "Cremoso e nutritivo em segundos.",
      time: "3 min",
      calories: "160 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/PAO-GRATINADO.webp",
      title: "Pão Gratinado",
      description: "Crosta crocante sem culpa.",
      time: "7 min",
      calories: "200 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/BOLOCANECA.webp",
      title: "Bolo de Caneca",
      description: "Quentinho em 2 minutos.",
      time: "2 min",
      calories: "170 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/SANDUICHE.jpg",
      title: "Sanduíche Natural",
      description: "Prático e saboroso.",
      time: "5 min",
      calories: "220 kcal"
    },
    {
      image: "https://nucleosaudavel.com/wp-content/uploads/2025/08/BROWIE.jpg",
      title: "Brownie Fit",
      description: "Delícia saudável para matar a vontade de doce.",
      time: "15 min",
      calories: "240 kcal"
    }
  ];

  return (
    <section className="bg-light-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Descubra Algumas das Receitas Inclusas
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div 
              key={index}
              className="recipe-card bg-white rounded-2xl overflow-hidden shadow-lg"
              data-testid={`recipe-card-${index}`}
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover"
                data-testid={`img-recipe-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{recipe.title}</h3>
                <p className="text-text-secondary mb-4">{recipe.description}</p>
                <div className="flex justify-between text-sm text-primary-green font-medium">
                  <span data-testid={`text-time-${index}`}>⏱ {recipe.time}</span>
                  <span data-testid={`text-calories-${index}`}>🔥 {recipe.calories}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            className="cta-button"
            data-testid="button-recipes-cta"
          >
            VER TODAS AS 200 RECEITAS
          </Button>
        </div>
      </div>
    </section>
  );
}
