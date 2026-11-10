import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ecloudlab — Autonomous AI Agents & Experimental Software Lab",
  description:
    "Ecloudlab is an AI innovation and experimental software laboratory researching, designing, and deploying autonomous AI agents and intelligent systems. Founded by Brian Pomaquero.",
  keywords: [
    "Ecloudlab",
    "AI Agents",
    "Autonomous Systems",
    "LangGraph",
    "Gemini",
    "Brian Pomaquero",
    "Artificial Intelligence",
    "LLM",
    "Experimental Software",
    "Nexus Bank Agent",
  ],
  authors: [{ name: "Brian Pomaquero", url: "https://www.brianpomaquero.com/" }],
  creator: "Brian Pomaquero",
  metadataBase: new URL("https://ecloudlab.com"),
  alternates: {
    canonical: "https://ecloudlab.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecloudlab.com",
    title: "Ecloudlab — Autonomous AI Agents & Experimental Software Lab",
    description:
      "We research, design, and deploy autonomous AI agents and intelligent systems solving complex, real-world problems.",
    siteName: "Ecloudlab",
    images: [
      {
        url: "/og-preview.svg",
        width: 1200,
        height: 630,
        alt: "Ecloudlab — Autonomous AI Agents & Experimental Software Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecloudlab — Autonomous AI Agents & Experimental Software Lab",
    description:
      "Researching, designing, and deploying autonomous AI agents and intelligent systems.",
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
        "@type": "Organization",
        "@id": "https://ecloudlab.com/#organization",
        name: "Ecloudlab",
        url: "https://ecloudlab.com/",
        logo: "https://ecloudlab.com/favicon.svg",
        description:
          "AI innovation and experimental software laboratory focused on autonomous AI agents and intelligent systems.",
        founder: {
          "@type": "Person",
          name: "Brian Pomaquero",
          url: "https://www.brianpomaquero.com/",
          jobTitle: "Lead AI Engineer & Founder",
        },
        sameAs: [
          "https://www.brianpomaquero.com/",
          "https://github.com/edwardrian",
          "https://www.linkedin.com/in/pomaqueroquimiz/",
          "https://nexus-bank.ecloudlab.com/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "ecloudlatam@gmail.com",
          contactType: "Customer Support",
        },
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
          "Autonomous multi-user AI banking copilot on Telegram with Google Cloud Pub/Sub, LangGraph, and Gemini.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-black text-[#ededed] selection:bg-white/20 selection:text-white">
        <div className="ambient-light-beam" />
        <div className="fixed inset-0 pointer-events-none z-0 bg-linear-grid" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
