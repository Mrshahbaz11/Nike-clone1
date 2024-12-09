const newsArticles = [
  {
    id: 1,
    title: "Nike Unveils Revolutionary Sustainable Material",
    date: "2024-04-15",
    excerpt: "Nike introduces a groundbreaking sustainable material made from recycled ocean plastics, setting new industry standards.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    title: "Expanding Our Global Reach",
    date: "2024-04-10",
    excerpt: "Nike announces new retail locations across Asia and Europe, bringing innovative shopping experiences to more customers worldwide.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
  },
];

export default function NewsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-12">Latest News</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {newsArticles.map((article) => (
          <div key={article.id} className="border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
              <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <a href="#" className="text-primary hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}