import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { IntroAnimation } from "@/components/intro-animation";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Commercial Construction & Carpentry | Victoria, Australia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.descriptionShort,
  keywords: [
    "commercial construction",
    "carpentry",
    "structural framing",
    "construction management",
    "fit-outs",
    "schools construction",
    "childcare centre construction",
    "government projects",
    "Melbourne builder",
    "Victoria builder",
    "licensed builder",
    "Bayliss Building Group",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Commercial Construction & Carpentry`,
    description: siteConfig.descriptionShort,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <IntroAnimation>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </IntroAnimation>
      </body>
    </html>
  );
}
