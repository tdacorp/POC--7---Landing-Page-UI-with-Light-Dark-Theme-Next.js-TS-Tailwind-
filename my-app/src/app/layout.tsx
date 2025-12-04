import "./globals.css";

import { CartProvider } from "./context/cart-context";

import TopBar from "../components/TopBar";
import Navbar from "../components/navbar";
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
       <CartProvider>
          <ThemeWrapper>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </ThemeWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
