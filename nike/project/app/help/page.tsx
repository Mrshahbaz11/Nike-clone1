export default function HelpPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Status</h2>
          <p className="text-muted-foreground mb-4">Track your order and view order history</p>
          <a href="/help/order-status" className="text-primary hover:underline">Check status →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shipping & Delivery</h2>
          <p className="text-muted-foreground mb-4">Learn about shipping options and tracking</p>
          <a href="/help/shipping" className="text-primary hover:underline">Learn more →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Returns</h2>
          <p className="text-muted-foreground mb-4">Start a return or check return status</p>
          <a href="/help/returns" className="text-primary hover:underline">Start return →</a>
        </div>
      </div>
    </div>
  );
}