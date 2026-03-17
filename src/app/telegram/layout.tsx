import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function TelegramLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${ibmPlexMono.variable}`}>
      {children}
    </div>
  );
}
