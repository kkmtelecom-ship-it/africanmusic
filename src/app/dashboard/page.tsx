"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

interface Track {
  id: number;
  title: string;
  genre: string;
  media_url: string;
  artwork_url: string;
  artist_name: string;
  created_at: string;
}

export default function DashboardPage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetchTracks();
  }, []);

  async function fetchTracks() {
    const { data, error } = await supabase
      .from("tracks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch tracks:", error.message);
    } else {
      setTracks(data || []);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}

      <div className="w-72 bg-zinc-950 border-r border-zinc-800 p-6">
        <h1 className="text-3xl font-bold mb-10 text-yellow-500">
          AFRICANMUSIC
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Dashboard Overview
          </button>

          <button
            onClick={() => router.push("/dashboard/upload")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Upload Music
          </button>

          <button
            onClick={() => router.push("/products")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Upload Merch
          </button>

          <button
            onClick={() => router.push("/artists")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Artist Profile
          </button>

          <button
            onClick={() => alert("Streaming Analytics Coming Soon")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Streaming Analytics
          </button>

          <button
            onClick={() => alert("Subscription System Coming Soon")}
            className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            Subscription Management
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-5xl font-bold mb-4">Artist Dashboard</h2>

        <p className="text-zinc-400 mb-10">
          Manage your music, merchandise, subscriptions, and streaming
          ecosystem.
        </p>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-zinc-400 mb-2">Uploaded Tracks</h3>

            <p className="text-4xl font-bold">{tracks.length}</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-zinc-400 mb-2">Merchandise Sales</h3>

            <p className="text-4xl font-bold">R0</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
            <h3 className="text-zinc-400 mb-2">Monthly Subscribers</h3>

            <p className="text-4xl font-bold">0</p>
          </div>
        </div>

        {/* QUICK ACTIONS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Upload New Track</h3>

            <p className="text-zinc-400 mb-6">
              Publish new streaming content to your audience.
            </p>

            <button
              onClick={() => router.push("/dashboard/upload")}
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Upload Music
            </button>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Upload Merchandise</h3>

            <p className="text-zinc-400 mb-6">
              Sell apparel, fashion, and exclusive products.
            </p>

            <button
              onClick={() => router.push("/products")}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Upload Products
            </button>
          </div>
        </div>

        {/* MEDIA LIBRARY */}

        <div>
          <h3 className="text-3xl font-bold mb-6">Uploaded Music Library</h3>

          {loading ? (
            <div className="text-zinc-400">Loading tracks...</div>
          ) : tracks.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center text-zinc-400">
              No tracks uploaded yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
                >
                  {/* ARTWORK */}

                  {track.artwork_url ? (
                    <img
                      src={track.artwork_url}
                      alt={track.title}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-zinc-800 flex items-center justify-center text-zinc-500">
                      No Artwork
                    </div>
                  )}

                  {/* TRACK INFO */}

                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-2">
                      {track.title || "Untitled Track"}
                    </h4>

                    <p className="text-zinc-400 mb-2">
                      Artist: {track.artist_name || "Unknown Artist"}
                    </p>

                    <p className="text-zinc-400 mb-6">
                      Genre: {track.genre || "Unknown Genre"}
                    </p>

                    {/* AUDIO PLAYER */}

                    {track.media_url && (
                      <audio controls className="w-full">
                        <source src={track.media_url} />
                      </audio>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
