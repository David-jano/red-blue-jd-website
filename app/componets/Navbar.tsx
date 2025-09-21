"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaVideo,
  FaSchool,
  FaEnvelope,
  FaLaughBeam,
  FaComments,
  FaBookOpen,
  FaHeartbeat,
  FaUserFriends,
  FaPaintBrush,
  FaShoppingBag,
} from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white shadow-md px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Logo */}
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4" ref={menuRef}>
            {/* Dropdown Hamburger */}
            <div className="relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle dropdown"
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Dropdown Links */}
              {isMobileMenuOpen && (
                <div className="absolute bg-white mt-2 py-2 w-56 rounded shadow z-20">
                  <Link href="/dropdown1" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaLaughBeam /> IMYIDAGADURO
                  </Link>
                  <Link href="/dropdown2" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaComments /> IBIGANIRO
                  </Link>
                  <Link href="/dropdown3" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaBookOpen /> IBITABO
                  </Link>
                  <Link href="/dropdown4" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaHeartbeat /> UBUZIMA
                  </Link>
                  <Link href="/dropdown5" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaUserFriends /> UMUNYA-MUNTU
                  </Link>
                  <Link href="/dropdown6" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
                    <FaPaintBrush /> UBUGENI
                  </Link>
                </div>
              )}
            </div>

            {/* Static Desktop Links */}
            <Link href="/" className="hover:text-blue-400 flex items-center gap-2">
              <FaHome /> AHABANZA
            </Link>
            <Link href="/aboturibo" className="hover:text-blue-400 flex items-center gap-2">
              <FaInfoCircle /> ABO TURIBO
            </Link>
          </div>
        </div>

        {/* Center Logo for Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
          </Link>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/video" className="hover:text-blue-400 flex items-center gap-2">
            <FaVideo /> VIDEO
          </Link>
          <Link href="/igiciro" className="hover:text-blue-400 flex items-center gap-2">
            <FaShoppingBag /> IGURIRO
          </Link>
          <Link href="/ubumenyi" className="hover:text-blue-400 flex items-center gap-2">
            <FaBookOpen /> UBUMENYI
          </Link>
          <Link href="/ishuri" className="hover:text-blue-400 flex items-center gap-2">
            <FaSchool /> ISHURI
          </Link>
          <Link
            href="/twandikire"
            className="hover:text-black bg-amber-600 px-5 py-2 rounded-sm flex items-center gap-2"
          >
            <FaEnvelope /> TWANDIKIRE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden" ref={menuRef}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4" ref={menuRef}>
          <Link href="/" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaHome /> AHABANZA
          </Link>
          <Link href="/aboturibo" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaInfoCircle /> ABO TURIBO
          </Link>
          <Link href="/video" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaVideo /> VIDEO
          </Link>
          <Link href="/ishuri" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaSchool /> ISHURI
          </Link>
          <Link href="/twandikire" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaEnvelope /> TWANDIKIRE
          </Link>
          <Link href="/imyidagaduro" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaLaughBeam /> IMYIDAGADURO
          </Link>
          <Link href="/ibiganiro" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaComments /> IBIGANIRO
          </Link>
          <Link href="/ubumenyi" className="block text-white hover:text-blue-400 flex items-center gap-2">
            <FaBookOpen /> UBUMENYI
          </Link>
        </div>
      )}
    </nav>
  );
}
