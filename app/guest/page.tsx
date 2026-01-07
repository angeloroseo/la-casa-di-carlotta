"use client"

import { useState, useEffect } from "react"
import { Menu, X, MapPin, Wifi, Coffee, Heart, MessageCircle, Star, Home, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function GuestPortal() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [services, setServices] = useState([
    {
      id: "wifi",
      icon: Wifi,
      title: "Ultra-Fast WiFi",
      description: "Gigabit connection throughout the apartment",
      status: "Available",
      details: "",
      videoId: "",
    },
    {
      id: "kitchen",
      icon: Coffee,
      title: "Kitchen Equipment",
      description: "Full kitchen with premium appliances",
      status: "Available",
      details: "",
      videoId: "",
    },
    {
      id: "climate",
      icon: Heart,
      title: "Climate Control",
      description: "Smart temperature management",
      status: "Available",
      details: "",
      videoId: "",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Prime Location",
      description: "Heart of the historic center",
      status: "Available",
      details: "",
      videoId: "",
    },
    {
      id: "concierge",
      icon: Star,
      title: "24/7 Concierge",
      description: "Professional support service",
      status: "Available",
      details: "",
      videoId: "",
    },
    {
      id: "welcome",
      icon: MessageCircle,
      title: "Welcome Package",
      description: "Local guides and recommendations",
      status: "Available",
      details: "",
      videoId: "",
    },
  ])

  const [amenities, setAmenities] = useState([
    { id: "ac", name: "Air Conditioning", category: "Climate", details: "", videoId: "" },
    { id: "heating", name: "Heating", category: "Climate", details: "", videoId: "" },
    { id: "wifi", name: "WiFi", category: "Connectivity", details: "", videoId: "" },
    { id: "kitchen", name: "Kitchen", category: "Kitchen", details: "", videoId: "" },
    { id: "dishwasher", name: "Dishwasher", category: "Kitchen", details: "", videoId: "" },
    { id: "washer", name: "Washing Machine", category: "Appliances", details: "", videoId: "" },
    { id: "dryer", name: "Dryer", category: "Appliances", details: "", videoId: "" },
    { id: "tv", name: "TV", category: "Entertainment", details: "", videoId: "" },
    { id: "iron", name: "Iron", category: "Utilities", details: "", videoId: "" },
    { id: "hairdryer", name: "Hair Dryer", category: "Bathroom", details: "", videoId: "" },
    { id: "towels", name: "Towels", category: "Linens", details: "", videoId: "" },
    { id: "linens", name: "Linens", category: "Linens", details: "", videoId: "" },
    { id: "coffee", name: "Coffeemaker", category: "Kitchen", details: "", videoId: "" },
    { id: "espresso", name: "Espresso Machine", category: "Kitchen", details: "", videoId: "" },
    { id: "microwave", name: "Microwave", category: "Kitchen", details: "", videoId: "" },
    { id: "oven", name: "Oven", category: "Kitchen", details: "", videoId: "" },
    { id: "fridge", name: "Refrigerator", category: "Kitchen", details: "", videoId: "" },
    { id: "freezer", name: "Freezer", category: "Kitchen", details: "", videoId: "" },
    { id: "hotwater", name: "Hot Water", category: "Utilities", details: "", videoId: "" },
    { id: "balcony", name: "Balcony", category: "Outdoor", details: "", videoId: "" },
  ])

  const house_rules = [
    "Check-in after 3:00 PM",
    "Check-out before 11:00 AM",
    "No smoking inside",
    "Keep noise levels low after 10 PM",
    "No parties or large gatherings",
    "Pets allowed upon request",
    "Respect neighbors",
    "Lock doors when leaving",
  ]

  const reviews = [
    {
      name: "Marco R.",
      rating: 5,
      text: "Absolutely stunning apartment. Perfect location and impeccable service.",
      date: "Dec 2024",
    },
    {
      name: "Sofia L.",
      rating: 5,
      text: "Elegant spaces, everything we needed. Will definitely return.",
      date: "Nov 2024",
    },
    {
      name: "Giovanni M.",
      rating: 5,
      text: "Exceptional hospitality and attention to detail. Highly recommended.",
      date: "Oct 2024",
    },
  ]

  const handlePasswordSubmit = () => {
    if (password === "Carlotta2026") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password")
      setPassword("")
    }
  }

  useEffect(() => {
    const savedServices = localStorage.getItem("services")
    const savedAmenities = localStorage.getItem("amenities")
    if (savedServices) {
      try {
        const parsed = JSON.parse(savedServices)
        setServices(
          services.map((s) => {
            const saved = parsed.find((p) => p.id === s.id)
            return saved ? { ...s, ...saved } : s
          }),
        )
      } catch (e) {
        console.log("[v0] Could not parse services")
      }
    }
    if (savedAmenities) {
      try {
        const parsed = JSON.parse(savedAmenities)
        setAmenities(
          amenities.map((a) => {
            const saved = parsed.find((p) => p.id === a.id)
            return saved ? { ...a, ...saved } : a
          }),
        )
      } catch (e) {
        console.log("[v0] Could not parse amenities")
      }
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
          <h2 className="text-3xl font-serif font-bold mb-2 text-foreground">Guest Access</h2>
          <p className="text-muted-foreground mb-6 font-light">Enter your password to view property details</p>

          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            onClick={handlePasswordSubmit}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition"
          >
            Access Portal
          </button>
          <p className="text-center text-xs text-muted-foreground mt-4 font-light">Hint: Carlotta2026</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">C</span>
              </div>
              <span className="font-serif font-bold text-lg hidden sm:inline">La Casa di Carlotta</span>
            </Link>

            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setSelectedTab("overview")}
                className="text-foreground hover:text-primary transition font-medium"
              >
                Overview
              </button>
              <button
                onClick={() => setSelectedTab("amenities")}
                className="text-foreground hover:text-primary transition font-medium"
              >
                Amenities
              </button>
              <button
                onClick={() => setSelectedTab("rules")}
                className="text-foreground hover:text-primary transition font-medium"
              >
                House Rules
              </button>
              <button
                onClick={() => setSelectedTab("reviews")}
                className="text-foreground hover:text-primary transition font-medium"
              >
                Reviews
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition">
                <Home size={18} />
                Back
              </Link>
            </div>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
              <button
                onClick={() => {
                  setSelectedTab("overview")
                  setMenuOpen(false)
                }}
                className="text-left text-foreground hover:text-primary transition py-2 font-medium"
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setSelectedTab("amenities")
                  setMenuOpen(false)
                }}
                className="text-left text-foreground hover:text-primary transition py-2 font-medium"
              >
                Amenities
              </button>
              <button
                onClick={() => {
                  setSelectedTab("rules")
                  setMenuOpen(false)
                }}
                className="text-left text-foreground hover:text-primary transition py-2 font-medium"
              >
                House Rules
              </button>
              <button
                onClick={() => {
                  setSelectedTab("reviews")
                  setMenuOpen(false)
                }}
                className="text-left text-foreground hover:text-primary transition py-2 font-medium"
              >
                Reviews
              </button>
              <Link href="/" className="text-left text-foreground hover:text-primary transition py-2 font-medium">
                Back Home
              </Link>
            </nav>
          )}
        </div>
      </header>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden bg-black">
          <img src="/luxury-suite-bedroom.jpg" alt="Guest Portal" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">Welcome, Guest</h1>
            <p className="text-lg text-white/90 text-balance font-light">Explore all the details about your stay</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview Tab */}
            {selectedTab === "overview" && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-6">Suite Principale</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                        Our flagship apartment offers the perfect blend of luxury and comfort. Located in the heart of
                        Naples' historic center, this beautifully appointed space features premium furnishings, modern
                        amenities, and thoughtful details for an unforgettable stay.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground mb-1 font-light">Maximum Guests</p>
                          <p className="text-3xl font-serif font-bold text-primary">4</p>
                        </div>
                        <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground mb-1 font-light">Total Size</p>
                          <p className="text-3xl font-serif font-bold text-primary">120 m²</p>
                        </div>
                        <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground mb-1 font-light">Bedrooms</p>
                          <p className="text-3xl font-serif font-bold text-primary">2</p>
                        </div>
                        <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                          <p className="text-sm text-muted-foreground mb-1 font-light">Bathrooms</p>
                          <p className="text-3xl font-serif font-bold text-primary">2</p>
                        </div>
                      </div>
                    </div>
                    <img src="/elegant-living-room.png" alt="Apartment" className="rounded-lg shadow-xl" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold mb-8">Our Services</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                      <Link
                        key={i}
                        href={`/guest/service/${service.id}`}
                        className="bg-secondary/20 p-6 rounded-lg border border-border hover:shadow-lg hover:border-primary transition cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <service.icon className="text-primary" size={24} />
                          </div>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {service.status}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-foreground mb-2">{service.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">Need Help?</h3>
                  <p className="text-muted-foreground mb-6 font-light">
                    Our concierge team is available 24/7 to assist with any questions or special requests.
                  </p>
                  <a
                    href="https://wa.me/393500313314?text=Hello!%20I%20need%20assistance%20with%20my%20stay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition"
                  >
                    <MessageCircle size={20} />
                    Contact Concierge
                  </a>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {selectedTab === "amenities" && (
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8">Available Amenities</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {amenities.map((amenity, i) => (
                    <Link
                      key={i}
                      href={`/guest/amenity/${amenity.id}`}
                      className="flex items-center gap-3 p-4 bg-secondary/30 border border-border rounded-lg hover:bg-secondary/50 hover:border-primary transition cursor-pointer"
                    >
                      <Star className="text-primary" size={20} />
                      <div>
                        <span className="text-foreground font-medium block">{amenity.name}</span>
                        <span className="text-xs text-muted-foreground">{amenity.category}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Rules Tab */}
            {selectedTab === "rules" && (
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8">House Rules</h2>
                <div className="bg-background border-2 border-border rounded-lg p-8 space-y-4">
                  {house_rules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">{i + 1}</span>
                      </div>
                      <p className="text-lg text-foreground pt-0.5">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {selectedTab === "reviews" && (
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8">Guest Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review, i) => (
                    <div key={i} className="border border-border rounded-lg p-6 hover:shadow-lg transition">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-serif font-bold text-foreground">{review.name}</h4>
                          <p className="text-sm text-muted-foreground font-light">{review.date}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground font-light">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-light">
            © 2025 La Casa di Carlotta. All rights reserved. |{" "}
            <Link href="/" className="text-primary hover:underline">
              Return Home
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
