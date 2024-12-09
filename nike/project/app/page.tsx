import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryCard } from "@/components/category/CategoryCard";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-black/60 absolute z-10" />
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Just Do It</h1>
          <p className="text-xl mb-8">Discover the latest Nike innovations</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}