import type { Metadata } from "next";
import { Lato, Montserrat, Rubik } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  weight: ["400","500","600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const rubik = Rubik({
  weight: ["400","500","600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mindbodyface.com'),
  title: "Mindbodyface | Medically proven methods and techniques to look younger",
  description: "A concentrate of the best Faceplasty techniques to combat swellings, wrinkles and facial asymmetry.",
  icons: {
    icon: '/icon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindbodyface.com',
    title: "Mindbodyface | Medically proven methods and techniques to look younger",
    description: "A concentrate of the best Faceplasty techniques to combat swellings, wrinkles and facial asymmetry.",
    images: [
      {
        url: '/images/img-company.webp',
        width: 1200,
        height: 630,
        alt: 'Mindbodyface',
      },
    ],
    siteName: 'Mindbodyface',
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${lato.variable} ${montserrat.variable} ${rubik.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}