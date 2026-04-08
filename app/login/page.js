// app/login/page.js
import Link from "next/link";

export default function LoginPage() {
  return (
    // Uses your primary light green background
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center p-4">
      
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <div className="text-center mb-8">
          {/* Uses your custom font and secondary dark green */}
          <h1 className="font-romens text-4xl text-secondary mb-2">Welcome Back</h1>
          <p className="text-neutral">Log in to track your habits</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-secondary font-medium mb-2">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-secondary font-medium mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-neutral focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-neutral mt-6">
          Don't have an account? <Link href="/signup" className="text-secondary font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}