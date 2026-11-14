import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Ecloudlab — Desarrollo de Software a Medida y Soluciones con IA | Brian Pomaquero",
    template: "%s — Ecloudlab",
  },
  description:
    "Ecloudlab es un estudio de desarrollo de software y laboratorio de IA liderado por Brian Pomaquero. Creamos todo tipo de soluciones de software a medida: aplicaciones web, plataformas SaaS, APIs en la nube, automatización de procesos y agentes de IA autónomos.",
  keywords: [
    "Ecloudlab",
    "Brian Pomaquero",
    "Desarrollador de Software",
    "Desarrollo de Software a Medida",
    "Soluciones de Software",
    "Desarrollo Web",
    "Desarrollo SaaS",
    "Arquitectura Cloud",
    "Integración de APIs",
    "Automatización de Procesos",
    "Agentes de IA",
    "Inteligencia Artificial",
    "Sistemas Autónomos",
    "Facturación Electrónica SRI",
    "Nexus Bank Agent",
    "Nexus Shop",
    "Next.js",
    "Python",
    "TypeScript",
    "LangGraph",
    "Custom Software Development",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Brian Pomaquero", url: "https://www.brianpomaquero.com/" }],
  creator: "Brian Pomaquero",
  publisher: "Ecloudlab",
  metadataBase: new URL("https://ecloudlab.com"),
  alternates: {
    canonical: "https://ecloudlab.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://ecloudlab.com",
    title: "Ecloudlab — Desarrollo de Software a Medida y Soluciones con IA",
    description:
      "Desarrollador full-stack creando todo tipo de soluciones de software: aplicaciones web, SaaS, APIs en la nube, automatización y agentes de IA autónomos.",
    siteName: "Ecloudlab",
    images: [
      {
        url: "/og-preview.svg",
        width: 1200,
        height: 630,
        alt: "Ecloudlab — Desarrollo de Software a Medida y Soluciones con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecloudlab — Desarrollo de Software a Medida y Soluciones con IA",
    description:
      "Creamos todo tipo de soluciones de software: aplicaciones web, backends en la nube, automatización y agentes de IA autónomos.",
    images: ["/og-preview.svg"],
    creator: "@edwardrian",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://ecloudlab.com/#website",
        url: "https://ecloudlab.com/",
        name: "Ecloudlab",
        description:
          "Desarrollo de software a medida, ingeniería en la nube y soluciones autónomas con IA por Brian Pomaquero.",
        publisher: {
          "@id": "https://ecloudlab.com/#organization",
        },
        inLanguage: "es",
      },
      {
        "@type": "Organization",
        "@id": "https://ecloudlab.com/#organization",
        name: "Ecloudlab",
        url: "https://ecloudlab.com/",
        logo: "https://ecloudlab.com/favicon.svg",
        description:
          "Estudio de ingeniería de software y laboratorio de IA enfocado en crear soluciones web, cloud, automatización y agentes autónomos.",
        founder: {
          "@id": "https://ecloudlab.com/#person",
        },
        sameAs: [
          "https://www.brianpomaquero.com/",
          "https://github.com/edwardrian",
          "https://www.linkedin.com/in/pomaqueroquimiz/",
          "https://nexus-bank.ecloudlab.com/",
          "https://fact.ecloudlab.com/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "ecloudlatam@gmail.com",
          contactType: "Soporte y Contacto",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Desarrollo de Software",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Desarrollo de Software a Medida y SaaS",
                description:
                  "Diseño e ingeniería integral de plataformas web, herramientas internas y productos SaaS escalables.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aplicaciones Web y APIs",
                description:
                  "Aplicaciones full-stack, APIs REST/GraphQL, integraciones con terceros y sistemas web a medida.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Arquitectura Cloud y Automatización",
                description:
                  "Infraestructura serverless en la nube, backends orientados a eventos y automatización de procesos.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agentes de IA Autónomos y Sistemas LLM",
                description:
                  "Agentes con estado, orquestación con LangGraph y copilotos inteligentes integrados a flujos reales.",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": "https://ecloudlab.com/#person",
        name: "Brian Pomaquero",
        url: "https://www.brianpomaquero.com/",
        jobTitle: "Desarrollador de Software Full-Stack y Arquitecto de Soluciones IA",
        worksFor: {
          "@id": "https://ecloudlab.com/#organization",
        },
        sameAs: [
          "https://www.brianpomaquero.com/",
          "https://github.com/edwardrian",
          "https://www.linkedin.com/in/pomaqueroquimiz/",
        ],
        knowsAbout: [
          "Desarrollo de Software a Medida",
          "Desarrollo Web Full-Stack",
          "Arquitectura Cloud",
          "Diseño e Integración de APIs",
          "Ingeniería SaaS",
          "Automatización de Procesos",
          "Agentes de IA Autónomos",
          "Python",
          "TypeScript",
          "Next.js",
          "LangGraph",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Nexus Bank Agent",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Cloud / Telegram",
        url: "https://nexus-bank.ecloudlab.com/",
        author: {
          "@id": "https://ecloudlab.com/#organization",
        },
        description:
          "Copiloto bancario autónomo multiusuario en Telegram con Google Cloud Pub/Sub, LangGraph y Gemini.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Nexus Shop",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web / Telegram",
        url: "https://fact.ecloudlab.com/",
        author: {
          "@id": "https://ecloudlab.com/#organization",
        },
        description:
          "Plataforma de catálogo de productos y servicios, control de inventario y facturación electrónica SRI con bot de Telegram e IA.",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
