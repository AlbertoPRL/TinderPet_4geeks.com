import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProviders } from "./lib/providers/chakra-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TinderPet",
  description:
    "TinderPet is a platform for pet lovers that helps you find your new best partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
