"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaVideo,
  FaBook,
  FaSchool,
  FaEnvelope,
  FaLaughBeam,
  FaComments,
  FaBookOpen,
  FaHeartbeat,
  FaUserFriends,
  FaPaintBrush,
  FaShoppingBag,
  FaFolder,
  FaFlask,
} from "react-icons/fa";

export default function Navbar() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isLinksMoved, setIsLinksMoved] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false); // State for desktop dropdown
  const menuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
  const desktopHamburgerRef = useRef<HTMLButtonElement | null>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      
      // Close desktop dropdown
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node) &&
        !desktopHamburgerRef.current?.contains(event.target as Node)
      ) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll to animate links and fade-in text
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTextVisible(true);
        setIsLinksMoved(true);
      } else {
        setIsTextVisible(false);
        setIsLinksMoved(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black text-white shadow-md px-6 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          {/* Desktop Hamburger Button (Visible on medium and large screens) */}
          <div className="hidden md:block">
            <button
              ref={desktopHamburgerRef}
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              aria-label="Toggle desktop dropdown menu"
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isDesktopDropdownOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={60} height={60} priority />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6" ref={menuRef}>
            <Link href="/" className="hover:text-blue-400 flex items-center gap-2">
              <FaHome /> AHABANZA
            </Link>
            <Link href="/aboturibo" className="hover:text-blue-400 flex items-center gap-2">
              <FaInfoCircle /> ABO TURIBO
            </Link>
            <Link href="/video" className="hover:text-blue-400 flex items-center gap-2">
              <FaVideo /> VIDEO
            </Link>
          </div>
        </div>

        {/* Center Logo for Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={60} height={60} priority />
          </Link>
        </div>

        {/* Fade-in Text for Scroll */}
        <span
          className={`absolute top-3 left-140 transform -translate-x-1/2 text-white font-bold text-sm transition-opacity duration-1000 ease-in-out ${isTextVisible ? "opacity-80" : "opacity-0"}`}
        >
          RedBlue Jd
        </span>

        {/* Right Section for Desktop with smooth transition */}
        <div
          className={`hidden md:flex items-center space-x-4 transition-all duration-700 ease-in-out ${isLinksMoved ? "translate-x-10 opacity-100" : "translate-x-0 opacity-100"}`}
        >
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

        {/* Mobile Hamburger (Visible on mobile only) */}
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

      {/* Desktop Dropdown Menu (For medium and large screens) */}
      <div
        ref={desktopDropdownRef}
        className={`hidden md:block absolute top-14 left-80 bg-white mt-2 py-2 w-56 rounded shadow z-20 transition-all duration-300 ease-in-out ${isDesktopDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <Link href="/imyidagaduro" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaFolder /> AMATEKA
        </Link>
        <Link href="/ibiganiro" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaFlask /> SIYANSE
        </Link>
        <Link href="/ibitabo" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaBookOpen /> IBITABO
        </Link>
        <Link href="/ubuzima" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaHeartbeat /> UBUZIMA
        </Link>
        <Link href="/ubumenyamuntu" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaUserFriends /> UBUMENYA-MUNTU
        </Link>
        <Link href="/ubugeni" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaPaintBrush /> UBUGENI
        </Link>
          <Link href="/ibyegeranyo" className="flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100">
          <FaBook /> IBYEGERANYO
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden mt-4 space-y-3 px-4 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
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
      </div>
    </nav>
  );
}