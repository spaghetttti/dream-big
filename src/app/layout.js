import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dream Big Transportation",
  description: "Dream Big Transportation incorporated",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-orange-100 flex flex-col">
          <Header />
          <div className="bg-red-800 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
          {children}
          <div className="bg-red-800 self-stretch min-h-[1px] w-full mt-48 max-md:max-w-full max-md:mt-10" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
