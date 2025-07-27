"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext"; // ✅ Import the context

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { loginUser } = useContext(AuthContext); // ✅ Get login method from context

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    const res = await fetch("https://authentication-microservice-6cyp.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Login failed: ${errorData.message}`);
      return;
    }

    const data = await res.json();

    loginUser(data); // ✅ Call login from context
    router.push("/");
    console.log("Login successful:", data);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button onClick={handleUserLogin}>Submit</Button>
    </div>
  );
}

export default Login;
