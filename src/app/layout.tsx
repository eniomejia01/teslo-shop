import type { Metadata } from "next";
import { geistMono, geistSans } from "@/config/fonts";

import "./globals.css";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Styles Moderns",
    default: "Home - Styles Moderns",
  },
  description: "Una tienda de Styles Moderns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
