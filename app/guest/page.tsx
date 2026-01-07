"use client"

import { useState, useEffect } from "react"
import { Menu, X, MapPin, Wifi, Coffee, Heart, MessageCircle, Star, Home, Eye, EyeOff, Globe } from "lucide-react"
import Link from "next/link"
import { translations, LANGUAGES, type Language } from "@/lib/translations"

export default function GuestPortal() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [language, setLanguage] = useState<Language>("it")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("guestLanguage") as Language | null
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("guestLanguage", newLanguage)
  }

  const t = translations[language]

  const [services, setServices] = useState([
    {
      id: "wifi",
      icon: Wifi,
      title: t.ultraFastWiFi,
      description: t.gigabitConnectionThroughoutTheApartment,
      status: t.available,
      details: "",
      videoId: "",
    },
    {
      id: "kitchen",
      icon: Coffee,
      title: t.kitchenEquipment,
      description: t.fullKitchenWithPremiumAppliances,
      status: t.available,
      details: "",
      videoId: "",
    },
    {
      id: "climate",
      icon: Heart,
      title: t.climateControl,
      description: t.smartTemperatureManagement,
      status: t.available,
      details: "",
      videoId: "",
    },
    {
      id: "location",
      icon: MapPin,
      title: t.primeLocation,
      description: t.heartOfTheHistoricCenter,
      status: t.available,
      details: "",
      videoId: "",
    },
    {
      id: "concierge",
      icon: Star,
      title: t.concierge247,
      description: t.professionalSupportService,
      status: t.available,
      details: "",
      videoId: "",
    },
    {
      id: "welcome",
      icon: MessageCircle,
      title: t.welcomePackage,
      description: t.localGuidesAndRecommendations,
      status: t.available,
      details: "",
      videoId: "",
    },
  ])

  const [amenities, setAmenities] = useState([
    { id: "ac", name: t.airConditioning, category: t.climate, details: "", videoId: "" },
    { id: "heating", name: t.heating, category: t.climate, details: "", videoId: "" },
    { id: "wifi", name: t.wifi, category: t.connectivity, details: "", videoId: "" },
    { id: "kitchen", name: t.kitchen, category: t.kitchen, details: "", videoId: "" },
    { id: "dishwasher", name: t.dishwasher, category: t.kitchen, details: "", videoId: "" },
    { id: "washer", name: t.washingMachine, category: t.appliances, details: "", videoId: "" },
    { id: "dryer", name: t.dryer, category: t.appliances, details: "", videoId: "" },
    { id: "tv", name: t.tv, category: t.entertainment, details: "", videoId: "" },
    { id: "iron", name: t.iron, category: t.utilities, details: "", videoId: "" },
    { id: "hairdryer", name: t.hairDryer, category: t.bathroom, details: "", videoId: "" },
    { id: "towels", name: t.towels, category: t.linens, details: "", videoId: "" },
    { id: "linens", name: t.linens, category: t.linens, details: "", videoId: "" },
    { id: "coffee", name: t.coffeemaker, category: t.kitchen, details: "", videoId: "" },
    { id: "espresso", name: t.espressoMachine, category: t.kitchen, details: "", videoId: "" },
    { id: "microwave", name: t.microwave, category: t.kitchen, details: "", videoId: "" },
    { id: "oven", name: t.oven, category: t.kitchen, details: "", videoId: "" },
    { id: "fridge", name: t.refrigerator, category: t.kitchen, details: "", videoId: "" },
    { id: "freezer", name: t.freezer, category: t.kitchen, details: "", videoId: "" },
    { id: "hotwater", name: t.hotWater, category: t.utilities, details: "", videoId: "" },
    { id: "balcony", name: t.balcony, category: t.outdoor, details: "", videoId: "" },
  ])

  const house_rules = [
    t.checkInAfter300Pm,
    t.checkOutBefore1100Am,
    t.noSmokingInside,
    t.keepNoiseLevelsLowAfter10Pm,
    t.noPartiesOrLargeGatherings,
    t.petsAllowedUponRequest,
    t.respectNeighbors,
    t.lockDoorsWhenLeaving,
  ]

  const reviews = [
    {
      name: "Marco R.",
      rating: 5,
      text: t.absolutelyStunningApartment,
      date: "Dec 2024",
    },
    {
      name: "Sofia L.",
      rating: 5,
      text: t.elegantSpaces,
      date: "Nov 2024",
    },
    {
      name: "Giovanni M.",
      rating: 5,
      text: t.exceptionalHospitality,
      date: "Oct 2024",
    },
  ]

  const handlePasswordSubmit = () => {
    if (password === "Carlotta2026") {
      setIsAuthenticated(true)
    } else {
      alert(t.passwordNonValida)
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-amber-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">{t.guestPortal}</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
              <Globe className="w-4 h-4 text-amber-700" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="bg-transparent text-amber-900 font-medium cursor-pointer outline-none"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsAuthenticated(false)
                  setPassword("")
                }}
                className="px-4 py-2 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                {t.logout}
              </button>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-amber-900">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t-2 border-amber-200 px-4 py-4 space-y-4">
            <div className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
              <Globe className="w-4 h-4 text-amber-700" />
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="bg-transparent text-amber-900 font-medium cursor-pointer outline-none w-full"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsAuthenticated(false)
                  setPassword("")
                  setMenuOpen(false)
                }}
                className="w-full px-4 py-2 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                {t.logout}
              </button>
            )}
          </div>
        )}
      </header>

      {!isAuthenticated ? (
        <div className="container mx-auto px-4 py-20 flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-8 font-serif">{t.guestPortal}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-amber-900 font-semibold mb-2">{t.password}</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t.enterPassword}
                    className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-amber-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-sm text-amber-600 mt-2">{t.passwordHint}</p>
              </div>

              <button
                onClick={() => {
                  if (password === "Carlotta2026") {
                    setIsAuthenticated(true)
                  } else {
                    alert(t.passwordNonValida)
                  }
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                {t.login}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="relative h-96 overflow-hidden bg-black">
            <img src="/luxury-suite-bedroom.jpg" alt="Guest Portal" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">
                {t.welcomeGuest}
              </h1>
              <p className="text-lg text-white/90 text-balance font-light">{t.exploreAllTheDetails}</p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Overview Tab */}
              {selectedTab === "overview" && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl font-serif font-bold mb-6">{t.suitePrincipale}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                          {t.ourFlagshipApartment}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                            <p className="text-sm text-muted-foreground mb-1 font-light">{t.maximumGuests}</p>
                            <p className="text-3xl font-serif font-bold text-primary">4</p>
                          </div>
                          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                            <p className="text-sm text-muted-foreground mb-1 font-light">{t.totalSize}</p>
                            <p className="text-3xl font-serif font-bold text-primary">120 m²</p>
                          </div>
                          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                            <p className="text-sm text-muted-foreground mb-1 font-light">{t.bedrooms}</p>
                            <p className="text-3xl font-serif font-bold text-primary">2</p>
                          </div>
                          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                            <p className="text-sm text-muted-foreground mb-1 font-light">{t.bathrooms}</p>
                            <p className="text-3xl font-serif font-bold text-primary">2</p>
                          </div>
                        </div>
                      </div>
                      <img src="/elegant-living-room.png" alt="Apartment" className="rounded-lg shadow-xl" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-8">{t.ourServices}</h3>
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
                    <h3 className="text-2xl font-serif font-bold mb-4">{t.needHelp}</h3>
                    <p className="text-muted-foreground mb-6 font-light">{t.ourConciergeTeam}</p>
                    <a
                      href="https://wa.me/393500313314?text=Hello!%20I%20need%20assistance%20with%20my%20stay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition"
                    >
                      <MessageCircle size={20} />
                      {t.contactConcierge}
                    </a>
                  </div>
                </div>
              )}

              {/* Amenities Tab */}
              {selectedTab === "amenities" && (
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-8">{t.availableAmenities}</h2>
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
                  <h2 className="text-4xl font-serif font-bold mb-8">{t.houseRules}</h2>
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
                  <h2 className="text-4xl font-serif font-bold mb-8">{t.guestReviews}</h2>
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
      )}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-light">
            © 2025 La Casa di Carlotta. All rights reserved. |{" "}
            <Link href="/" className="text-primary hover:underline">
              {t.returnHome}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
