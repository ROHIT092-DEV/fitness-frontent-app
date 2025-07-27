"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    const res = await fetch(
      "https://authentication-microservice-6cyp.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Login failed: ${errorData.message}`);
      return;
    }

    const data = await res.json();
    loginUser(data);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-pink-200 dark:border-gray-700 transition-all">
        <h1 className="text-3xl font-bold text-center text-pink-600 dark:text-white mb-6">
          Welcome Back 💖
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6 dark:text-gray-400">
          Please login to continue to your dashboard
        </p>

        <form onSubmit={handleUserLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-pink-50 focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-pink-50 focus:ring-2 focus:ring-pink-400 dark:bg-gray-800 dark:focus:ring-pink-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition-all duration-200 text-white font-semibold py-2 rounded-xl"
          >
            Log In
          </Button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-pink-600 font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
