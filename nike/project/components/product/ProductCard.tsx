import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-transform hover:scale-[1.02]">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground">${product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}