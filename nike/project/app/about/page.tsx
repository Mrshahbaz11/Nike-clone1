export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Nike</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
        </p>

        <div className="grid md:grid-cols-2 gap-12 my-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Innovation</h2>
            <p className="text-muted-foreground">
              We dare to design the future of sport. To us, innovation is about elevating human potential. We obsess the needs of the world's best athletes, using their insights to create products that are beautiful and useful for everybody.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
            <p className="text-muted-foreground">
              We believe in a better future where everybody thrives on a healthy planet and level playing field. It's why we're working to minimize our environmental footprint and maximize positive social impact.
            </p>
          </div>
        </div>

        <div className="relative h-[400px] my-12">
          <img
            src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3"
            alt="Nike Campus"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}