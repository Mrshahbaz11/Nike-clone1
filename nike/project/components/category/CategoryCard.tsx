import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="h-full overflow-hidden transition-transform hover:scale-[1.02]">
        <CardContent className="p-0">
          <div className="aspect-video relative">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <h3 className="text-lg font-semibold">{category.name}</h3>
        </CardFooter>
      </Card>
    </Link>
  );
}