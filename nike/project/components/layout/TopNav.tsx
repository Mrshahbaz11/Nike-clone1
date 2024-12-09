"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function TopNav() {
  return (
    <div className="bg-muted py-2 px-4 text-sm hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs">Help</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-48 gap-2 p-4">
                  <li><Link href="/help/order-status" className="block hover:text-primary">Order Status</Link></li>
                  <li><Link href="/help/shipping" className="block hover:text-primary">Shipping & Delivery</Link></li>
                  <li><Link href="/help/returns" className="block hover:text-primary">Returns</Link></li>
                  <li><Link href="/help/contact" className="block hover:text-primary">Contact Us</Link></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Link href="/join-us" className="hover:text-primary">Join Us</Link>
          <Link href="/sign-in" className="hover:text-primary">Sign In</Link>
        </div>
      </div>
    </div>
  );
}