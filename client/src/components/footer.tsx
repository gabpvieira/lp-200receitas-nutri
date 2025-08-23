export default function Footer() {
  return (
    <footer className="bg-dark-footer text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white/80 mb-4" data-testid="text-copyright">
            © 2025 Cardápio da Nutri – Todos os direitos reservados
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <a 
              href="#" 
              className="hover:text-white transition-colors" 
              data-testid="link-privacy"
            >
              Política de Privacidade
            </a>
            <span>|</span>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              data-testid="link-terms"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
