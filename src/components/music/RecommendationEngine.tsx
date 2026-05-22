interface Recommendation {
  title: string;
  genre: string;
}

const recommendations: Recommendation[] = [
  {
    title: "Afro Future Vol. 1",
    genre: "Amapiano",
  },
  {
    title: "Midnight Lagos",
    genre: "Afro Fusion",
  },
  {
    title: "Deep African House",
    genre: "Afro House",
  },
];

export default function RecommendationEngine() {
  return (
    <section className="mt-32">
      <div className="mb-10">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#c6a972]">
          AI Recommendations
        </p>

        <h2 className="text-5xl font-black text-white">Recommended For You</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[28px]
              border
              border-white/10
              bg-[#101010]
              p-8
            "
          >
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>

            <p className="mt-3 text-white/50">{item.genre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
