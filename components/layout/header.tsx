"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
        setIsTop(false)
      } else {
        setScrolled(false)
        setIsTop(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-md" : "py-4 bg-white"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative overflow-hidden transition-all duration-300 ease-in-out">
            <Image
              src="/images/ico2.png"
              alt="MRONCY School of Welding & Fabrication Engineering"
              width={scrolled ? 130 : 150}
              height={scrolled ? 52 : 60}
              className="h-auto transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/courses")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Programs
          </Link>
          <Link
            href="/admissions"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/admissions")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Admissions
          </Link>
          <Link
            href="/gallery"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/gallery")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/contact")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/about")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/admissions"
            className={`btn-primary transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
              scrolled ? "py-2 px-4" : "py-3 px-6"
            }`}
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-steel-blue transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 z-50 animate-slide-down">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/courses")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/admissions")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/gallery"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/gallery")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/contact")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-2 pl-2 border-l-2 ${
                isActive("/about")
                  ? "border-welding-orange text-welding-orange"
                  : "border-transparent hover:border-welding-orange"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link href="/admissions" className="btn-primary text-center mt-2" onClick={() => setIsMenuOpen(false)}>
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
