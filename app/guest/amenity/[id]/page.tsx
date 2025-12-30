"use client"

import { useState } from "react"
import { ArrowLeft, Star, MessageCircle, Play, X } from "lucide-react"
import Link from "next/link"

export default function AmenityDetailPage({ params }: { params: { id: string } }) {
  const [videoOpen, setVideoOpen] = useState(false)

  const amenityDetails: Record<
    string,
    {
      name: string
      category: string
      description: string
      fullDescription: string
      instructions: string[]
      videoId?: string
      image: string
    }
  > = {
    ac: {
      name: "Air Conditioning",
      category: "Climate Control",
      description: "Premium climate control system",
      fullDescription:
        "Our advanced air conditioning system ensures optimal cooling throughout the apartment. Each room can be independently controlled for maximum comfort. The system features quiet operation and energy-efficient technology.",
      instructions: [
        "Use the wall-mounted remote control or thermostat",
        "Set your desired temperature",
        "Choose your preferred fan speed (low, medium, high, auto)",
        "The system will automatically maintain the set temperature",
        "For fan-only mode, select the fan icon",
        "For complete shutdown, press the power button",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/modern-bedroom.png",
    },
    heating: {
      name: "Heating",
      category: "Climate Control",
      description: "Central heating system",
      fullDescription:
        "The apartment features an efficient central heating system that provides warmth and comfort during colder months. The heating can be adjusted room by room for personalized comfort.",
      instructions: [
        "Access the thermostat on the wall",
        "Turn up the temperature setting",
        "The system will activate automatically",
        "Allow 10-15 minutes for the apartment to reach the desired temperature",
        "Use the schedule feature for automatic temperature adjustments",
      ],
      image: "/luxury-apartment-living-room-elegance.jpg",
    },
    wifi: {
      name: "WiFi",
      category: "Connectivity",
      description: "High-speed internet connection",
      fullDescription:
        "Connect to our high-speed WiFi network for seamless internet access throughout the apartment. We provide the network name and password in your welcome package.",
      instructions: [
        "Open WiFi settings on your device",
        'Select network: "CasaDiCarlotta-Premium"',
        "Enter the password provided in your welcome package",
        "Connection will establish within seconds",
        "For troubleshooting, restart your device or contact concierge",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/luxury-apartment-living-room-elegance.jpg",
    },
    kitchen: {
      name: "Kitchen",
      category: "Kitchen",
      description: "Fully equipped modern kitchen",
      fullDescription:
        "Our well-appointed kitchen comes with all necessary equipment for meal preparation. From basic cooking to more elaborate dishes, everything you need is available.",
      instructions: [
        "All cookware and utensils are in the drawers and cabinets",
        "Dishes and glasses are in the upper cabinets",
        "Check appliance manuals in the kitchen drawer for specific instructions",
        "Dispose of food waste in the provided bin",
        "Clean up after use and load the dishwasher",
      ],
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    dishwasher: {
      name: "Dishwasher",
      category: "Kitchen",
      description: "Automatic dishwashing machine",
      fullDescription:
        "The Siemens dishwasher makes cleanup easy with multiple washing programs designed for different types of dishes and utensils.",
      instructions: [
        "Load dishes into the racks, placing larger items on the bottom",
        "Place the detergent tablet in the dispenser",
        "Close the door securely",
        "Select your desired program using the control panel",
        "Press start and allow the cycle to complete",
        "Remove dishes when cool",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    washer: {
      name: "Washing Machine",
      category: "Appliances",
      description: "Premium washing machine",
      fullDescription:
        "The modern washing machine is perfect for refreshing your clothes during your stay. It offers multiple wash cycles for different fabric types.",
      instructions: [
        "Load laundry into the drum",
        "Add detergent to the dispenser",
        "Select your wash cycle based on fabric type",
        "Set water temperature and spin speed if desired",
        "Press start",
        "Remove clothes promptly to prevent wrinkles",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/appartamento-moderno-lussuoso-napoli-soggiorno-ele.jpg",
    },
    dryer: {
      name: "Dryer",
      category: "Appliances",
      description: "Clothes dryer",
      fullDescription:
        "Electric clothes dryer for quick and convenient drying of your laundry. Multiple settings available for different fabric types.",
      instructions: [
        "Transfer wet clothes from washer to dryer",
        "Add a dryer sheet if desired",
        "Select drying temperature (low, medium, or high)",
        "Choose drying time based on load size",
        "Press start",
        "Remove clothes immediately after cycle completes",
      ],
      image: "/appartamento-moderno-lussuoso-napoli-soggiorno-ele.jpg",
    },
    tv: {
      name: "TV",
      category: "Entertainment",
      description: "Smart television with streaming",
      fullDescription:
        "The premium 55-inch smart TV is equipped with popular streaming services for your entertainment. Multiple input options are available.",
      instructions: [
        "Press the power button on the remote",
        "Use HDMI inputs for external devices",
        "Access streaming apps from the smart TV home screen",
        "Connect to WiFi for streaming services",
        "Adjust volume with the remote control",
        "Press info button for more details about programs",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/elegant-living-room.png",
    },
    iron: {
      name: "Iron",
      category: "Utilities",
      description: "Clothes iron with ironing board",
      fullDescription:
        "Steamless iron available for refreshing your clothes. An ironing board is provided in the utility closet.",
      instructions: [
        "Fill water tank if using steam function",
        "Set temperature based on fabric type",
        "Place garment on ironing board",
        "Use smooth, gliding motions",
        "Allow iron to cool before storing",
        "Always turn off when finished",
      ],
      image: "/modern-bedroom.png",
    },
    hairdryer: {
      name: "Hair Dryer",
      category: "Bathroom",
      description: "Professional hair dryer",
      fullDescription: "High-powered hair dryer available in the master bathroom for your convenience.",
      instructions: [
        "Plug hair dryer into the bathroom outlet",
        "Ensure hair is towel-dried before use",
        "Select desired heat and speed settings",
        "Point nozzle at hair, moving constantly",
        "Unplug and allow to cool before storing",
      ],
      image: "/spa-bathroom-luxury-design.jpg",
    },
    towels: {
      name: "Towels",
      category: "Linens",
      description: "Premium bath towels",
      fullDescription: "Soft, premium quality towels provided in all bathrooms. Fresh towels are replenished daily.",
      instructions: [
        "Towels are located in the bathroom linen cabinets",
        "Use a fresh towel after each shower",
        "Place used towels on the rack to dry",
        "Soiled towels can be placed in the laundry basket",
        "Additional towels available upon request",
      ],
      image: "/spa-bathroom-luxury-design.jpg",
    },
    linens: {
      name: "Linens",
      category: "Linens",
      description: "High-quality bed linens",
      fullDescription: "The bedrooms are equipped with premium Egyptian cotton linens for maximum comfort and luxury.",
      instructions: [
        "All linens are provided and changed regularly",
        "Additional linens available in the hallway cabinet",
        "Request fresh linens from concierge if needed",
        "Please report any stains or damage to concierge",
      ],
      image: "/luxury-suite-bedroom.jpg",
    },
    coffee: {
      name: "Coffeemaker",
      category: "Kitchen",
      description: "Nespresso espresso machine",
      fullDescription:
        "Enjoy premium espresso or cappuccino with our professional Nespresso machine. Capsules are provided in the kitchen.",
      instructions: [
        "Fill water reservoir with fresh water",
        "Insert a Nespresso capsule into the chamber",
        "Place cup under the nozzle",
        "Press button for short or long coffee",
        "Machine will dispense in seconds",
        "Remove used capsule and dispose properly",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    espresso: {
      name: "Espresso Machine",
      category: "Kitchen",
      description: "Professional espresso preparation",
      fullDescription:
        "A professional espresso setup is available for those who prefer traditional espresso preparation.",
      instructions: [
        "Fill the water tank",
        "Add finely ground espresso to the portafilter",
        "Tamp the grounds evenly",
        "Insert into the machine",
        "Place cup under spout",
        "Press button and wait for extraction",
      ],
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    microwave: {
      name: "Microwave",
      category: "Kitchen",
      description: "Microwave oven",
      fullDescription: "Convenient microwave for quick meal preparation and reheating.",
      instructions: [
        "Place food in microwave-safe container",
        "Place container inside microwave",
        "Set time and power level using controls",
        "Press start",
        "Wait for beep and remove carefully",
      ],
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    oven: {
      name: "Oven",
      category: "Kitchen",
      description: "Gas oven",
      fullDescription: "Professional gas oven for all your cooking needs. Multiple cooking functions available.",
      instructions: [
        "Turn the oven dial to desired temperature",
        "Wait for preheat indicator light to turn off",
        "Place food on oven rack",
        "Close door and set timer",
        "Food is ready when timer sounds",
      ],
      videoId: "dQw4w9WgXcQ",
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    fridge: {
      name: "Refrigerator",
      category: "Kitchen",
      description: "Large refrigerator",
      fullDescription: "Spacious refrigerator for storing your groceries and beverages.",
      instructions: [
        "Store perishables on the middle shelves",
        "Vegetables go in the crisper drawers",
        "Beverages fit in the door compartments",
        "Freezer section for ice and frozen items",
        "Check temperature settings if needed",
      ],
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    freezer: {
      name: "Freezer",
      category: "Kitchen",
      description: "Freezer compartment",
      fullDescription: "Large freezer section for storing frozen items and ice.",
      instructions: [
        "Store frozen items in designated freezer section",
        "Ice maker is automatic",
        "Keep freezer door closed to maintain temperature",
      ],
      image: "/luxury-kitchen-with-marble-counters.jpg",
    },
    hotwater: {
      name: "Hot Water",
      category: "Utilities",
      description: "Hot water system",
      fullDescription: "Instant hot water available throughout the apartment from the modern water heating system.",
      instructions: [
        "Turn on any tap to access hot water",
        "Water will heat within seconds",
        "Adjust temperature with the tap handle",
        "Report any issues to concierge",
      ],
      image: "/spa-bathroom-luxury-design.jpg",
    },
    balcony: {
      name: "Balcony",
      category: "Outdoor",
      description: "Scenic balcony",
      fullDescription: "Enjoy stunning views from our private balcony overlooking the historic Naples skyline.",
      instructions: [
        "Balcony is accessible from the living room",
        "Enjoy fresh air and views",
        "Please keep safe and respect neighboring properties",
        "Beautiful at sunset for an evening drink",
      ],
      image: "/balcony-terrace-city-view.jpg",
    },
  }

  const amenity = amenityDetails[params.id]

  if (!amenity) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Amenity Not Found</h1>
          <Link href="/guest" className="text-primary hover:underline">
            Return to Guest Portal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/guest" className="flex items-center gap-2 text-primary hover:opacity-80 transition">
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-lg font-serif font-bold">{amenity.name}</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="pt-8">
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden bg-black">
          <img
            src={amenity.image || "/placeholder.svg"}
            alt={amenity.name}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-8 z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-4 rounded-lg backdrop-blur">
                <Star className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-balance">{amenity.name}</h1>
                <p className="text-lg text-white/80 font-light">{amenity.category}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">About This Amenity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">{amenity.fullDescription}</p>
            </div>

            {/* Video */}
            {amenity.videoId && (
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-6">How to Use</h2>
                <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={`https://img.youtube.com/vi/${amenity.videoId}/maxresdefault.jpg`}
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

            {/* Instructions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Instructions & Tips</h2>
              <div className="space-y-3">
                {amenity.instructions.map((instruction, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-secondary/20 border border-border rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-0.5">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-6 font-light">
                If you have questions or need assistance with this amenity, contact our concierge.
              </p>
              <a
                href="https://wa.me/393500313314?text=I%20need%20help%20with%20an%20amenity"
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
                src={`https://www.youtube.com/embed/${amenity.videoId}?autoplay=1`}
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
