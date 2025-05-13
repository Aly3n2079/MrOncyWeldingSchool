"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample images for courses
const courseImages = [
  "/images/welding-business.jpg",
  "/images/welding-school.jpg",
  "/images/business-planning.jpg",
  "/images/marketing.jpg",
  "/images/sales.jpg",
  "/images/operations.jpg",
]

const courses = [
  {
    id: "welding-business",
    title: "How to Start a Welding Business",
    description: "Learn the essentials of launching and running a successful welding business from the ground up.",
    duration: "2 Weeks",
    image: courseImages[0] || "/placeholder.svg?height=300&width=500&text=Welding+Business+Setup",
  },
  {
    id: "welding-school",
    title: "How to Start a Welding Private School",
    description: "Discover how to establish your own welding training center and create additional income streams.",
    duration: "2 Weeks",
    image: courseImages[1] || "/placeholder.svg?height=300&width=500&text=Welding+School+Management",
  },
  {
    id: "business-planning",
    title: "Welding Business Planning and Strategy",
    description: "Develop comprehensive business plans and strategic approaches for welding enterprises.",
    duration: "2 Weeks",
    image: courseImages[2] || "/placeholder.svg?height=300&width=500&text=Business+Strategy+Workshop",
  },
  {
    id: "marketing",
    title: "Marketing for Welding Businesses",
    description: "Master effective marketing techniques specifically tailored for welding and fabrication businesses.",
    duration: "1 Week",
    image: courseImages[3] || "/placeholder.svg?height=300&width=500&text=Welding+Marketing+Strategies",
  },
  {
    id: "sales",
    title: "Welding Sales and Customer Service",
    description: "Learn how to attract clients, close deals, and provide exceptional service in the welding industry.",
    duration: "1 Week",
    image: courseImages[4] || "/placeholder.svg?height=300&width=500&text=Welding+Sales+Techniques",
  },
  {
    id: "operations",
    title: "Welding Shop Operations and Management",
    description: "Master the day-to-day operations and efficient management of a welding workshop or facility.",
    duration: "2 Weeks",
    image: courseImages[5] || "/placeholder.svg?height=300&width=500&text=Workshop+Operations+Management",
  },
]

const FeaturedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [autoScrollActive, setAutoScrollActive] = useState(false)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse position tracking for hover-based scrolling
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setHoverPosition({ x, y })

    // Determine scroll direction based on mouse position
    const scrollThreshold = 0.2 // 20% from each edge triggers scrolling
    const leftThreshold = rect.width * scrollThreshold
    const rightThreshold = rect.width * (1 - scrollThreshold)

    if (x < leftThreshold) {
      if (scrollDirection !== "left") {
        setScrollDirection("left")
        startAutoScroll("left")
      }
    } else if (x > rightThreshold) {
      if (scrollDirection !== "right") {
        setScrollDirection("right")
        startAutoScroll("right")
      }
    } else {
      if (scrollDirection !== null) {
        setScrollDirection(null)
        stopAutoScroll()
      }
    }
  }

  const handleMouseEnter = () => {
    setIsScrolling(true)
  }

  const handleMouseLeave = () => {
    setIsScrolling(false)
    setScrollDirection(null)
    setHoverPosition(null)
    stopAutoScroll()
  }

  // Start auto-scrolling based on direction
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
      return nextIndex >= courses.length - visibleItems + 1 ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? Math.max(0, courses.length - visibleItems) : prevIndex - 1
    })
  }

  // Mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(currentIndex * (100 / visibleItems))
    stopAutoScroll()
  }

  const handleMouseMoveWhileDragging = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 0.5 // Adjust scrolling speed
    const newScrollLeft = scrollLeft - walk / (100 / visibleItems)

    // Clamp the scroll position
    const maxScroll = Math.max(0, courses.length - visibleItems)
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
    <section className="py-16 relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-light-grey opacity-50"></div>

      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-4 animate-fade-in">Our Comprehensive Programs</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in">
          Our industry-focused programs provide both practical welding skills and business knowledge to launch your
          career or business in the welding industry.
        </p>

        <div className="relative">
          {/* Left scroll trigger area - visible */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 z-20 flex items-center justify-start ${
              scrollDirection === "left" && autoScrollActive ? "bg-gradient-to-r from-white/40 to-transparent" : ""
            }`}
            onMouseEnter={() => {
              setScrollDirection("left")
              startAutoScroll("left")
            }}
            onMouseLeave={() => {
              setScrollDirection(null)
              stopAutoScroll()
            }}
          >
            <button
              onClick={prevSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 ml-2 ${
                scrollDirection === "left" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Previous course"
            >
              <ChevronLeft size={24} className="text-steel-blue" />
            </button>
          </div>

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={isDragging ? handleMouseMoveWhileDragging : handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isDragging ? "transition-none" : ""}`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 p-4"
                  style={{ width: `${100 / visibleItems}%` }}
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div
                    className={`bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 h-full flex flex-col ${isHovering === index ? "shadow-xl transform scale-105" : ""}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className={`object-cover transition-transform duration-500 ${isHovering === index ? "scale-110" : "scale-100"}`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex items-end p-4 ${isHovering === index ? "opacity-100" : "opacity-0"}`}
                      >
                        <span className="text-white font-medium bg-welding-orange px-3 py-1 rounded-full text-sm">
                          Duration: {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-steel-blue">{course.title}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{course.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium bg-light-grey/70 backdrop-blur-sm px-3 py-1 rounded-full">
                          Duration: {course.duration}
                        </span>
                      </div>
                      <Link
                        href={`/courses#${course.id}`}
                        className="btn-primary w-full text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll trigger area - visible */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 z-20 flex items-center justify-end ${
              scrollDirection === "right" && autoScrollActive ? "bg-gradient-to-l from-white/40 to-transparent" : ""
            }`}
            onMouseEnter={() => {
              setScrollDirection("right")
              startAutoScroll("right")
            }}
            onMouseLeave={() => {
              setScrollDirection(null)
              stopAutoScroll()
            }}
          >
            <button
              onClick={nextSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 mr-2 ${
                scrollDirection === "right" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Next course"
            >
              <ChevronRight size={24} className="text-steel-blue" />
            </button>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(courses.length / visibleItems) }).map((_, index) => (
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

        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="btn-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
