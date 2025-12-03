import "./globals.css";

import TopBar from "@/src/components/TopBar";
import Navbar from "@/src/components/navbar";
import Hero from "@/src/components/Hero";
import MenuCards from "@/src/components/MenuCards";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        <Hero />
        <MenuCards />
        {children}
      </body>
    </html>
  );
}
