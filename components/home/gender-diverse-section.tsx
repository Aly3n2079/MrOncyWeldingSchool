"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600&text=Male+Welder+Working+on+Metal+Project",
    alt: "Male welder working on a metal project",
    title: "Skilled Craftsmanship",
    description: "Developing precision and expertise in welding techniques",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Female+Welder+in+Workshop",
    alt: "Female welder working on a metal project",
    title: "Breaking Barriers",
    description: "Women are making their mark in the welding industry",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Diverse+Team+of+Welders+Collaborating",
    alt: "Diverse team of welders collaborating",
    title: "Collaborative Learning",
    description: "Our diverse environment fosters teamwork and innovation",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Welding+Student+Learning+Techniques",
    alt: "Welding student learning techniques",
    title: "Hands-on Training",
    description: "Students learn by doing with expert guidance",
  },
  {
    src: "/placeholder.svg?height=400&width=600&text=Welding+Certification+Process",
    alt: "Welding certification process",
    title: "Industry Certification",
    description: "Our programs lead to recognized qualifications",
  },
]

const GenderDiverseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [autoScrollActive, setAutoScrollActive] = useState(false)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle auto-scrolling on hover
  const startAutoScroll = (direction: "left" | "right") => {
    stopAutoScroll() // Clear any existing interval

    setAutoScrollActive(true)

    // Use a timeout to add a small delay before starting continuous scrolling
    autoScrollTimeoutRef.current = setTimeout(() => {
      scrollInterval.current = setInterval(() => {
        if (direction === "left") {
          prevSlide()
        } else {
          nextSlide()
        }
      }, 1000) // Scroll every second when in auto-scroll mode
    }, 300) // Small delay before starting continuous scrolling
  }

  const stopAutoScroll = () => {
    setAutoScrollActive(false)

    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current)
      autoScrollTimeoutRef.current = null
    }

    if (scrollInterval.current) {
      clearInterval(scrollInterval.current)
      scrollInterval.current = null
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= images.length - 2 ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? Math.max(0, images.length - 3) : prevIndex - 1
    })
  }

  const handleMouseEnter = (area: "left" | "right") => {
    setIsScrolling(true)
    setScrollDirection(area)
    startAutoScroll(area)
  }

  const handleMouseLeave = () => {
    setIsScrolling(false)
    setScrollDirection(null)
    stopAutoScroll()
  }

  // Mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(currentIndex * 33.333)
    stopAutoScroll()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 0.5 // Adjust scrolling speed
    const newScrollLeft = scrollLeft - walk / 33.333

    // Clamp the scroll position
    const maxScroll = Math.max(0, images.length - 3)
    const clampedScroll = Math.max(0, Math.min(maxScroll, newScrollLeft))

    setCurrentIndex(Math.round(clampedScroll))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeaveContainer = () => {
    setIsDragging(false)
    handleMouseLeave()
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
    stopAutoScroll()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return

    const touchX = e.touches[0].clientX
    const diff = touchStartX - touchX

    if (Math.abs(diff) > 50) {
      // Threshold to detect swipe
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setTouchStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(null)
  }

  return (
    <section className="py-16 bg-light-grey relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-welding-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel-blue/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-6 animate-fade-in">Welding is for Everyone</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-in">
          At MRONCY School of Welding, we believe in equal opportunities for all. Our programs welcome both men and
          women who are passionate about building a career in welding and fabrication.
        </p>

        <div className="relative">
          {/* Left scroll trigger area */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 z-20 flex items-center justify-start ${
              scrollDirection === "left" && autoScrollActive ? "bg-gradient-to-r from-light-grey/60 to-transparent" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={prevSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 ml-2 ${
                scrollDirection === "left" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-steel-blue" />
            </button>
          </div>

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeaveContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isDragging ? "transition-none" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 p-4" style={{ width: "33.333%" }}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg group h-64 transition-all duration-500 hover:shadow-xl transform hover:scale-105">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                      <h3 className="font-bold text-lg">{image.title}</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll trigger area */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 z-20 flex items-center justify-end ${
              scrollDirection === "right" && autoScrollActive
                ? "bg-gradient-to-l from-light-grey/60 to-transparent"
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={nextSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 mr-2 ${
                scrollDirection === "right" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-steel-blue" />
            </button>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex >= index * 3 && currentIndex < (index + 1) * 3
                    ? "bg-welding-orange w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderDiverseSection
