const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;

const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

async function getSpotifyAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",

      Authorization:
        "Basic " +
        Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
          "base64",
        ),
    },

    body: "grant_type=client_credentials",
  });

  return response.json();
}

export async function searchArtist(artistName: string) {
  const tokenData = await getSpotifyAccessToken();

  const accessToken = tokenData.access_token;

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      artistName,
    )}&type=artist&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const data = await response.json();

  const artist = data.artists.items[0];

  if (!artist) {
    return null;
  }

  return {
    id: artist.id,
    name: artist.name,
    followers: artist.followers.total,
    genres: artist.genres,
    image: artist.images?.[0]?.url || "",
    spotifyUrl: artist.external_urls.spotify,
    popularity: artist.popularity,
  };
}
