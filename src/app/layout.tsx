import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema solar",
  description:
    "Explora el sistema solar con nuestra aplicación interactiva. Aprende sobre los planetas, el sol y otros cuerpos celestes.",
  openGraph: {
    title: "Sistema Solar Interactivo",
    description:
      "Explora el sistema solar con nuestra aplicación interactiva. Aprende sobre los planetas, el sol y otros cuerpos celestes.",
    url: "https://solar-system-app-tau.vercel.app",
    siteName: "Sistema Solar Interactivo",
    images: [
      {
        url: "https://solar-system-app-tau.vercel.app/assets/mars.webp",
        width: 1200,
        height: 630,
        alt: "Imagen del sistema solar",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${orbitron.variable} h-screen bg-fixed antialiased bg-[url(/assets/background-image.jpg)] bg-cover bg-no-repeat relative`}
      >
        <div className="fixed inset-0 bg-black/40 -z-10 w-full h-full"></div>
        {children}
      </body>
    </html>
  );
}
