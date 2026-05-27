import artists from "@/lib/artists";

export function getRecommendedArtists(genre: string) {
  return artists.filter((artist) =>
    artist.genre.toLowerCase().includes(genre.toLowerCase()),
  );
}
