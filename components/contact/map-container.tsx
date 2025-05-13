"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { MapPin } from "lucide-react"

// Dynamically import the map component with no SSR
const MapComponent = dynamic(() => import("@/components/contact/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <MapPin size={40} className="text-welding-orange mb-2" />
        <div className="text-gray-500">Loading map...</div>
      </div>
    </div>
  ),
})

interface MapContainerProps {
  address: string
  lat: number
  lng: number
}

export default function MapContainer({ address, lat, lng }: MapContainerProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <MapPin size={40} className="text-welding-orange mb-2" />
            <div className="text-gray-500">Loading map...</div>
          </div>
        </div>
      }
    >
      <MapComponent address={address} lat={lat} lng={lng} />
    </Suspense>
  )
}
