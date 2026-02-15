import { Geist, Geist_Mono, Roboto_Condensed, Roboto  } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";


 

export const metadata: Metadata = {
  title: "Auexch",
  description: "Explore Auexch",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${robotoCondensed.variable} 
          ${roboto.variable}
          antialiased
        `}
        
        cz-shortcut-listen="true"
      >
          {children}
      </body>
    </html>
  );
}
