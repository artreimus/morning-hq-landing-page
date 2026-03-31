import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MorningHQ – Your AI Chief of Staff for Deep Work",
  description: "MorningHQ transforms fragmented work into clear priorities and focused execution. Join the waitlist for early access.",
  keywords: "AI productivity, deep work, AI chief of staff, work management, focus tools, MorningHQ",
  metadataBase: new URL("https://morninghq.com"),
  openGraph: {
    title: "MorningHQ – Your AI Chief of Staff for Deep Work",
    description: "MorningHQ transforms fragmented work into clear priorities and focused execution. Join the waitlist for early access.",
    url: "https://morninghq.com",
    siteName: "MorningHQ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${sora.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[color:rgba(116,138,168,0.24)]">
        {children}
      </body>
    </html>
  );
}
