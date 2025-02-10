import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/lib/components/Topbar";

export const metadata: Metadata = {
  title: "Online Shopping",
  description: "Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
