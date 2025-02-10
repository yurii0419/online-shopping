"use client";

import IProduct from "@/lib/types/product";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery]);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-5 border rounded-md"
      />
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 w-[300px] bg-zinc-200 p-3 rounded-lg">
            <Image src={product.thumbnail} width={250} height={250} alt={product.title} className="ml-auto" />
            <div>
              <h3 className="text-lg font-bold">{product.title}</h3>
              <span className="text-sm text-blue-700">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
