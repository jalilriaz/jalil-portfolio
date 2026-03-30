import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jalil Riaz - Frontend Developer | React & TypeScript Specialist",
  description: "Detail-oriented Frontend Developer specializing in React.js, TypeScript, and modern JavaScript. Building scalable, high-performance web applications.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>",
  },
  openGraph: {
    title: "Jalil Riaz | Frontend Developer",
    description: "Detail-oriented Frontend Developer specializing in React.js, TypeScript, and modern JavaScript.",
    url: "https://jalil-riaz-portfolio.vercel.app/",
    siteName: "Jalil Riaz Portfolio",
    images: [{ url: "/portfolio-og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalil Riaz | Frontend Developer",
    description: "React & TypeScript Specialist.",
    images: ["/portfolio-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
