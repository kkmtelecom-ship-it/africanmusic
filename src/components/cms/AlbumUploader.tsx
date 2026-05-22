"use client";

export default function ArtistUploader() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#111111] p-10">
      <h2 className="mb-4 text-3xl font-bold text-white">
        Artist Upload Portal
      </h2>

      <input
        type="text"
        placeholder="Artist Name"
        className="mb-4 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
      />

      <input
        type="file"
        className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white"
      />
    </div>
  );
}
