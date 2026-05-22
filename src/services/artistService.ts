import { artists } from "@/lib/artists";

export async function getArtists() {
  return artists;
}

export async function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}
