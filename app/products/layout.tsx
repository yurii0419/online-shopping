import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page",
  description: "Product Page",
  keywords: "products, online shopping, ecommerce",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
