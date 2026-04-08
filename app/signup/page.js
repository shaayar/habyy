// app/signup/page.js
"use client"; // Required for interactivity

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setError("");

    // Send the data to your Next.js backend API
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      // Success! Redirect the user to the login page
      router.push("/login");
    } else {
      // Show the error message from the backend
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="font-romens text-4xl text-secondary mb-2">Create Account</h1>
          <p className="text-neutral">Start tracking your habits today</p>
        </div>

        {/* Display error messages if there are any */}
        {error && <p className="text-tertiary bg-tertiary/10 p-3 rounded text-center mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-secondary font-medium mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-secondary font-medium mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-neutral mt-6">
          Already have an account? <Link href="/login" className="text-secondary font-medium hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}