"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Artist account created successfully.");
    }
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <h1 className="text-4xl font-bold mb-6">Artist Portal</h1>

        <input
          type="email"
          placeholder="Artist Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-4 rounded-xl bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-4 rounded-xl bg-zinc-800"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-yellow-500 text-black p-4 rounded-xl mb-4 font-bold"
        >
          Register Artist
        </button>

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black p-4 rounded-xl font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
