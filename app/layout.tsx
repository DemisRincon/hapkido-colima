import StyledComponentsRegistry from "@/library/registry";
import { Metadata } from "next";
import Script from "next/script";

import GlobalThemeWrapper from "@/library/GlobalTheme";
import GlobalStyles from "@/library/GlobalStyles";
import MainLayout from "@/components/MainLayout";

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
        <StyledComponentsRegistry>
          <GlobalStyles />
          <GlobalThemeWrapper>
            <MainLayout>{children}</MainLayout>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
