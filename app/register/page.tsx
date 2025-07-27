"use client";
import React from "react";

function Register() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !address || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    const res = await fetch("https://authentication-microservice-6cyp.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password, address, phoneNumber, dateOfBirth }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(`Registration failed: ${errorData.message}`);
      return;
    }

    const data = await res.json();
    alert("Registration successful! Please login to continue.");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-1">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Start your fitness journey today
        </p>

        <form onSubmit={handleRegisterUser} className="space-y-5">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200 shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
