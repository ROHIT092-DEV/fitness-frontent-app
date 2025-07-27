import React from "react";
import Link from "next/link";
import { Dumbbell, User, Activity, Star } from "lucide-react";

export default function Landing() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text">
          Build Your Best Body with IronCore
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join the ultimate fitness revolution and get personalized workout plans, expert trainers, and progress tracking — all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/register">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transition">
              Get Started
            </button>
          </Link>
          <Link href="/product">
            <button className="px-6 py-3 border border-pink-600 text-pink-600 dark:text-pink-400 font-semibold rounded-full hover:bg-pink-50 dark:hover:bg-gray-800 transition">
              Explore Products
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose IronCore?</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <Dumbbell className="text-pink-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get guidance from certified professionals to tailor your workouts and nutrition for max results.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <User className="text-pink-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you are a beginner or a pro, we design your workout to fit your goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <Activity className="text-pink-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See your gains, monitor your performance, and stay motivated with real stats.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <Star className="text-pink-500 w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top-rated Products</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Shop from our premium-quality gym gear and supplements trusted by athletes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <img src="/images/secure.svg" alt="secure" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We ensure secure payments, user data protection, and 24/7 support.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
              <img src="/images/community.svg" alt="community" className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Be a part of our inspiring fitness community. Share goals, results, and celebrate wins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
