"use client"

import { useState } from "react"
import { MapPin, Navigation } from "lucide-react"

interface MapComponentProps {
  address: string
  lat: number
  lng: number
}

const MapComponent = ({ address, lat, lng }: MapComponentProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const encodedAddress = encodeURIComponent(address)

  // Create a simple iframe embed that's guaranteed to work
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <div className="relative w-full h-[400px]">
        {/* Fallback image while iframe loads */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
            <MapPin size={40} className="text-welding-orange mb-2" />
            <p className="text-gray-500">Loading map...</p>
          </div>
        )}

        {/* Google Maps iframe - simple and reliable */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.1536567239936!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ed505e0f3b%3A0x1e0a0d2a709beffc!2s${encodedAddress}!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing location of ${address}`}
          aria-label={`Map showing the location of ${address}`}
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "opacity-100" : "opacity-0"}
        ></iframe>
      </div>

      {/* Map footer with address and directions link */}
      <div className="p-4 flex justify-between items-center bg-white">
        <p className="text-gray-700">{address}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-welding-orange hover:underline"
        >
          <Navigation size={16} className="mr-1" />
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default MapComponent
