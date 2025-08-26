import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Função para tracking do UTMfy
const trackUTMfyPageview = () => {
  // Aguarda um pouco para garantir que o script carregou
  setTimeout(() => {
    if ((window as any).utmifyTrackPageview) {
      (window as any).utmifyTrackPageview();
    }
    
    // Tracking adicional específico do UTMfy
    if (typeof (window as any).utmify !== 'undefined' && (window as any).utmify.track) {
      (window as any).utmify.track('PageView', {
        page_title: document.title,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct'
      });
      console.log('UTMfy PageView disparado via React');
    }
  }, 2000);
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Dispara tracking após render inicial
trackUTMfyPageview();
