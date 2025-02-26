export default function ProductListSkeleton() {
  return (
    <div className="flex flex-wrap gap-5">
      {Array(10).fill(0).map((_, index) => (
        <div key={index} className="animate-pulse bg-zinc-200 w-96 h-[336px] rounded-lg shadow"/>
      ))}
    </div>
  );
}
