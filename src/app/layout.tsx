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
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${lato.variable} ${montserrat.variable} ${rubik.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}