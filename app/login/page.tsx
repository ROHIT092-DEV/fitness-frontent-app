"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
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
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl gap-10">
        {/* Left side branding */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">MyGYM</h1>
          <p className="text-xl text-gray-700">
            Track your workouts, manage your goals, and stay motivated every day with your GYM dashboard.
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to your account</h2>

          <form onSubmit={handleUserLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500"
              required
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-sm focus:ring-1 focus:ring-blue-500"
              required
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md"
            >
              Log In
            </Button>
          </form>

          <div className="mt-4 text-sm text-center">
            Don not have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
