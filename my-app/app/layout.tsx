import "./globals.css";

import TopBar from "./src/components/TopBar";
import Navbar from "./src/components/navbar";
import Hero from "./src/components/Hero";
import MenuCards from "./src/components/MenuCards";
import Testimonials from "./src/components/Testimonials";
import Footer from "./src/components/Footer";

import { ThemeProvider } from "next-themes";
import ThemeWrapper from "./ThemeWrapper";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"     // <-- IMPORTANT: adds 'class="dark"' to <html>
          defaultTheme="light"
          enableSystem={false}
        > */}
        <ThemeWrapper>
        <TopBar />
        <Navbar />
        <Hero />
        <MenuCards />
        <Testimonials />
        <Footer />
        {children}
        {/* </ThemeProvider> */}
        </ThemeWrapper>
      </body>
    </html>
  );
}
