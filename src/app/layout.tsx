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
    url: "https://tusitio.com",
    siteName: "Sistema Solar Interactivo",
    images: [
      {
        url: "https://tusitio.com/imagen-de-sistema-solar.jpg",
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
        className={`${orbitron.variable} h-screen bg-fixed antialiased bg-[url(https://img2.wallspic.com/crops/3/9/9/2/4/142993/142993-calm-black-electric_blue-atmosphere-space-4000x3000.jpg)] bg-cover bg-no-repeat relative`}
      >
        <div className="fixed inset-0 bg-black/40 -z-10 w-full h-full"></div>
        {children}
      </body>
    </html>
  );
}
