import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Content from "../_components/Content";
import "@/app/styles/globals.css";
import ThemeScript from "../_components/provider/ThemeScript";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="px-6 lg:px-8 font-sans flex justify-center">
        <div className="max-w-[900px] w-full">
          <Header />
          <Content>{children}</Content>
          <Footer />
        </div>
      </body>
    </html>
  );
}
