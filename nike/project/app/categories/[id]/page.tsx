import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  const categoryProducts = products.filter((p) => p.category.toLowerCase() === category?.name.toLowerCase());

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="relative h-[40vh] mb-12">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-black/40 absolute z-10" />
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{category.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}