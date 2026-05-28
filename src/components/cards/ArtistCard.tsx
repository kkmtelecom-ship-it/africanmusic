import Image from "next/image";

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    genre: string;
    monthlyListeners: string;
    verified: boolean;
    image: string;
  };
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] transition duration-500 hover:-translate-y-2 hover:border-[#f6a972]">
      <div className="relative h-[340px] overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-black text-white">{artist.name}</h3>

          {artist.verified && (
            <span className="rounded-full bg-[#f6a972] px-2 py-1 text-xs font-bold text-black">
              VERIFIED
            </span>
          )}
        </div>

        <p className="mt-3 text-[#f6a972]">{artist.genre}</p>

        <p className="mt-2 text-sm text-white/60">
          {artist.monthlyListeners} monthly listeners
        </p>

        <button className="mt-6 rounded-full bg-[#f6a972] px-6 py-3 font-semibold text-black transition hover:scale-105">
          View Artist
        </button>
      </div>
    </div>
  );
}
