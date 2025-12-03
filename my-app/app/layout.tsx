import "./globals.css";

import TopBar from "@/src/components/TopBar";
import Navbar from "@/src/components/navbar";
import Hero from "@/src/components/Hero";


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
        {children}
      </body>
    </html>
  );
}
