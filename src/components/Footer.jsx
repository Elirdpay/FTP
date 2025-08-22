export default function Footer() {
  const authors = [
    { name: "Elird", avatar: "/avatars/elird.png" },
    { name: "meta", avatar: "/avatars/meta.png" },
    { name: "Helandfur", avatar: "/avatars/hel.png" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-center">Authors</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {authors.map((a) => (
            <div key={a.name} className="flex flex-col items-center">
              <img
                src={a.avatar}
                alt={a.name}
                className="w-20 h-20 rounded-full border-2 border-white shadow-md"
              />
              <span className="mt-2 text-sm font-medium">{a.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
