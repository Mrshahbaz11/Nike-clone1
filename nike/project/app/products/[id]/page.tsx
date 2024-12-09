"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-4">${product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Size</label>
              <Select onValueChange={setSelectedSize} value={selectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" size="lg">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}