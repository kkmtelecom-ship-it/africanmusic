export async function fetchArtistMedia(artist: string) {
  return {
    artist,
    spotify: `https://open.spotify.com/search/${artist}`,
    youtube: `https://youtube.com/results?search_query=${artist}`,
    instagram: `https://instagram.com/${artist}`,
  };
}
