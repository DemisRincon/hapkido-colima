import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import Providers from "@/lib/providers/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hapkido Colima",
  description:
    "Disfruta de entrenamiento de Hapkido de clase mundial en Colima, combinando tradición y modernidad, diseñado especialmente para el público mexicano.",
  keywords: [
    "Hapkido",
    "Colima",
    "Artes Marciales",
    "Defensa Personal",
    "Entrenamiento",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
      { url: "/favicon-16x16.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutContainer>{children}</LayoutContainer>
        </Providers>
      </body>
    </html>
  );
}
