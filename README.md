# Ecloudlab — AI Innovation & Experimental Software Lab ⚡

> Landing page oficial y vitrina de investigación de **Ecloudlab** ([ecloudlab.com](https://ecloudlab.com/)).  
> Construido con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** y **Lucide React**.

---

## 👨‍💻 Founder & Leadership

- **Founder & Lead AI Engineer:** [Brian Pomaquero](https://www.brianpomaquero.com/)
- **Contact:** `ecloudlatam@gmail.com`
- **GitHub:** [@edwardrian](https://github.com/edwardrian)
- **LinkedIn:** [linkedin.com/in/pomaqueroquimiz](https://www.linkedin.com/in/pomaqueroquimiz/)

---

## 🧪 The Lab & Featured Projects

| Project | Status | Tech Stack | Link |
| :--- | :--- | :--- | :--- |
| **Nexus Bank Agent** *(Flagship)* | 🟢 **Active / Production** | LangGraph, Gemini 1.5, GCP Pub/Sub, Telegram, PostgreSQL | [nexus-bank.ecloudlab.com](https://nexus-bank.ecloudlab.com/) |
| **OmniVoice AI** | 🟡 **In Development / Beta** | WebRTC, Whisper Large, ElevenLabs, FastAPI, Docker | Private Preview |
| **DocuSense Graph** | 🟣 **Research Prototype** | Graph RAG, Neo4j, Claude 3.5, pgvector | Internal Research |
| **Ecloud Shield** | 🔵 **Core Infrastructure** | Deterministic Guardrails, OAuth 2.1, RLS | System Wide |

---

## 🧱 Arquitectura y Estructura del Proyecto

```
.
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind base, CSS variables y efectos ambient
│   │   ├── layout.tsx            # RootLayout con SEO, viewport, OpenGraph y JSON-LD
│   │   ├── page.tsx              # Página principal (asamblea de componentes)
│   │   ├── privacy/
│   │   │   └── page.tsx          # Política de Privacidad
│   │   └── terms/
│   │       └── page.tsx          # Términos de Servicio
│   └── components/
│       ├── Navbar.tsx            # Barra de navegación responsive con drawer móvil
│       ├── Hero.tsx              # Hero impactante + Badge + CTAs
│       ├── TelemetryConsole.tsx  # Terminal con telemetría de orquestador de agentes
│       ├── ProjectsGrid.tsx      # Vitrina de experimentos con tarjetas interactivas
│       ├── PhilosophyStack.tsx   # 4 pilares de arquitectura + Tech Stack matrix
│       ├── CreatorSpotlight.tsx  # Sección de Brian Pomaquero
│       ├── CallToAction.tsx      # Banner de contacto
│       ├── Footer.tsx            # Footer con copia de correo al portapapeles y estado
│       └── SpotlightCard.tsx     # Tarjeta glassmórfica con efecto spotlight del cursor
├── public/
│   ├── favicon.svg               # Isotipo vectorial de la marca
│   ├── og-preview.svg            # Imagen social preview OpenGraph (1200x630)
│   ├── robots.txt                # Reglas para crawlers
│   └── sitemap.xml               # Sitemap indexado
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── vercel.json
```

---

## 💻 Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Probar build de producción localmente
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🚀 Despliegue en Vercel

### Opción 1: Vercel CLI
```bash
vercel --prod
```

### Opción 2: Git / Dashboard de Vercel
1. Conecta este repositorio en [Vercel Dashboard](https://vercel.com/new).
2. Vercel detectará el framework **Next.js** de forma automática.
3. Asigna tu dominio personalizado `ecloudlab.com`.

---

## 📄 Licencia & Copyright

© 2026 **Ecloudlab**. All rights reserved.  
Founded & engineered by [Brian Pomaquero](https://www.brianpomaquero.com/).
