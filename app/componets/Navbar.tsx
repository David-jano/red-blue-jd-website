"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left section (Desktop: hamburger + link1 + link2 | Mobile: Logo) */}
        <div className="flex items-center space-x-4">
          {/* Mobile: Logo only */}
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop: Hamburger + Link1 + Link2 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dropdown Hamburger */}
            <div className="relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle dropdown"
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              {/* Dropdown (Desktop only) */}
              {isMobileMenuOpen && (
                <div className="absolute bg-white mt-2 py-2 w-40 rounded shadow z-20">
                  <Link href="/dropdown1" className="block px-4 py-2 text-black hover:bg-gray-100">
                    IMYIDAGADURO
                  </Link>
                  <Link href="/dropdown2" className="block px-4 py-2 text-black hover:bg-gray-100">
                    IBIGANIRO
                  </Link>
                  <Link href="/dropdown3" className="block px-4 py-2 text-black hover:bg-gray-100">
                    UBUMENYI
                  </Link>
                </div>
              )}
            </div>

            {/* Link1 + Link2 */}
            <Link href="/" className="hover:text-blue-400">AHABANZA</Link>
            <Link href="/link2" className="hover:text-blue-400">ABO TURIBO</Link>
          </div>
        </div>

        {/* Center logo (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/video" className="hover:text-blue-400">VIDEO</Link>
          <Link href="/ishuri" className="hover:text-blue-400">ISHURI</Link>
          <Link href="/twandikire" className="hover:text-blue-400 bg-gray-900 px-5 py-2 rounded-sm">TWANDIKIRE</Link>
        </div>

        {/* Mobile: Hamburger button (top right) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown: Full Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <Link href="/" className="block text-white hover:text-blue-400">AHABANZA</Link>
          <Link href="/" className="block text-white hover:text-blue-400">ABO TURIBO</Link>
          <Link href="./VIDEO" className="block text-white hover:text-blue-400">VIDEO</Link>
          <Link href="/" className="block text-white hover:text-blue-400">ISHURI</Link>
          <Link href="/" className="block text-white hover:text-blue-400">TWANDIKIRE</Link>
          <Link href="/" className="block text-white hover:text-blue-400">IMYIDAGADURO</Link>
          <Link href="/" className="block text-white hover:text-blue-400">IBIGANIRO</Link>
          <Link href="/" className="block text-white hover:text-blue-400">UBUMENYI</Link>
        </div>
      )}
    </nav>
  );
}
