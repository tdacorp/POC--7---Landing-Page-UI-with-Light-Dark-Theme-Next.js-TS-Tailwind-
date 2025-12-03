import "./globals.css";

import TopBar from "../components/TopBar";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import MenuCards from "../components/MenuCards";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

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
