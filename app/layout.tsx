import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מגע לנשמה",
  description: "מגע לנשמה",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          property="og:image"
          content="https://static.yoelweisberg.com/portfilioio-images/hero.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="מוריה ויסברג | מגע לנשמה" />
        <meta name="og:title" content="מוריה ויסברג | מגע לנשמה" />
        <meta
          name="twitter:image"
          content="https://static.yoelweisberg.com/portfilioio-images/hero.jpg"
        />

        {/* Additional Meta Tags */}
      </head>
      <body className="min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
