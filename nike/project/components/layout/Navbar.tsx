"use client";

import Link from "next/link";
import { ShoppingBag, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/products" className="text-lg">
                  Products
                </Link>
                <Link href="/categories" className="text-lg">
                  Categories
                </Link>
                <Link href="/help" className="text-lg">
                  Help
                </Link>
                <Link href="/about" className="text-lg">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-2xl font-bold">NIKE</h1>
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">Products</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/categories" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2">Categories</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-2 p-4">
                  <li><Link href="/about" className="block hover:text-primary">About Us</Link></li>
                  <li><Link href="/careers" className="block hover:text-primary">Careers</Link></li>
                  <li><Link href="/news" className="block hover:text-primary">News</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}