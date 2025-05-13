"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/images/careerflyer.jpg",
    alt: "MRONCY School of Welding Career Flyer",
    title: "Career Opportunities",
  },
  {
    src: "/images/certified-professionals-flyer.png",
    alt: "MRONCY Certified Professionals Flyer",
    title: "Certified Professionals",
  },
  {
    src: "/images/welding-services-flyer.jpeg",
    alt: "MRONCY Welding & Fabrication Services",
    title: "Welding Services",
  },
]

const AboutTeaser = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState(0)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Auto-rotate images when not hovering
  useEffect(() => {
    if (!isHovering && !showModal) {
      autoRotateRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 4000)
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
        autoRotateRef.current = null
      }
    }
  }, [isHovering, showModal])

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const openModal = (index: number) => {
    setModalImage(index)
    setShowModal(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  const nextModalImage = () => {
    setModalImage((prev) => (prev + 1) % images.length)
  }

  const prevModalImage = () => {
    setModalImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showModal) return

      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") nextModalImage()
      if (e.key === "ArrowLeft") prevModalImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showModal])

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal()
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showModal])

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-steel-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-welding-orange/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal(currentImage)}
            role="button"
            aria-label="View flyer gallery"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(currentImage)
              }
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${isHovering ? "scale-110" : "scale-100"}`}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">{images[currentImage].title}</h3>
              <p className="text-white/90 text-sm">Click to view full flyer</p>
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation() // Prevent opening modal when clicking indicators
                    setCurrentImage(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index ? "bg-welding-orange" : "bg-white/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
            <h2 className="section-title animate-fade-in">About MRONCY School of Welding</h2>
            <p className="text-gray-700 mb-6 animate-fade-in">
              MRONCY School of Welding & Fabrication Engineering is dedicated to providing comprehensive training that
              combines practical welding skills with essential business knowledge.
            </p>
            <p className="text-gray-700 mb-6 animate-fade-in">
              Our mission is to be Zimbabwe's premier welding training center through excellence, innovation, and
              practical education that transforms lives and builds successful careers and businesses.
            </p>
            <Link
              href="/about"
              className="btn-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg group flex items-center w-fit"
            >
              Learn More
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for full-size flyer view */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden animate-slide-up"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeModal()
                }}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative h-[80vh] w-full">
              <Image
                src={images[modalImage].src || "/placeholder.svg"}
                alt={images[modalImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevModalImage()
                }}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextModalImage()
                }}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setModalImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    modalImage === index ? "bg-welding-orange scale-125" : "bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutTeaser
