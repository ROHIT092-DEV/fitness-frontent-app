"use client";

import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell, Grid2X2, File, Box, Mail } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const navItems = [
    { href: "/product", label: "Product", icon: <Box className="h-4 w-4" /> },
    { href: "/trainers", label: "Trainers", icon: <Dumbbell className="h-4 w-4" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="160"
              height="50"
              viewBox="0 0 400 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[160px] md:w-[180px]"
            >
              <text
                x="0"
                y="70"
                fontFamily="Segoe UI, sans-serif"
                fontSize="60"
                fontWeight="900"
                fill="url(#grad1)"
              >
                IronCore
              </text>
              <text
                x="260"
                y="70"
                fontFamily="Segoe UI, sans-serif"
                fontSize="24"
                fontWeight="600"
                fill="#666"
              >
                Fitness
              </text>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="400" y2="0">
                  <stop offset="0%" stopColor="#ff416c" />
                  <stop offset="100%" stopColor="#ff4b2b" />
                </linearGradient>
              </defs>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link href="/admin" className="flex items-center space-x-2 bg-gradient-to-b from-pink-100 to-pink-200 px-3 py-2 rounded">
                <File className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </Link>
            )}
            {user ? (
              <span className="text-sm font-medium text-primary bg-pink-200 px-4 py-1 rounded">
                {user.firstName}
              </span>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Grid2X2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden px-2 pt-4 pb-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-base font-medium hover:bg-muted hover:text-primary transition-colors bg-gray-200 rounded flex items-center"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              {user && user.role === "admin" && (
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 bg-pink-100 px-4 py-2 rounded"
                >
                  <File className="w-4 h-4" />
                  <span className="text-sm">Dashboard</span>
                </Link>
              )}
              {user ? (
                <div className="flex justify-between items-center bg-yellow-100 px-4 py-2 rounded">
                  <span className="text-sm font-medium">{user.firstName}</span>
                  <button className="text-sm text-red-600" onClick={logout}>Logout Button</button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">Login</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
