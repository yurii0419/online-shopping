import Review from "@/lib/components/Review";
import getProduct from "@/lib/utils/getProduct";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ id: number }> }): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="p-5 md:p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <Link className="items-center text-blue-600" href="/products">
          Product List
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
        <Image src={product.thumbnail} width={400} height={400} alt={product.title} className="mx-auto sm:mx-0" />
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-600 text-sm">SKU: {product.sku}</h3>
          <p className="text-lg font-bold">${product.price}</p>
          <p>
            Dimensions: {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
          </p>
          <div className="flex flex-row gap-2">
            <div>
              {Array(parseInt(`${product.rating}`) + 1)
                .fill(0)
                .map((_, index: number) => (
                  <span key={index}>⭐</span>
                ))}
            </div>
            <p className="text-gray-400">
              {product.rating} ({product.reviews.length} reviews)
            </p>
          </div>

          <p>{product.description}</p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold">Reviews</h1>
        {product.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold">Product Images</h1>
        <div className="flex flex-row flex-wrap gap-5">
          {product.images.map((image, index) => (
            <Image src={image} width={300} height={300} alt={`Image ${index}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
