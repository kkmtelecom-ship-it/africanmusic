import artists from "@/data/artists";
import ArtistCard from "@/components/cards/ArtistCard";

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-[900px]">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#f6a972]">
            African Music Universe
          </p>

          <h1 className="text-[4rem] font-black leading-none tracking-tight">
            Featured Artists
          </h1>

          <p className="mt-6 max-w-[700px] text-xl leading-relaxed text-white/70">
            Explore Africa’s most influential artists shaping the future of
            music, culture, and global sound.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </main>
  );
}
