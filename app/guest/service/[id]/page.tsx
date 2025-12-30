"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Wifi, Coffee, Heart, MapPin, Star, MessageCircle, Play, X } from "lucide-react"
import Link from "next/link"

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const [videoOpen, setVideoOpen] = useState(false)

  const serviceDetails: Record<
    string,
    {
      title: string
      icon: React.ComponentType<any>
      description: string
      fullDescription: string
      features: string[]
      videoId?: string
      videoTitle?: string
      image: string
    }
  > = {
    wifi: {
      title: "Ultra-Fast WiFi",
      icon: Wifi,
      description: "Gigabit connection throughout the apartment",
      fullDescription:
        "Experience seamless connectivity with our high-speed WiFi system. With gigabit speeds and comprehensive coverage across all areas of the apartment, you can work, stream, and stay connected without any interruption. Our network uses the latest WiFi 6 technology for maximum performance and stability.",
      features: [
        "Gigabit speeds up to 1000 Mbps",
        "WiFi 6 technology (802.11ax)",
        "Full apartment coverage",
        "Dual-band network (2.4GHz & 5GHz)",
        "Automatic failover backup",
        "Perfect for video conferencing and streaming",
      ],
      videoId: "dQw4w9WgXcQ",
      videoTitle: "How to Connect to WiFi",
      image: "/luxury-apartment-living-room-elegance.jpg",
    },
    kitchen: {
      title: "Kitchen Equipment",
      icon: Coffee,
      description: "Full kitchen with premium appliances",
      fullDescription:
        "Our state-of-the-art kitchen is fully equipped with premium appliances and everything you need to prepare delicious meals. From professional-grade stainless steel appliances to premium cookware, we've thought of every detail to make your culinary experience exceptional.",
      features: [
        "Miele refrigerator and freezer",
        "Siemens gas oven and cooktop",
        "Dishwasher with multiple programs",
        "Nespresso machine and coffee grinder",
        "Full set of premium cookware and utensils",
        "Marble countertops and integrated storage",
      ],
      videoId: "dQw4w9WgXcQ",
      videoTitle: "Kitchen Equipment Tutorial",
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    climate: {
      title: "Climate Control",
      icon: Heart,
      description: "Smart temperature management",
      fullDescription:
        "Maintain your perfect comfort level with our advanced smart climate control system. Independently control temperature in each room with individual thermostats, ensuring that everyone stays comfortable throughout their stay.",
      features: [
        "Individual room temperature control",
        "Smart thermostat with app control",
        "Central heating system",
        "Premium air conditioning",
        "Humidity regulation",
        "Scheduled temperature presets",
      ],
      videoId: "dQw4w9WgXcQ",
      videoTitle: "Climate Control Guide",
      image: "/modern-bedroom.png",
    },
    location: {
      title: "Prime Location",
      icon: MapPin,
      description: "Heart of the historic center",
      fullDescription:
        "Located in the heart of Naples' UNESCO-listed historic center (Centro Storico), our apartment puts you within walking distance of the city's most iconic attractions, finest restaurants, and vibrant cultural institutions. Immerse yourself in centuries of history and contemporary charm.",
      features: [
        "Walking distance to historic sites",
        "Close to restaurants and cafés",
        "Excellent public transportation access",
        "Easy access to museums and galleries",
        "Near Spaccanapoli street",
        "Authentic local neighborhood",
      ],
      videoId: "dQw4w9WgXcQ",
      videoTitle: "Exploring Naples Historic Center",
      image: "/balcony-terrace-city-view.jpg",
    },
    concierge: {
      title: "24/7 Concierge",
      icon: Star,
      description: "Professional support service",
      fullDescription:
        "Our dedicated concierge team is available round the clock to assist with any needs. From restaurant reservations and transportation bookings to local recommendations and emergency support, we're here to make your stay unforgettable.",
      features: [
        "24/7 phone and WhatsApp support",
        "Restaurant reservations",
        "Transportation arrangements",
        "Local recommendations",
        "Tour bookings and tickets",
        "Emergency assistance",
      ],
      image: "/elegant-living-room.png",
    },
    welcome: {
      title: "Welcome Package",
      icon: MessageCircle,
      description: "Local guides and recommendations",
      fullDescription:
        "Upon arrival, you'll receive our curated welcome package with insider tips, local guides, restaurant recommendations, and everything you need to make the most of your stay in Naples.",
      features: [
        "Detailed area guides and maps",
        "Top restaurant and café recommendations",
        "Local cultural event information",
        "Shopping and shopping guide",
        "Transportation information",
        "Emergency contacts and resources",
      ],
      image: "/appartamento-moderno-lussuoso-napoli-soggiorno-ele.jpg",
    },
  }

  const service = serviceDetails[params.id]

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Service Not Found</h1>
          <Link href="/guest" className="text-primary hover:underline">
            Return to Guest Portal
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/guest" className="flex items-center gap-2 text-primary hover:opacity-80 transition">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-lg font-serif font-bold">{service.title}</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="pt-8">
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden bg-black">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-8 z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-4 rounded-lg backdrop-blur">
                <Icon className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-balance">{service.title}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">{service.fullDescription}</p>
            </div>

            {/* Video */}
            {service.videoId && (
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-6">Video Guide</h2>
                <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={`https://img.youtube.com/vi/${service.videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => setVideoOpen(true)}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition group"
                  >
                    <div className="bg-primary group-hover:bg-primary/90 text-primary-foreground p-6 rounded-full transition">
                      <Play size={40} fill="currentColor" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Features & Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-secondary/20 border border-border rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-foreground pt-0.5">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Need Additional Information?</h3>
              <p className="text-muted-foreground mb-6 font-light">
                Our concierge team is happy to provide more details or assistance with this service.
              </p>
              <a
                href="https://wa.me/393500313314?text=I%20have%20questions%20about%20the%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition"
              >
                <MessageCircle size={20} />
                Contact Concierge
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:opacity-70 transition"
            >
              <X size={32} />
            </button>
            <div className="relative pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-light">
            © 2025 La Casa di Carlotta. All rights reserved. |{" "}
            <Link href="/guest" className="text-primary hover:underline">
              Back to Portal
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
