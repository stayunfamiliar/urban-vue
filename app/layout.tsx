import type { Metadata } from "next";
import { Inter, STIX_Two_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const stix = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
});

export const metadata: Metadata = {
  title: "Urban Vue | Stylish serviced apartments in Birmingham",
  description:
    "Comfortable, well-kept serviced apartments in Birmingham for city breaks, work trips and longer stays.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${stix.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
