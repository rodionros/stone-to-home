import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import React from "react";
import StyledComponentsRegistry from "@/app/registry";

const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SFProDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/SFProDisplay-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/SFProDisplay-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../public/fonts/SFProDisplay-Light.ttf',
      weight: '300'
    }
  ],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Камень в дом",
  description: "Камень в дом",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
