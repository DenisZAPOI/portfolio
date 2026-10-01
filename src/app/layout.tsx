import type { Metadata } from "next";
import { Gochi_Hand, IBM_Plex_Mono, Inter, Press_Start_2P, Space_Grotesk } from "next/font/google";
import { LocaleProvider } from "@/i18n/locale";
import { profile } from "@/data/profile";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.tagline.fr,
};

// Applique le thème mémorisé avant l'affichage, pour éviter un flash du thème sombre.
const applySavedTheme = `try { if (localStorage.getItem("${THEME_STORAGE_KEY}") === "light") document.documentElement.dataset.theme = "light"; } catch {}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      // Le script ci-dessous peut ajouter data-theme avant que React ne prenne la main.
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${pressStart.variable} ${gochiHand.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: applySavedTheme }} />
      </head>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
