"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Plus,
  Edit,
  Save,
  Home,
  LayoutDashboard,
  DollarSign,
  Calendar,
  Users,
  MessageSquare,
  Eye,
  EyeOff,
  Wifi,
  Coffee,
  Heart,
  MapPin,
  Star,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function OwnerDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedTab, setSelectedTab] = useState("listings")
  const [password, setPassword] = useState("")
  const [listing, setListing] = useState({
    title: "Suite Principale",
    description: "Luxury apartment in the heart of Naples historic center",
    pricePerNight: 180,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    location: "Centro Storico, Naples",
    amenities: ["WiFi", "Kitchen", "AC", "24/7 Concierge"],
  })

  const bookings = [
    { id: 1, guest: "Marco Rossi", dates: "Dec 20-24, 2024", nights: 4, total: 720, status: "Confirmed" },
    { id: 2, guest: "Sofia Bianchi", dates: "Dec 27-Jan 2, 2024", nights: 6, total: 1080, status: "Confirmed" },
    { id: 3, guest: "Giovanni Neri", dates: "Jan 10-15, 2025", nights: 5, total: 900, status: "Pending" },
  ]

  const messages = [
    { id: 1, name: "Marco Rossi", message: "Can we arrange early check-in?", date: "Today" },
    { id: 2, name: "Sofia Bianchi", message: "Is the apartment pet-friendly?", date: "Yesterday" },
    { id: 3, name: "Giovanni Neri", message: "Perfect location! Booking soon.", date: "2 days ago" },
  ]

  const stats = [
    { label: "Total Bookings", value: "3", icon: Calendar, color: "from-blue-500 to-blue-600" },
    { label: "Average Rating", value: "4.9/5", icon: Users, color: "from-green-500 to-green-600" },
    { label: "Monthly Revenue", value: "€2,700", icon: DollarSign, color: "from-purple-500 to-purple-600" },
    { label: "Messages", value: "3", icon: MessageSquare, color: "from-orange-500 to-orange-600" },
  ]

  const [services, setServices] = useState([
    {
      id: "wifi",
      title: "Ultra-Fast WiFi",
      description: "Gigabit connection throughout the apartment",
      videoId: "",
      details: "",
      icon: Wifi,
    },
    {
      id: "kitchen",
      title: "Kitchen Equipment",
      description: "Full kitchen with premium appliances",
      videoId: "",
      details: "",
      icon: Coffee,
    },
    {
      id: "climate",
      title: "Climate Control",
      description: "Smart temperature management",
      videoId: "",
      details: "",
      icon: Heart,
    },
    {
      id: "location",
      title: "Prime Location",
      description: "Heart of the historic center",
      videoId: "",
      details: "",
      icon: MapPin,
    },
    {
      id: "concierge",
      title: "24/7 Concierge",
      description: "Professional support service",
      videoId: "",
      details: "",
      icon: Star,
    },
    {
      id: "welcome",
      title: "Welcome Package",
      description: "Local guides and recommendations",
      videoId: "",
      details: "",
      icon: MessageCircle,
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

  const [editingServiceId, setEditingServiceId] = useState(null)
  const [editingAmenityId, setEditingAmenityId] = useState(null)
  const [showNewServiceForm, setShowNewServiceForm] = useState(false)
  const [showNewAmenityForm, setShowNewAmenityForm] = useState(false)
  const [newService, setNewService] = useState({ title: "", description: "", details: "", videoId: "" })
  const [newAmenity, setNewAmenity] = useState({ name: "", category: "", details: "", videoId: "" })

  const handleListingChange = (field: string, value: any) => {
    setListing({ ...listing, [field]: value })
  }

  const handleSave = () => {
    setIsEditing(false)
    alert("Listing updated successfully!")
  }

  const handleUpdateService = (id, field, value) => {
    setServices(services.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const handleUpdateAmenity = (id, field, value) => {
    setAmenities(amenities.map((a) => (a.id === id ? { ...a, [field]: value } : a)))
  }

  const handleSaveServices = () => {
    localStorage.setItem("services", JSON.stringify(services))
    localStorage.setItem("amenities", JSON.stringify(amenities))
    alert("Services and amenities updated successfully!")
  }

  const handleAddService = () => {
    if (!newService.title.trim()) {
      alert("Please enter a service title")
      return
    }
    const serviceToAdd = {
      id: `service_${Date.now()}`,
      title: newService.title,
      description: newService.description,
      details: newService.details,
      videoId: newService.videoId,
      icon: Heart,
    }
    setServices([...services, serviceToAdd])
    setNewService({ title: "", description: "", details: "", videoId: "" })
    setShowNewServiceForm(false)
  }

  const handleAddAmenity = () => {
    if (!newAmenity.name.trim()) {
      alert("Please enter an amenity name")
      return
    }
    const amenityToAdd = {
      id: `amenity_${Date.now()}`,
      name: newAmenity.name,
      category: newAmenity.category || "Other",
      details: newAmenity.details,
      videoId: newAmenity.videoId,
    }
    setAmenities([...amenities, amenityToAdd])
    setNewAmenity({ name: "", category: "", details: "", videoId: "" })
    setShowNewAmenityForm(false)
  }

  const handleDeleteService = (id) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((s) => s.id !== id))
    }
  }

  const handleDeleteAmenity = (id) => {
    if (confirm("Are you sure you want to delete this amenity?")) {
      setAmenities(amenities.filter((a) => a.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Auth Modal */}
      {!password && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
            <h2 className="text-3xl font-serif font-bold mb-2 text-foreground">Owner Access</h2>
            <p className="text-muted-foreground mb-6 font-light">Enter your password to access the dashboard</p>

            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && password === "Paolo1" && setPassword(password)}
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
              onClick={() => {
                if (password === "Paolo1") {
                  setPassword(password)
                } else {
                  alert("Invalid password")
                  setPassword("")
                }
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition"
            >
              Access Dashboard
            </button>
            <p className="text-center text-xs text-muted-foreground mt-4 font-light">Hint: Paolo1</p>
          </div>
        </div>
      )}

      {/* Header */}
      {password && (
        <>
          <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <LayoutDashboard className="text-white" size={20} />
                  </div>
                  <span className="font-serif font-bold text-lg hidden sm:inline">Owner Dashboard</span>
                </div>

                <nav className="hidden md:flex gap-6">
                  <button
                    onClick={() => setSelectedTab("listings")}
                    className="text-foreground hover:text-primary transition font-medium"
                  >
                    Listings
                  </button>
                  <button
                    onClick={() => setSelectedTab("services")}
                    className="text-foreground hover:text-primary transition font-medium"
                  >
                    Services Manager
                  </button>
                  <button
                    onClick={() => setSelectedTab("bookings")}
                    className="text-foreground hover:text-primary transition font-medium"
                  >
                    Bookings
                  </button>
                  <button
                    onClick={() => setSelectedTab("messages")}
                    className="text-foreground hover:text-primary transition font-medium"
                  >
                    Messages
                  </button>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                  <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition">
                    <Home size={18} />
                    Exit
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
                      setSelectedTab("listings")
                      setMenuOpen(false)
                    }}
                    className="text-left text-foreground hover:text-primary transition py-2 font-medium"
                  >
                    Listings
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTab("services")
                      setMenuOpen(false)
                    }}
                    className="text-left text-foreground hover:text-primary transition py-2 font-medium"
                  >
                    Services Manager
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTab("bookings")
                      setMenuOpen(false)
                    }}
                    className="text-left text-foreground hover:text-primary transition py-2 font-medium"
                  >
                    Bookings
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTab("messages")
                      setMenuOpen(false)
                    }}
                    className="text-left text-foreground hover:text-primary transition py-2 font-medium"
                  >
                    Messages
                  </button>
                  <Link href="/" className="text-left text-foreground hover:text-primary transition py-2 font-medium">
                    Exit Dashboard
                  </Link>
                </nav>
              )}
            </div>
          </header>

          <div className="pt-20">
            {/* Stats Section */}
            <section className="py-8 bg-secondary/20 border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Dashboard Overview</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition"
                    >
                      <div
                        className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                      >
                        {stat.icon && <stat.icon className="text-white" size={24} />}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1 font-light">{stat.label}</p>
                      <p className="text-3xl font-serif font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Listings Tab */}
                {selectedTab === "listings" && (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-4xl font-serif font-bold">Your Listings</h2>
                      <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-lg transition">
                        <Plus size={20} />
                        New Listing
                      </button>
                    </div>

                    <div className="bg-background border-2 border-border rounded-lg overflow-hidden">
                      <div className="p-8">
                        {!isEditing ? (
                          <div className="space-y-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-3xl font-serif font-bold text-foreground mb-2">{listing.title}</h3>
                                <p className="text-lg text-muted-foreground font-light">{listing.description}</p>
                              </div>
                              <button
                                onClick={() => setIsEditing(true)}
                                className="flex items-center gap-2 text-primary hover:text-primary/90 transition font-medium"
                              >
                                <Edit size={20} />
                                Edit
                              </button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-secondary/30 p-4 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-1 font-light">Price per Night</p>
                                <p className="text-2xl font-serif font-bold text-primary">€{listing.pricePerNight}</p>
                              </div>
                              <div className="bg-secondary/30 p-4 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-1 font-light">Max Guests</p>
                                <p className="text-2xl font-serif font-bold">{listing.maxGuests}</p>
                              </div>
                              <div className="bg-secondary/30 p-4 rounded-lg">
                                <p className="text-sm text-muted-foreground mb-1 font-light">Size</p>
                                <p className="text-2xl font-serif font-bold">{listing.size} m²</p>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-2 font-light">Location</p>
                                <p className="text-foreground">{listing.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-2 font-light">Amenities</p>
                                <div className="flex flex-wrap gap-2">
                                  {listing.amenities.map((amenity, i) => (
                                    <span
                                      key={i}
                                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div>
                              <label className="block text-sm font-semibold text-foreground mb-2">Title</label>
                              <input
                                type="text"
                                value={listing.title}
                                onChange={(e) => handleListingChange("title", e.target.value)}
                                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
                              <textarea
                                value={listing.description}
                                onChange={(e) => handleListingChange("description", e.target.value)}
                                rows={3}
                                className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                  Price per Night (€)
                                </label>
                                <input
                                  type="number"
                                  value={listing.pricePerNight}
                                  onChange={(e) => handleListingChange("pricePerNight", e.target.value)}
                                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Max Guests</label>
                                <input
                                  type="number"
                                  value={listing.maxGuests}
                                  onChange={(e) => handleListingChange("maxGuests", e.target.value)}
                                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Size (m²)</label>
                                <input
                                  type="number"
                                  value={listing.size}
                                  onChange={(e) => handleListingChange("size", e.target.value)}
                                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <button
                                onClick={handleSave}
                                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-lg transition"
                              >
                                <Save size={20} />
                                Save Changes
                              </button>
                              <button
                                onClick={() => setIsEditing(false)}
                                className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-foreground font-bold py-2 px-6 rounded-lg transition"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Manager Tab */}
                {selectedTab === "services" && (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-4xl font-serif font-bold">Guest Guide Manager</h2>
                      <button
                        onClick={handleSaveServices}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-lg transition"
                      >
                        <Save size={20} />
                        Save All Changes
                      </button>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif font-bold">Services</h3>
                        <button
                          onClick={() => setShowNewServiceForm(!showNewServiceForm)}
                          className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary font-semibold py-2 px-4 rounded-lg transition"
                        >
                          <Plus size={18} />
                          Add Service
                        </button>
                      </div>

                      {showNewServiceForm && (
                        <div className="bg-primary/5 border-2 border-primary rounded-lg p-6 space-y-4">
                          <h4 className="font-serif font-bold text-lg">Add New Service</h4>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Service Title *</label>
                            <input
                              type="text"
                              value={newService.title}
                              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                              placeholder="e.g., Airport Transfer"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Short Description
                            </label>
                            <textarea
                              value={newService.description}
                              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                              placeholder="Brief description shown in the overview"
                              rows={2}
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Detailed Information
                            </label>
                            <textarea
                              value={newService.details}
                              onChange={(e) => setNewService({ ...newService, details: e.target.value })}
                              placeholder="Comprehensive information about this service"
                              rows={4}
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">YouTube Video ID</label>
                            <input
                              type="text"
                              value={newService.videoId}
                              onChange={(e) => setNewService({ ...newService, videoId: e.target.value })}
                              placeholder="e.g., dQw4w9WgXcQ"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddService}
                              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg transition"
                            >
                              Create Service
                            </button>
                            <button
                              onClick={() => setShowNewServiceForm(false)}
                              className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-lg transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition"
                          >
                            <div className="flex items-start justify-between">
                              <button
                                onClick={() => setEditingServiceId(editingServiceId === service.id ? null : service.id)}
                                className="flex-1 text-left"
                              >
                                <h4 className="font-serif font-bold text-lg text-foreground">{service.title}</h4>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                              </button>
                              <div className="flex gap-2">
                                <button
                                  onClick={() =>
                                    setEditingServiceId(editingServiceId === service.id ? null : service.id)
                                  }
                                  className="text-primary hover:text-primary/70 transition"
                                >
                                  <Edit size={20} />
                                </button>
                                <button
                                  onClick={() => handleDeleteService(service.id)}
                                  className="text-red-500 hover:text-red-700 transition"
                                >
                                  <X size={20} />
                                </button>
                              </div>
                            </div>

                            {editingServiceId === service.id && (
                              <div className="mt-6 pt-6 border-t border-border space-y-4">
                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">Title</label>
                                  <input
                                    type="text"
                                    value={service.title}
                                    onChange={(e) => handleUpdateService(service.id, "title", e.target.value)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">
                                    Description
                                  </label>
                                  <textarea
                                    value={service.description}
                                    onChange={(e) => handleUpdateService(service.id, "description", e.target.value)}
                                    rows={2}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">
                                    Detailed Information
                                  </label>
                                  <textarea
                                    value={service.details}
                                    onChange={(e) => handleUpdateService(service.id, "details", e.target.value)}
                                    rows={4}
                                    placeholder="Add detailed information about this service..."
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">
                                    YouTube Video ID
                                  </label>
                                  <input
                                    type="text"
                                    value={service.videoId}
                                    onChange={(e) => handleUpdateService(service.id, "videoId", e.target.value)}
                                    placeholder="e.g., dQw4w9WgXcQ"
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Extract the video ID from YouTube URLs (the part after v=)
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities Section */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif font-bold">Amenities</h3>
                        <button
                          onClick={() => setShowNewAmenityForm(!showNewAmenityForm)}
                          className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary font-semibold py-2 px-4 rounded-lg transition"
                        >
                          <Plus size={18} />
                          Add Amenity
                        </button>
                      </div>

                      {showNewAmenityForm && (
                        <div className="bg-primary/5 border-2 border-primary rounded-lg p-6 space-y-4">
                          <h4 className="font-serif font-bold text-lg">Add New Amenity</h4>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Amenity Name *</label>
                            <input
                              type="text"
                              value={newAmenity.name}
                              onChange={(e) => setNewAmenity({ ...newAmenity, name: e.target.value })}
                              placeholder="e.g., Smart Lock"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                            <input
                              type="text"
                              value={newAmenity.category}
                              onChange={(e) => setNewAmenity({ ...newAmenity, category: e.target.value })}
                              placeholder="e.g., Security"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Usage Instructions
                            </label>
                            <textarea
                              value={newAmenity.details}
                              onChange={(e) => setNewAmenity({ ...newAmenity, details: e.target.value })}
                              placeholder="Step-by-step instructions on how to use this amenity"
                              rows={4}
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">YouTube Video ID</label>
                            <input
                              type="text"
                              value={newAmenity.videoId}
                              onChange={(e) => setNewAmenity({ ...newAmenity, videoId: e.target.value })}
                              placeholder="e.g., dQw4w9WgXcQ"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddAmenity}
                              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-lg transition"
                            >
                              Create Amenity
                            </button>
                            <button
                              onClick={() => setShowNewAmenityForm(false)}
                              className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded-lg transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {amenities.map((amenity) => (
                          <div
                            key={amenity.id}
                            className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition"
                          >
                            <div className="flex items-start justify-between">
                              <button
                                onClick={() => setEditingAmenityId(editingAmenityId === amenity.id ? null : amenity.id)}
                                className="flex-1 text-left"
                              >
                                <h4 className="font-serif font-bold text-lg text-foreground">{amenity.name}</h4>
                                <p className="text-sm text-muted-foreground">{amenity.category}</p>
                              </button>
                              <div className="flex gap-2">
                                <button
                                  onClick={() =>
                                    setEditingAmenityId(editingAmenityId === amenity.id ? null : amenity.id)
                                  }
                                  className="text-primary hover:text-primary/70 transition"
                                >
                                  <Edit size={20} />
                                </button>
                                <button
                                  onClick={() => handleDeleteAmenity(amenity.id)}
                                  className="text-red-500 hover:text-red-700 transition"
                                >
                                  <X size={20} />
                                </button>
                              </div>
                            </div>

                            {editingAmenityId === amenity.id && (
                              <div className="mt-6 pt-6 border-t border-border space-y-4">
                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                                  <input
                                    type="text"
                                    value={amenity.name}
                                    onChange={(e) => handleUpdateAmenity(amenity.id, "name", e.target.value)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                                  <input
                                    type="text"
                                    value={amenity.category}
                                    onChange={(e) => handleUpdateAmenity(amenity.id, "category", e.target.value)}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">
                                    Usage Instructions
                                  </label>
                                  <textarea
                                    value={amenity.details}
                                    onChange={(e) => handleUpdateAmenity(amenity.id, "details", e.target.value)}
                                    rows={4}
                                    placeholder="Step-by-step instructions on how to use this amenity"
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                </div>

                                <div>
                                  <label className="block text-sm font-semibold text-foreground mb-2">
                                    YouTube Video ID
                                  </label>
                                  <input
                                    type="text"
                                    value={amenity.videoId}
                                    onChange={(e) => handleUpdateAmenity(amenity.id, "videoId", e.target.value)}
                                    placeholder="e.g., dQw4w9WgXcQ"
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                  />
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Extract the video ID from YouTube URLs (the part after v=)
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bookings Tab */}
                {selectedTab === "bookings" && (
                  <div>
                    <h2 className="text-4xl font-serif font-bold mb-8">Bookings</h2>
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition flex items-center justify-between"
                        >
                          <div>
                            <h4 className="font-serif font-bold text-foreground text-lg">{booking.guest}</h4>
                            <p className="text-muted-foreground mt-2 font-light">{booking.dates}</p>
                            <p className="text-sm text-muted-foreground font-light">
                              {booking.nights} nights • €{booking.total}
                            </p>
                          </div>
                          <div className="text-right">
                            <span
                              className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                            >
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages Tab */}
                {selectedTab === "messages" && (
                  <div>
                    <h2 className="text-4xl font-serif font-bold mb-8">Messages</h2>
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-serif font-bold text-foreground">{msg.name}</h4>
                              <p className="text-muted-foreground mt-2 font-light">{msg.message}</p>
                            </div>
                            <p className="text-xs text-muted-foreground font-light">{msg.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © 2025 La Casa di Carlotta Owner Portal. Secure & Encrypted.
          </p>
        </div>
      </footer>
    </div>
  )
}
