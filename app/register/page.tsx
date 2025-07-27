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
  const [isLoading, setIsLoading] = React.useState(false);

  const isFormInvalid =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !address ||
    !phoneNumber ||
    !dateOfBirth ||
    phoneNumber.length !== 10;

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormInvalid) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://authentication-microservice-6cyp.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          address,
          phoneNumber, // ✅ No +91 prefix here
          dateOfBirth,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Registration failed: ${errorData.message}`);
        return;
      }

      alert("Registration successful! Please login to continue.");
      window.location.href = "/login";
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+91</span>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d{0,10}$/.test(val)) {
                    setPhoneNumber(val);
                  }
                }}
                className="w-full pl-12 pr-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isFormInvalid || isLoading}
            className={`w-full py-3 font-semibold rounded-md transition duration-200 shadow-md ${
              isFormInvalid || isLoading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading ? "Creating Account..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
