"use client";
import { cn } from "@/lib/utils";
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/product", label: "Product" },
    { href: "/about", label: "About" },
    // { href: "/classes", label: "Classes" },
    // { href: "/membership", label: "Membership" },
    { href: "/trainers", label: "Trainers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              High Fy<span className="text-primary"> Fitness</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="text-xs">
                Admin
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              Login
            </Button>
            {/* <Button size="sm">Join Now</Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-2">
              <Link href="/admin" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Admin Panel
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Login
              </Button>
              {/* <Button size="sm">Join Now</Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
