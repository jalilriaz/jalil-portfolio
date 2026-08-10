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
  title: "Jalil Riaz - MERN Stack Developer | Full-Stack Web Developer",
  description: "MERN Stack Developer with 1.5+ years of experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Open to freelance and full-time opportunities.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>",
  },
  openGraph: {
    title: "Jalil Riaz | MERN Stack Developer",
    description: "Full-Stack MERN Developer specializing in MongoDB, Express.js, React.js, and Node.js — building scalable web applications.",
    url: "https://jalil-riaz-portfolio.vercel.app/",
    siteName: "Jalil Riaz Portfolio",
    images: [{ url: "/portfolio-og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalil Riaz | MERN Stack Developer",
    description: "MERN Stack Developer — MongoDB · Express.js · React · Node.js",
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
