import ProductList from "@/lib/components/ProductList";
import ProductListSkeleton from "@/lib/components/ProductListSkeleton";
import SearchBar from "@/lib/components/SearchBar";
import { Suspense } from "react"

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ search: string }> }) {
  const { search } = await searchParams;
  const response = await fetch(`https://dummyjson.com/products/search?q=${search || ''}`);
  const data = await response.json();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Products</h1>
      <Suspense fallback={<div className="animate-pulse bg-zinc-200 w-full h-10 rounded-lg shadow"/>}>
        <SearchBar />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList products={data.products} />
      </Suspense>
    </div>
  );
}
