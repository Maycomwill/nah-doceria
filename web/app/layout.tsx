import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import AppProvider from "@/hooks";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const miss = localFont({
  src: [
    {
      path: "../assets/fonts/MissKatherine/Miss_Katherine-Script.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-miss-katherine",
});

const roca = localFont({
  src: [
    {
      path: "../assets/fonts/RocaOne/Roca_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/RocaOne/Roca_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/RocaOne/Roca_Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roca",
});

export const metadata: Metadata = {
  title: "Nah Doceria",
  description: "Doces feitos com amor e carinho.",
  icons: {
    icon: "/app/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <body
          className={`${poppins.variable} ${miss.variable} ${roca.variable} relative flex w-full flex-col items-center justify-start bg-cover font-sans`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
