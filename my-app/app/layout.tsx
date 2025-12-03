import TopBar from "@/src/components/TopBar";
import Navbar from "@/src/components/navbar";

import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
