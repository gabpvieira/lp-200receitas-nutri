import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Função para tracking do UTMfy - PRODUCTION READY
const trackUTMfyPageview = () => {
  setTimeout(() => {
    if ((window as any).utmifyTrackPageview) {
      (window as any).utmifyTrackPageview();
    }
    
    // Tracking adicional específico do UTMfy para SPA
    if (typeof (window as any).utmify !== 'undefined' && (window as any).utmify.track) {
      (window as any).utmify.track('PageView', {
        page_title: document.title,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        app_type: 'SPA'
      });
    }
  }, 2000);
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Dispara tracking após render inicial
trackUTMfyPageview();
