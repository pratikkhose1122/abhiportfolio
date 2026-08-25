// Global Site Configuration & Contact Info
export const SITE_CONFIG = {
  name: "Abhijit Mungase",
  title: "Abhijit Mungase | Software Developer & Cinematographer",
  description: "Boutique Dev Studio & Cinematic Photography by Abhijit Mungase.",
  location: "Ahilyanagar & Pune, Maharashtra, India",
  email: "abhijitmungase608@gmail.com",
  // WhatsApp number (country code without + for wa.me link, formatted for display)
  whatsappNumber: "8010947110",
  whatsappFormatted: "+91 8010947110",
  instagramUrl: "https://instagram.com",
  linkedinUrl: "https://linkedin.com",
  githubUrl: "https://github.com",
};

// WhatsApp Direct Link Helper
export function getWhatsAppUrl(customMessage?: string) {
  const defaultMsg = "Hi Abhijit, I checked your portfolio and would like to discuss a project!";
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
}

// WhatsApp Quick Prompts
export const WHATSAPP_PROMPTS = [
  {
    id: "wedding",
    icon: "📸",
    label: "Wedding / Photography Booking",
    message: "Hi Abhijit, I want to inquire about booking a wedding photography & cinematography shoot.",
  },
  {
    id: "dev",
    icon: "💻",
    label: "Web / Mobile App Development",
    message: "Hi Abhijit, I have a software / mobile app project I'd like to build with you.",
  },
  {
    id: "quote",
    icon: "⚡",
    label: "Get a Quick Quote",
    message: "Hello Abhijit, can you provide an estimate and timeline for my upcoming project?",
  },
  {
    id: "say_hi",
    icon: "👋",
    label: "Just saying hello",
    message: "Hi Abhijit, love your portfolio! Let's connect.",
  },
];
