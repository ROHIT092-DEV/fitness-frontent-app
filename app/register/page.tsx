'use client';
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex  md:pt-20 md:pb-40 justify-center px-4 py-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 shadow-md rounded-xl border border-gray-200 dark:border-gray-700 p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-white mb-2">
          Register Your Account
        </h1>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          Start your fitness journey today
        </p>

        <form onSubmit={handleRegisterUser} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              required
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="123 Main St, City"
              required
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+123456789"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
