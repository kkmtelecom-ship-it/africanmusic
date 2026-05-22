"use client";

import { CldUploadWidget } from "next-cloudinary";
import { supabase } from "@/lib/supabase";

export default function UploadPage() {
  const handleUpload = async (result: any) => {
    try {
      console.log("UPLOAD RESULT:", result);

      const uploadedFile = result?.info;

      if (!uploadedFile) {
        alert("Upload failed.");
        return;
      }

      const mediaUrl = uploadedFile.secure_url;
      const cloudinaryId = uploadedFile.public_id;
      const format = uploadedFile.format;
      const originalName = uploadedFile.original_filename;

      console.log("Saving to database...");

      const { data, error } = await supabase.from("tracks").insert([
        {
          title: originalName || "Untitled Track",
          slug:
            originalName?.toLowerCase().replace(/\s+/g, "-") ||
            "untitled-track",

          media_url: mediaUrl,

          cloudinary_id: cloudinaryId,

          genre: "African",

          artist_name: "Demo Artist",

          description: "Uploaded from AfricanMusic Dashboard",
        },
      ]);

      console.log("DATABASE RESPONSE:", data);
      console.log("DATABASE ERROR:", error);

      if (error) {
        alert(`Database save failed: ${error.message}`);
        return;
      }

      alert("Upload + database save successful");
    } catch (err: any) {
      console.error(err);
      alert("Unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Upload Music Content</h1>

        <p className="text-zinc-400 mb-10">
          Upload tracks, album covers, videos, and merchandise media.
        </p>

        <CldUploadWidget
          uploadPreset="africanmusic"
          onSuccess={(result) => handleUpload(result)}
        >
          {({ open }) => {
            return (
              <button
                onClick={() => open()}
                className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
              >
                Upload Media
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
}
