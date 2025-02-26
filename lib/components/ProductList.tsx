import Link from "next/link"
import IProduct from "../types/product"
import Image from "next/image"

const ProductList = ({ products }: { products: IProduct[] }) => {
    return <div className="flex flex-wrap gap-5">
        {products.map((product) => (
            <Link
                key={product.id}
                className="flex flex-col gap-3 w-[300px] bg-zinc-200 p-3 rounded-lg hover:cursor-pointer"
                href={`/products/${product.id}`}
            >
                <Image src={product.thumbnail} width={250} height={250} alt={product.title} className="ml-auto" />
                <div>
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <span className="text-sm text-blue-700">${product.price}</span>
                </div>
            </Link>
        ))}
    </div>
}

export default ProductList