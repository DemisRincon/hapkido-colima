import StyledComponentsRegistry from "@/library/registry";
import { Metadata } from "next";

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
