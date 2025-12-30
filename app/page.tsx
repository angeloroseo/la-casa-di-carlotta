"use client"

import { useState } from "react"
import {
  Menu,
  X,
  MapPin,
  Wifi,
  Coffee,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  LogIn,
  LayoutDashboard,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const whatsappNumber = "393500313314"
  const whatsappMessage = "Ciao! Sono interessato a prenotare l'appartamento a Napoli. Potete aiutarmi?"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const slides = [
    { image: "/luxury-apartment-living-room-elegance.jpg", alt: "Living Room" },
    { image: "/modern-bedroom.png", alt: "Bedroom" },
    { image: "/luxury-kitchen-with-marble-counters.jpg", alt: "Kitchen" },
    { image: "/spa-bathroom-luxury-design.jpg", alt: "Bathroom" },
    { image: "/balcony-terrace-city-view.jpg", alt: "Balcony" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const amenities = [
    { icon: Wifi, title: "Ultra-Fast WiFi", desc: "Gigabit connection throughout" },
    { icon: Coffee, title: "Equipped Kitchen", desc: "Premium appliances included" },
    { icon: Heart, title: "Spacious", desc: "2-4 guests, multiple rooms" },
    { icon: MapPin, title: "Prime Location", desc: "Heart of historic center" },
    { icon: Star, title: "24/7 Concierge", desc: "Premium support available" },
    { icon: MessageCircle, title: "Smart Home", desc: "Modern climate control" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-serif text-2xl font-bold">C</span>
              </div>
              <div>
                <h1 className="font-serif font-bold text-lg text-foreground">La Casa di Carlotta</h1>
                <p className="text-xs text-muted-foreground">Naples Luxury</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              <a href="#apartments" className="text-foreground hover:text-primary transition font-medium">
                Apartments
              </a>
              <a href="#amenities" className="text-foreground hover:text-primary transition font-medium">
                Services
              </a>
              <a href="#location" className="text-foreground hover:text-primary transition font-medium">
                Location
              </a>
            </nav>

            {/* Auth Links */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/guest"
                className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium"
              >
                <LogIn size={18} />
                Guest
              </Link>
              <Link
                href="/owner"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition font-medium"
              >
                <LayoutDashboard size={18} />
                Owner
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
              <a href="#apartments" className="text-foreground hover:text-primary transition py-2 font-medium">
                Apartments
              </a>
              <a href="#amenities" className="text-foreground hover:text-primary transition py-2 font-medium">
                Services
              </a>
              <a href="#location" className="text-foreground hover:text-primary transition py-2 font-medium">
                Location
              </a>
              <Link
                href="/guest"
                className="flex items-center gap-2 text-foreground hover:text-primary transition py-2 font-medium"
              >
                <LogIn size={18} />
                Guest Portal
              </Link>
              <Link
                href="/owner"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition font-medium"
              >
                <LayoutDashboard size={18} />
                Owner Dashboard
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 h-screen md:h-[600px] overflow-hidden bg-black">
        <div className="relative w-full h-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition backdrop-blur"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition ${idx === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 text-balance drop-shadow-lg">
              Your Sanctuary
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-balance max-w-2xl drop-shadow-md font-light">
              Experience luxury living in the heart of Naples
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl text-lg"
            >
              <MessageCircle size={24} />
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartments" className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground text-balance">
              Our Apartments
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto font-light">
              Carefully curated spaces designed for comfort and elegance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-3">Suite Principale</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Luxuriously appointed bedroom and living spaces. Premium furnishings, climate control, and modern
                  amenities throughout.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-6 rounded-lg border border-border hover:shadow-lg transition">
                  <p className="text-sm text-muted-foreground mb-2 font-light">Guests</p>
                  <p className="text-3xl font-serif font-bold text-primary">2-4</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-border hover:shadow-lg transition">
                  <p className="text-sm text-muted-foreground mb-2 font-light">Rooms</p>
                  <p className="text-3xl font-serif font-bold text-primary">2+1</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-border hover:shadow-lg transition">
                  <p className="text-sm text-muted-foreground mb-2 font-light">Bathrooms</p>
                  <p className="text-3xl font-serif font-bold text-primary">2</p>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-border hover:shadow-lg transition">
                  <p className="text-sm text-muted-foreground mb-2 font-light">Size</p>
                  <p className="text-3xl font-serif font-bold text-primary">120 m²</p>
                </div>
              </div>

              <Link
                href="/guest"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition w-full md:w-auto justify-center"
              >
                <LogIn size={20} />
                View Details
              </Link>
            </div>

            <div className="relative">
              <img src="/luxury-apartment-interior-modern.jpg" alt="Apartment" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 md:py-32 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">Premium Services</h2>
            <p className="text-xl text-muted-foreground font-light">Everything for your perfect stay</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground font-light">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Ready for Your Escape?</h2>
          <p className="text-xl mb-10 text-balance opacity-90 font-light">
            Contact us via WhatsApp for inquiries and bookings. We respond within minutes.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-foreground font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 text-lg shadow-xl"
          >
            <MessageCircle size={24} />
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="location" className="bg-foreground/5 border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-4">La Casa di Carlotta</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Premium luxury apartments in the historic center of Naples. Elegance, comfort, and authentic
                hospitality.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Quick Contact</h4>
              <div className="space-y-3 font-light">
                <p className="text-muted-foreground">📍 Naples, Historic Center</p>
                <p className="text-muted-foreground">📱 +39 350 031 3314</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Information</h4>
              <div className="space-y-2 text-muted-foreground text-sm font-light">
                <p>Check-in: 15:00 - 23:00</p>
                <p>Check-out: 11:00</p>
                <p>Available for special requests</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm font-light">
            <p>© 2025 La Casa di Carlotta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
