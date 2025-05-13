"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Flame,
  Award,
  Briefcase,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Zap,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react"

const highlights = [
  {
    icon: <Flame size={40} className="text-welding-orange" />,
    title: "Practical Skills",
    description: "Hands-on training with industry-standard equipment and real-world welding techniques.",
  },
  {
    icon: <Award size={40} className="text-welding-orange" />,
    title: "Business Knowledge",
    description: "Learn how to start and grow your own welding business or training school.",
  },
  {
    icon: <Briefcase size={40} className="text-welding-orange" />,
    title: "Career Opportunities",
    description: "Connect with top clients and access high-paying welding and fabrication jobs.",
  },
  {
    icon: <DollarSign size={40} className="text-welding-orange" />,
    title: "Affordable Investment",
    description: "Just $200 for a comprehensive 2-month program with potential to earn $3K-$4K monthly.",
  },
  {
    icon: <Zap size={40} className="text-welding-orange" />,
    title: "Fast-Track Learning",
    description: "Accelerated programs designed to get you job-ready in the shortest time possible.",
  },
  {
    icon: <Users size={40} className="text-welding-orange" />,
    title: "Industry Connections",
    description: "Network with industry professionals and potential employers during your training.",
  },
  {
    icon: <GraduationCap size={40} className="text-welding-orange" />,
    title: "Recognized Certification",
    description: "Earn certifications that are recognized by employers throughout Southern Africa.",
  },
  {
    icon: <Globe size={40} className="text-welding-orange" />,
    title: "Global Opportunities",
    description: "Develop skills that can open doors to international welding career opportunities.",
  },
]

const KeyHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(4)
  const [autoScrollActive, setAutoScrollActive] = useState(false)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
      return nextIndex >= highlights.length - visibleItems + 1 ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? Math.max(0, highlights.length - visibleItems) : prevIndex - 1
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
    setScrollLeft(currentIndex * (100 / visibleItems))
    stopAutoScroll()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 0.5 // Adjust scrolling speed
    const newScrollLeft = scrollLeft - walk / (100 / visibleItems)

    // Clamp the scroll position
    const maxScroll = Math.max(0, highlights.length - visibleItems)
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/50 to-light-grey/50"></div>

      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-12 animate-fade-in">Why Choose MRONCY School of Welding</h2>

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
              aria-label="Previous highlights"
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
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-1/2 lg:w-1/4 p-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md text-center transition-all duration-500 hover:shadow-xl transform hover:scale-105 h-full flex flex-col">
                    <div className="flex justify-center mb-4 transition-transform duration-500 hover:scale-110 hover:text-welding-orange">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-steel-blue">{highlight.title}</h3>
                    <p className="text-gray-700 flex-grow">{highlight.description}</p>
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
              aria-label="Next highlights"
            >
              <ChevronRight size={24} className="text-steel-blue" />
            </button>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(highlights.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleItems)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems
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

export default KeyHighlights
