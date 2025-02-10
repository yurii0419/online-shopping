import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Powder Canister",
    imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Essence Mascara Lash Princess",
    imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
];

export default function Home() {
  return (
    <div className="p-5 md:p-10">
      <h1 className="text-4xl font-bold">Popular Products</h1>
      <div className="flex flex-col items-center gap-3 mt-5">
        <div className="flex flex-wrap gap-10">
          {products.map((product) => (
            <Link
              href={`products/${product.id}`}
              key={product.id}
              className="flex flex-col gap-2 bg-gray-200 rounded-lg p-3"
            >
              <Image src={product.imageUrl} width={300} height={300} alt={product.title} />
              <h2 className="text-center font-bold">{product.title}</h2>
            </Link>
          ))}
        </div>
        <Link className="text-blue-600 mt-5" href="/products">
          View All Products
        </Link>
      </div>
    </div>
  );
}
