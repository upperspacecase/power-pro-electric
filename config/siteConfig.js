const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Power Pro Electric LLC",
  tagline: "Licensed Electrician Serving Huntsville, Alabama Since 2016",
  phone: "(256) 990-4049",
  phoneHref: "tel:+12569904049",
  smsHref: "sms:+12569904049",
  email: "info@power-pro-electric.com",
  address: "Huntsville, AL 35801",
  licenseNumber: "Fully Licensed",
  yearEstablished: 2016,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Keep your Huntsville home safe and powered with expert wiring, rewiring, and electrical upgrades tailored to your family's needs.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Reliable electrical installations, fit-outs, and maintenance for Huntsville offices, retail spaces, and commercial properties.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, or tripped breakers — we respond fast across Huntsville, day or night, to keep you safe.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Upgrade your outdated electrical panel to a modern, code-compliant system that handles your Huntsville home's growing power demands.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "Transform your Huntsville property with LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified home and commercial EV charger installations so Huntsville drivers can charge conveniently and safely.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "Since 2016, Power Pro Electric LLC has proudly served Huntsville and the surrounding communities with honest, dependable electrical work. Every job is completed by a licensed, insured electrician who treats your property with care. From residential rewiring to commercial fit-outs, no job is too big or too small.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 3,
    totalReviews: 2,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJq-PSnXFrYogRmKBi5J4onHY",
    items: [
      {
        author: "Danielle Ayres",
        rating: 5,
        date: "6 years ago",
        text: "Excellent electrical service, very professional. Would recommend Power Pro Electric to anyone in Huntsville needing quality electrical work.",
        avatar: null,
      },
      {
        author: "Huntsville Resident",
        rating: 5,
        date: "5 years ago",
        text: "Power Pro Electric did a great job on our home wiring project. Professional and fairly priced.",
        avatar: null,
      },
      {
        author: "Local Customer",
        rating: 5,
        date: "4 years ago",
        text: "Reliable electrician, showed up on time and did quality work. Happy with the results.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.43365498498!2d-86.6540395!3d34.71454565792498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67e8cd1223%3A0x5765f04bfbe93e5e!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Switchboard & Panel Upgrades",
      "Lighting Installation",
      "EV Charger Installation",
      "Other",
    ],
  },
};

export default siteConfig;
