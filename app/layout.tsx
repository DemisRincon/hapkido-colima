import { Metadata } from "next";
import Script from "next/script";
import MainLayout from "@/components/MainLayout";
import Providers from "@/library/providers/Providers";
import LayoutContainer from "@/components/MainLayout/LayoutContainer";

export const metadata: Metadata = {
  title: "Hapkido defensa personal",
  description:
    "Hapkido es un arte marcial coreano de defensa personal que combina técnicas de lucha y defensa personal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@googlemaps/js-api-loader@1.x/dist/index.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Providers>
          <LayoutContainer>{children}</LayoutContainer>
        </Providers>
      </body>
    </html>
  );
}
