/**
 * Shiny Glow Academy & Shiny Plush Salon
 * Single Source of Truth for Configuration & Content
 * Easily edit business info, courses, workshops, salon services, and FAQs here.
 */

export const siteConfig = {
  brand: {
    academyName: "Shiny Glow Academy",
    salonName: "Shiny Plush",
    tagline: "Empowering Beauty Professionals & Elevating Personal Grace in Perambur, Chennai",
    academyShortDesc: "Chennai's premier beauty & makeup training academy offering hands-on certified courses, international master diplomas, and weekend skill workshops.",
    salonShortDesc: "Exclusive luxury beauty studio in Perambur offering advanced skincare, hair transformations, and exquisite bridal makeovers.",
  },

  contact: {
    phoneFormatted: "+91 99412 22294",
    phoneRaw: "919941222294",
    whatsappNumber: "919941222294",
    email: "enquiry@shinyglowacademy.com",
    address: {
      line1: "Perambur High Road, Near Railway Station",
      city: "Perambur, Chennai",
      state: "Tamil Nadu",
      pincode: "600011",
      full: "Perambur, Chennai, Tamil Nadu - 600011, India"
    },
    timings: {
      academyCourses: "Monday to Friday: 11:00 AM – 5:00 PM",
      academyWorkshops: "Saturday & Sunday: 11:00 AM – 5:00 PM",
      salon: "Monday to Sunday: 10:00 AM – 8:00 PM"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.002877028984!2d80.2307521!3d13.1118124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265c023d8ad91%3A0x63ebef63e3d3600f!2sPerambur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectLink: "https://maps.google.com/?q=Perambur+Chennai"
  },

  socials: {
    academyInstagram: "https://www.instagram.com/shinyglow3__academy",
    salonInstagram: "https://www.instagram.com/shinyplush_on",
    academyHandle: "@shinyglow3__academy",
    salonHandle: "@shinyplush_on"
  },

  courses: [
    {
      id: "beauty-5-days",
      title: "Beauty Classes",
      duration: "5 Days",
      schedule: "Mon - Fri | 11:00 AM to 5:00 PM",
      modes: ["Online", "Offline"],
      level: "Foundation / Beginner",
      certificate: "Academy Certificate Provided",
      studyMaterialNote: "Complete study materials provided as per course.",
      badge: "Popular Quick Course",
      image: "/assets/course_beauty_basics.png",
      description: "Ideal introductory course for aspiring beauticians covering core salon services, hygienic practices, skin prep, threading, and essential facials.",
      syllabus: [
        "Skin structure & facial hygiene basics",
        "Threading techniques (Eyebrows, Upper lip, Face)",
        "Waxing fundamentals (Soft wax & Peel-off)",
        "Cleanup routines & customized facial steps",
        "Client consultation & product selection"
      ]
    },
    {
      id: "adv-beauty-cosmetology-15-days",
      title: "Advanced Beauty, Cosmetology & Aesthetic Courses",
      duration: "15 Days",
      schedule: "Mon - Fri | 11:00 AM to 5:00 PM",
      modes: ["Online", "Offline"],
      level: "Advanced Professional",
      certificate: "Advanced Cosmetology Certification",
      studyMaterialNote: "Study materials & practical demonstration kit guidance provided.",
      badge: "Most In-Demand",
      image: "/assets/course_advanced_cosmetology.png",
      description: "Master modern skin treatments, aesthetic cosmetology tools, chemical peels, and anti-aging therapies under expert hands-on supervision.",
      syllabus: [
        "Advanced skin analysis & pore diagnosis",
        "Hydra-facial & ultrasonic skin scrubbing",
        "Chemical peeling protocols & hyperpigmentation",
        "Anti-aging therapies & high-frequency treatment",
        "Acne management & post-treatment care",
        "Salon hygiene standards & client safety"
      ]
    },
    {
      id: "makeup-1-month",
      title: "Professional Makeup Classes",
      duration: "1 Month",
      schedule: "Mon - Fri | 11:00 AM to 5:00 PM",
      modes: ["Online", "Offline"],
      level: "Professional Artist",
      certificate: "Professional Makeup Artist Certificate",
      studyMaterialNote: "Study materials & product list provided.",
      badge: "Career Focused",
      image: "/assets/course_professional_makeup.png",
      description: "Comprehensive makeup artistry program covering bridal, HD, airbrush look techniques, color correction, and portfolio building.",
      syllabus: [
        "Skin prep, color theory & undertone matching",
        "Flawless base, contouring & highlighting",
        "Eye makeup styles (Smokey, Cut crease, Soft glam)",
        "Bridal makeup (South Indian, North Indian, Muhurtham)",
        "Saree draping basics & dupatta setting",
        "Portfolio photography & social media branding"
      ]
    },
    {
      id: "adv-beauty-makeup-3-months",
      title: "Advanced Beauty + Makeup (International)",
      duration: "3 Months",
      schedule: "Mon - Fri | 11:00 AM to 5:00 PM",
      modes: ["Online", "Offline"],
      level: "Master Diploma",
      certificate: "International Accreditation Certificate",
      studyMaterialNote: "Full study materials & practice tools provided as per course.",
      badge: "International Certification",
      image: "/assets/course_master_diploma.png",
      description: "Our flagship master program combining complete cosmetology, advanced makeup, hair styling, extensions, and salon management training.",
      syllabus: [
        "Complete Cosmetology & Aesthetic Skincare Module",
        "Master Makeup Artistry (HD, Airbrush, Editorial)",
        "Bridal Hair Styling & Contemporary Updos",
        "Introduction to Nail & Lash Extensions",
        "Salon Management, Client Handling & Pricing Strategy",
        "Live Model Practicals & International Certification Assessment"
      ]
    }
  ],

  workshops: [
    {
      id: "nail-extensions",
      title: "Nail Extensions Workshop",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Sparkles",
      image: "/assets/service_nail_extensions.png",
      highlights: "Acrylic, Gel Overlay, Tip extensions, UV Curing & Nail Art basics."
    },
    {
      id: "hair-extensions",
      title: "Hair Extensions Masterclass",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Scissors",
      image: "/assets/ws_hair_extensions.png",
      highlights: "Micro-ring, Tape-in & Clip-in application, removal & maintenance."
    },
    {
      id: "eyelash-extensions",
      title: "Eyelash Extensions Workshop",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Eye",
      image: "/assets/ws_eyelash_extensions.png",
      highlights: "Classic 1D, Volume lash techniques, Lash lifting & Tinting procedures."
    },
    {
      id: "saree-prepleating",
      title: "Saree Pre-pleating & Box Folding",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Shirt",
      image: "/assets/WhatsApp Image 2026-10-07 at 11.41.21 PM (2).jpeg",
      highlights: "Silk saree pleating, pinless draping, box packing & quick client setup."
    },
    {
      id: "flower-making",
      title: "Artificial Flower Making Art",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Flower2",
      image: "/assets/ws_flower_making.png",
      highlights: "Crafting artificial bridal gajras, floral jewelry & hair accessories."
    },
    {
      id: "hair-styling",
      title: "Professional Hair Styling",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "Wand2",
      image: "/assets/WhatsApp Image 2026-10-07 at 11.35.17 PM.jpeg",
      highlights: "Hollywood waves, traditional South Indian braids, & messy updos."
    },
    {
      id: "hair-care",
      title: "Hair Care & Spa Treatments",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "HeartPulse",
      image: "/assets/service_hair_keratin.png",
      highlights: "Scalp analysis, Keratin consultation, Smoothening & Deep hair spa."
    },
    {
      id: "product-knowledge",
      title: "Advanced Product Knowledge",
      days: "Saturday & Sunday",
      timings: "11:00 AM to 5:00 PM",
      icon: "BookOpen",
      image: "/assets/ws_product_knowledge.png",
      highlights: "Ingredient chemistry, skin compatibility, and product curation."
    }
  ],

  highlightsStrip: [
    { text: "Online & Offline Classes", desc: "Flexible batch timings for every student" },
    { text: "Study Materials Provided", desc: "Structured guide as per course curriculum" },
    { text: "100% Hands-on Training", desc: "Practice on live models & modern equipment" },
    { text: "International Certification", desc: "Recognized certification for 3-month course" }
  ],

  whyChooseUs: [
    {
      title: "Certified Expert Trainers",
      description: "Learn directly from seasoned beauty educators with years of industry & salon practice."
    },
    {
      title: "Flexible Learning Modes",
      description: "Choose between interactive online virtual sessions or intensive in-person offline classes."
    },
    {
      title: "Affordable & transparent fees",
      description: "High quality education with flexible installment options & no hidden expenses."
    },
    {
      title: "Prime Perambur Location",
      description: "Conveniently located near Perambur transit hubs with easy access from all parts of Chennai."
    },
    {
      title: "Career & Business Guidance",
      description: "Learn how to launch your own studio, price your services, and attract paying clients."
    }
  ],

  salonServices: [
    { 
      title: "Advanced Skincare & Facials", 
      desc: "Hydra facials, collagen boosting, anti-pigmentation, herbal cleanups",
      image: "/assets/service_skincare_facial.png"
    },
    { 
      title: "Hair Styling & Keratin Care", 
      desc: "Keratin smoothening, hair Botox, trendy haircuts, spa treatments",
      image: "/assets/service_hair_keratin.png"
    },
    { 
      title: "Bridal & Party Makeovers", 
      desc: "HD bridal makeup, airbrush makeup, saree draping, hair updos",
      image: "/assets/service_bridal_makeover.png"
    },
    { 
      title: "Nail Extensions & Art", 
      desc: "Gel extensions, chrome nail art, French manicure, pedicure spa",
      image: "/assets/service_nail_extensions.png"
    },
    { 
      title: "Thread & Organic Waxing", 
      desc: "Painless wax, brow shaping, full body wax, soothing post-care",
      image: "/assets/service_waxing_threading.png"
    }
  ],

  faqs: [
    {
      q: "Where is Shiny Glow Academy located in Chennai?",
      a: "Shiny Glow Academy is conveniently located in Perambur, Chennai, Tamil Nadu. It is easily accessible via train and bus transit from surrounding areas."
    },
    {
      q: "Are the courses available online or offline?",
      a: "We offer both Online and Offline training modes. Offline classes feature 100% live model practicals at our Perambur academy, while Online classes offer interactive step-by-step guidance."
    },
    {
      q: "Are study materials provided for the courses?",
      a: "Yes! Comprehensive study materials and curriculum guides are provided for all our main diploma and certificate courses as per course guidelines."
    },
    {
      q: "What certification will I receive upon course completion?",
      a: "Students receive course certificates for all programs. Students completing our 3-Month Master Course earn an International Certificate recognized for professional beautician careers."
    },
    {
      q: "What are the academy batch timings?",
      a: "Main courses run Monday to Friday from 11:00 AM to 5:00 PM. Weekend workshops run on Saturday and Sunday from 11:00 AM to 5:00 PM."
    },
    {
      q: "How can I enquire about course fees and enrollment?",
      a: "Click any 'Enquire Now' button on our website or text/call us directly on WhatsApp at +91 99412 22294. Our admissions team will share complete fee structures immediately."
    }
  ],

  testimonials: [
    {
      name: "Priya S.",
      role: "3-Month International Diploma Student",
      location: "Perambur, Chennai",
      comment: "Joining Shiny Glow Academy was the best decision for my career! The hands-on practical training gave me confidence. I now run my own home studio."
    },
    {
      name: "Kavitha R.",
      role: "Professional Makeup Course Graduate",
      location: "Vyasarpadi, Chennai",
      comment: "The trainers are so patient and detail-oriented. The saree pre-pleating and bridal makeup modules were exceptionally thorough!"
    },
    {
      name: "Divya M.",
      role: "Nail Extension Workshop Student",
      location: "Anna Nagar, Chennai",
      comment: "Attended the 2-day weekend nail workshop. Super practical, clear explanations, and study material helped a lot. Highly recommend!"
    }
  ]
};
