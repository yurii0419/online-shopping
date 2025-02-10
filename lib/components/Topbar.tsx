import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-10 p-5 border">
      <Link href="/">
        <Image src="/vercel.svg" alt="Next.js logo" width={30} height={30} priority />
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
};

export default Topbar;
