import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li><Link href="/store-locator" className="text-sm text-muted-foreground hover:text-foreground">Store Locator</Link></li>
              <li><Link href="/nike-app" className="text-sm text-muted-foreground hover:text-foreground">Nike App</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li><Link href="/help/order-status" className="text-sm text-muted-foreground hover:text-foreground">Order Status</Link></li>
              <li><Link href="/help/shipping" className="text-sm text-muted-foreground hover:text-foreground">Shipping & Delivery</Link></li>
              <li><Link href="/help/returns" className="text-sm text-muted-foreground hover:text-foreground">Returns</Link></li>
              <li><Link href="/help/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/nike" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/nike" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/nike" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/nike" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}