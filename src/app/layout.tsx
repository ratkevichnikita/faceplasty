import type { Metadata } from "next";
import { Lato, Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(100786892, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
            `,
        }}
      />
      <title>&quot;Mindbodyface | Medically proven methods and techniques to look younger&quot;</title>
    </Head>
    <body className={`${lato.variable} ${montserrat.variable} ${rubik.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}