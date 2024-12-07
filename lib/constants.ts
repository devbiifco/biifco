

export const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const

export const heroSlides = [
  {
    title: "REIMAGINE\nTHE FUTURE",
    description: "Breaking boundaries with revolutionary solutions that challenge the status quo.",
    buttonText: "Join the Revolution",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
    accent: "from-violet-600/30 via-background/10 to-transparent",
  },
  {
    title: "DARE TO BE\nDIFFERENT",
    description: "Where innovation meets ambition, creating tomorrow's success stories today.",
    buttonText: "Make Your Mark",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop",
    accent: "from-blue-600/30 via-background/10 to-transparent",
  },
  {
    title: "THINK BOLD\nGO BEYOND",
    description: "Pushing the boundaries of what's possible, one breakthrough at a time.",
    buttonText: "Start Now",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2032&auto=format&fit=crop",
    accent: "from-emerald-600/30 via-background/10 to-transparent",
  },
] as const

export const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small farms and individual ranchers",
    features: [
      "Up to 100 cattle records",
      "Basic tracking & monitoring",
      "Mobile app access",
      "Email support",
      "Basic reporting",
    ],
    expandedFeatures: [
      "QR code generation",
      "Temperature monitoring",
      "Basic analytics dashboard",
      "2 team members",
      "30-day data retention",
    ],
    popular: false,

  },
  {
    name: "Professional",
    price: "149",
    description: "Ideal for medium-sized operations",
    features: [
      "Up to 1,000 cattle records",
      "Advanced tracking & monitoring",
      "Priority support",
      "Advanced reporting",
      "API access",
    ],
    expandedFeatures: [
      "Custom QR codes",
      "Real-time alerts",
      "Advanced analytics",
      "10 team members",
      "90-day data retention",
      "Batch operations",
      "Export capabilities",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "349",
    description: "For large-scale farming operations",
    features: [
      "Up to 5,000 cattle records",
      "Enterprise-grade security",
      "24/7 priority support",
      "Custom integrations",
      "Dedicated account manager",
    ],
    expandedFeatures: [
      "White-label solution",
      "Custom analytics",
      "Unlimited team members",
      "1-year data retention",
      "Priority feature requests",
      "Custom reporting",
      "SLA guarantee",
      "Compliance reporting",
    ],
    popular: false,

  },
] as const

import { LayoutDashboard, Wallet, History, Settings, HelpCircle } from "lucide-react";

// Aquí asignas los iconos como componentes
export const sidebarItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,  // Usas el componente del ícono
  },
  {
    title: "Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,  // Usas el componente del ícono
  },
  {
    title: "Activity",
    href: "/dashboard/activity",
    icon: History,  // Usas el componente del ícono
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,  // Usas el componente del ícono
  },
  {
    title: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,  // Usas el componente del ícono
  },
] as const;