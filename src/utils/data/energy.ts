// Centralised static content for the EcoVolt Energy marketing site.
// TODO: swap for real company data / a CMS once available.

export const COMPANY = {
  name: "EcoVolt Energy",
  phone: "+1 (901) 123-4567",
  email: "info@ecovolt.com",
  address: "123 Green Energy Blvd, Austin, TX 78701",
  hours: "Mon - Sat, 9am - 6pm",
};

export const IMAGES = {
  heroWindSolar:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
  windTurbinesField:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
  solarFarmAerial:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  windTurbineSky:
    "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1600&q=80",
  solarRooftop:
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
  industrialSolar:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80",
  sunsetSolar:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
};

export const STATS = [
  { value: "12+", label: "Years of Experience" },
  { value: "2.5GW+", label: "Clean Energy Delivered" },
  { value: "8,500+", label: "Successful Projects" },
  { value: "98%", label: "Customer Satisfaction" },
];

export const SERVICES = [
  {
    title: "Solar Energy Solutions",
    description:
      "High-efficiency solar systems for homes and businesses.",
    icon: "sun",
  },
  {
    title: "Wind Energy Solutions",
    description: "Harness the power of wind for a cleaner future.",
    icon: "wind",
  },
  {
    title: "Energy Storage Systems",
    description: "Smart storage solutions for energy reliability and savings.",
    icon: "battery",
  },
  {
    title: "EV Charging Solutions",
    description: "Fast, reliable, and convenient charging for every need.",
    icon: "plug",
  },
];

export const SERVICE_DETAILS = [
  {
    title: "Solar Energy Solutions",
    description:
      "From residential rooftops to utility-scale farms, we design, install, and maintain high-efficiency solar systems tailored to your energy needs.",
    icon: "sun",
    image: IMAGES.solarRooftop,
    features: [
      "Custom system design & site survey",
      "Premium monocrystalline panels",
      "Grid-tie & hybrid inverter options",
      "25-year performance warranty",
    ],
  },
  {
    title: "Wind Energy Solutions",
    description:
      "We plan and deploy onshore wind assets, from single turbines to full wind farms, engineered for maximum yield and minimal footprint.",
    icon: "wind",
    image: IMAGES.windTurbinesField,
    features: [
      "Wind resource assessment",
      "Turbine procurement & installation",
      "Remote performance monitoring",
      "Preventive maintenance plans",
    ],
  },
  {
    title: "Energy Storage Systems",
    description:
      "Battery storage that keeps power flowing when the sun sets or the grid goes down, sized precisely to your consumption profile.",
    icon: "battery",
    image: IMAGES.industrialSolar,
    features: [
      "Lithium-ion battery banks",
      "Smart load management",
      "Seamless backup power switching",
      "Real-time capacity monitoring",
    ],
  },
  {
    title: "EV Charging Solutions",
    description:
      "Level 2 and DC fast-charging infrastructure for homes, fleets, and commercial properties, installed end to end.",
    icon: "plug",
    image: IMAGES.solarFarmAerial,
    features: [
      "Home & workplace charge points",
      "Fleet charging hubs",
      "Networked billing & access control",
      "24/7 remote diagnostics",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Sustainable Solutions",
    description: "Eco-friendly systems for a better planet.",
    icon: "recycle",
  },
  {
    title: "Expert Engineers",
    description: "Certified professionals delivering the best results.",
    icon: "hard-hat",
  },
  {
    title: "Advanced Technology",
    description: "Innovative technology for maximum efficiency.",
    icon: "cpu",
  },
  {
    title: "End-to-End Support",
    description: "From consultation to maintenance, we've got you covered.",
    icon: "headset",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your needs and goals.",
    icon: "message-circle",
  },
  {
    number: "02",
    title: "Design & Plan",
    description: "We design the best solution for you.",
    icon: "ruler",
  },
  {
    number: "03",
    title: "Installation",
    description: "Our experts install high-quality systems.",
    icon: "wrench",
  },
  {
    number: "04",
    title: "Support & Maintain",
    description: "We provide ongoing support and maintenance.",
    icon: "life-buoy",
  },
];

export const PRICING_PLANS = [
  {
    name: "Residential",
    tagline: "Perfect for Homes",
    price: "$49",
    period: "/month",
    popular: false,
    features: [
      "Up to 5kW Solar System",
      "Standard Installation",
      "1 Year Maintenance",
      "24/7 Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Business",
    tagline: "Best for Businesses",
    price: "$99",
    period: "/month",
    popular: true,
    features: [
      "Up to 20kW Solar System",
      "Advanced Monitoring",
      "3 Year Maintenance",
      "Priority Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    tagline: "For Large Scale",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Custom Energy Solutions",
      "Dedicated Account Manager",
      "5 Year Maintenance",
      "24/7 Premium Support",
    ],
    cta: "Contact Us",
  },
];

export const TESTIMONIALS = [
  {
    name: "David Johnson",
    role: "Homeowner",
    quote:
      "EcoVolt Energy provided an excellent solar solution that reduced our energy bills significantly.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    quote:
      "Their team is professional, knowledgeable, and always available to support us.",
    avatar: "https://i.pravatar.cc/120?img=25",
  },
  {
    name: "Michael Brown",
    role: "CEO, GreenTech Ltd.",
    quote:
      "We trust EcoVolt Energy for all our energy needs. Highly recommended for businesses!",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];

export const KEY_FEATURES = [
  {
    title: "High Efficiency",
    description: "Maximize output with advanced technology.",
    icon: "zap",
  },
  {
    title: "Smart Monitoring",
    description: "Track performance in real-time with our smart monitoring system.",
    icon: "activity",
  },
  {
    title: "Cost Savings",
    description: "Reduce your electricity bills and save more every month.",
    icon: "piggy-bank",
  },
  {
    title: "Eco Friendly",
    description: "100% clean energy solutions for a sustainable future.",
    icon: "leaf",
  },
  {
    title: "Reliable Support",
    description: "24/7 customer support and maintenance services.",
    icon: "shield-check",
  },
  {
    title: "Custom Solutions",
    description: "Tailored solutions for homes, businesses, and industries.",
    icon: "settings",
  },
];

export const PROJECTS = [
  {
    title: "Solar Plant – California",
    category: "Solar Energy",
    detail: "5MW Solar Installation",
    image: IMAGES.solarFarmAerial,
  },
  {
    title: "Wind Farm – Texas",
    category: "Wind Energy",
    detail: "20MW Wind Energy Project",
    image: IMAGES.windTurbinesField,
  },
  {
    title: "Industrial Solar – Florida",
    category: "Solar Energy",
    detail: "25MW Rooftop Solar System",
    image: IMAGES.industrialSolar,
  },
  {
    title: "Coastal Wind Array – Oregon",
    category: "Wind Energy",
    detail: "15MW Offshore-Adjacent Farm",
    image: IMAGES.windTurbineSky,
  },
  {
    title: "Community Storage Hub – Arizona",
    category: "Energy Storage",
    detail: "40MWh Battery Storage Facility",
    image: IMAGES.sunsetSolar,
  },
  {
    title: "Rooftop Solar – Nevada",
    category: "Solar Energy",
    detail: "10MW Commercial Rooftop Array",
    image: IMAGES.solarRooftop,
  },
];

export const TEAM = [
  {
    name: "James Anderson",
    role: "CEO & Founder",
    avatar: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Engineering",
    avatar: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Daniel Carter",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/300?img=14",
  },
  {
    name: "Olivia Thompson",
    role: "Renewable Specialist",
    avatar: "https://i.pravatar.cc/300?img=45",
  },
];

export const BLOG_POSTS = [
  {
    title: "The Future of Solar Energy in 2026",
    category: "Solar Energy",
    date: "May 10, 2026",
    image: IMAGES.sunsetSolar,
    slug: "future-of-solar-energy",
  },
  {
    title: "How Wind Energy is Powering the World",
    category: "Sustainability",
    date: "May 5, 2026",
    image: IMAGES.windTurbineSky,
    slug: "wind-energy-powering-the-world",
  },
  {
    title: "Benefits of Renewable Energy for Businesses",
    category: "Clean Energy",
    date: "Apr 28, 2026",
    image: IMAGES.solarFarmAerial,
    slug: "renewable-energy-for-businesses",
  },
];

export const FAQS = [
  {
    question: "How long does a solar installation take?",
    answer:
      "Most residential installations are completed within 1-3 days once permits are approved. Commercial and utility-scale projects are scoped individually during consultation.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes. We offer flexible financing plans, leasing, and power purchase agreements (PPAs) tailored to residential, business, and enterprise customers.",
  },
  {
    question: "What maintenance is required after installation?",
    answer:
      "Our systems come with remote monitoring and scheduled maintenance visits included in every plan, so issues are caught and resolved before they affect output.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We currently operate across the United States with regional teams in Texas, California, Florida, Arizona, and Nevada — with more locations opening every year.",
  },
];
