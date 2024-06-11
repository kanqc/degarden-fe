import dynamic from "next/dynamic";
import Head from "next/head";
import ProductList from "@/components/ProductList";
const Navbar = dynamic(() => import("@/components/Navbar"));

// Import CSS
import "./globals.css";

export async function metadata() {
  return {
    title: "Trang chủ",
    description: "Plants is life...",
    icons: {
      icon: "/favicon.ico",
    },
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ProductList />
        <main>{children}</main>
      </body>
    </html>
  );
}
