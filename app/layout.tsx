import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import Providers from "@/lib/providers/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hapkido Colima",
  description: "Hapkido Colima",
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
