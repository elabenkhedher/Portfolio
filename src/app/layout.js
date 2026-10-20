import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://elabenkhedher.vercel.app"),
  title: "Elaa Ben Khedher — Full-stack Developer & Software Engineer",
  description:
    "Portfolio de Elaa Ben Khedher, développeuse full-stack basée en Tunisie. Conception d'applications web, mobiles et desktop avec React, Next.js, Django, Flutter et JavaFX.",
  keywords: [
    "Elaa Ben Khedher",
    "Full-stack developer",
    "Développeur Web",
    "Next.js",
    "React",
    "Django REST",
    "Flutter",
    "JavaFX",
    "Symfony",
    "Tunisie",
    "Portfolio",
  ],
  authors: [{ name: "Elaa Ben Khedher", url: "https://github.com/elabenkhedher" }],
  creator: "Elaa Ben Khedher",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elabenkhedher.vercel.app",
    title: "Elaa Ben Khedher — Full-stack Developer",
    description:
      "Portfolio de Elaa Ben Khedher : découvrez mes projets web, mobile et desktop (Plateforme Coranique, Système RH Intelligent JavaFX, QuizMaster, MediCare Hub).",
    siteName: "Elaa Ben Khedher Portfolio",
    images: [
      {
        url: "/images/hero-image.png",
        width: 800,
        height: 800,
        alt: "Elaa Ben Khedher - Full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elaa Ben Khedher — Full-stack Developer",
    description:
      "Portfolio de Elaa Ben Khedher : découvrez mes projets web, mobile et desktop.",
    images: ["/images/hero-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  if (saved === 'light' || (!saved && prefersLight)) {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-ink text-paper selection:bg-blush selection:text-ink`}>
        {children}
      </body>
    </html>
  );
}
