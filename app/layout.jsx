import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ApointmentLink",
  description: "Din hjälpsama Apointment/att göra listan applikation en klick ifrån dig!",
  creator: "Rodrigo Sebasitan",
  version: "1.0.0",
  icon: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="creator" content={metadata.creator} />
        <meta name="version" content={metadata.version} />
        <link rel="icon" href={metadata.icon.icon} type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
