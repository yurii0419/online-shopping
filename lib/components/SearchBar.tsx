'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(`${pathname}?search=${searchQuery}`, { scroll: false });
  }, [searchQuery]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-3 mb-5 border rounded-md"
    />
  );
}
