import {
  CategoryCard,
  FAQItem,
  NavigationItem,
  PortfolioProject,
  ProcessStep,
  ServiceItem,
} from '../types';

export const NAV_LINKS: NavigationItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Our Work', href: '#work', id: 'work' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const TRUST_STRIP_ITEMS = [
  { title: 'Modern Design', desc: 'Crafted with premium typography, intentional whitespace, and refined aesthetics.' },
  { title: 'Mobile Responsive', desc: 'Engineered from the ground up for seamless smartphone and tablet interaction.' },
  { title: 'Fast Performance', desc: 'Lightweight code and compressed assets ensuring instant page loading.' },
  { title: 'SEO Ready', desc: 'Semantic HTML markup and structured metadata for search engine indexing.' },
  { title: 'WhatsApp Integration', desc: 'One-tap direct chat connection so high-intent visitors reach you immediately.' },
  { title: 'Easy Updates', desc: 'Modular components structured for quick future content and pricing revisions.' },
];

export const WHAT_WE_BUILD: CategoryCard[] = [
  {
    id: 'restaurant',
    title: 'Restaurant Websites',
    iconName: 'UtensilsCrossed',
    description: 'Digital menus, high-definition dining showcases, table reservation flows, and one-tap WhatsApp ordering.',
  },
  {
    id: 'gym',
    title: 'Gym & Fitness Websites',
    iconName: 'Dumbbell',
    description: 'Class timetables, personal trainer profiles, membership package breakdowns, and free trial pass booking forms.',
  },
  {
    id: 'salon',
    title: 'Salon & Beauty Websites',
    iconName: 'Sparkles',
    description: 'Service treatment rate cards, style lookbook galleries, stylist bios, and mobile appointment requests.',
  },
  {
    id: 'hotel',
    title: 'Hotel Websites',
    iconName: 'BedDouble',
    description: 'Suite showcases, amenity spotlights, direct stay inquiry forms, check-in information, and interactive neighborhood maps.',
  },
  {
    id: 'coaching',
    title: 'Coaching & Education Websites',
    iconName: 'GraduationCap',
    description: 'Course curriculums, batch schedules, faculty credentials, admission enquiry forms, and demo class registrations.',
  },
  {
    id: 'business',
    title: 'Business Websites',
    iconName: 'Briefcase',
    description: 'Corporate credibility, clear value propositions, client lead forms, business hours, and professional trust signals.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Websites',
    iconName: 'Layout',
    description: 'Editorial case studies, visual media presentations, client inquiry flows, and personal brand storytelling.',
  },
  {
    id: 'college',
    title: 'College / Institute Websites',
    iconName: 'School',
    description: 'Department listings, campus facilities, academic calendars, prospectus downloads, and institutional notices.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Websites',
    iconName: 'Building2',
    description: 'Property floor plans, location highlights, brochure request engines, virtual tour links, and site visit scheduling.',
  },
  {
    id: 'professional',
    title: 'Professional Services Websites',
    iconName: 'ShieldCheck',
    description: 'Consulting, legal, and financial practice overviews, advisory services, consultation booking, and credential verification.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Bespoke UI layouts crafted around your brand identity, target clientele, and specific business conversion goals.',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Clean, modern semantic frontend development with zero template bloat, high security, and fast execution.',
  },
  {
    id: 'mobile-responsive-design',
    title: 'Mobile Responsive Design',
    description: 'Pixel-perfect responsiveness across iPhones, Android phones, iPads, laptops, and ultra-wide desktop monitors.',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-impact, conversion-focused single-page funnels engineered for advertising campaigns and specific product launches.',
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Comprehensive multi-page websites establishing corporate legitimacy, service menus, team bios, and customer inquiries.',
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Minimalist showcase architectures tailored for creatives, consultants, architects, and independent specialists.',
  },
  {
    id: 'contact-lead-forms',
    title: 'Contact & Lead Forms',
    description: 'Validated, anti-spam inquiry capture forms that deliver customer requests directly to your primary inbox.',
  },
  {
    id: 'whatsapp-integration',
    title: 'WhatsApp Integration',
    description: 'Floating click-to-chat triggers allowing mobile prospects to initiate immediate conversations with your team.',
  },
  {
    id: 'google-maps-integration',
    title: 'Google Maps Integration',
    description: 'Embedded interactive maps and directions so local customers can locate and visit your physical address effortlessly.',
  },
  {
    id: 'basic-seo-setup',
    title: 'Basic SEO Setup',
    description: 'Structured metadata, OpenGraph tags, semantic heading hierarchy, and search engine submission preparation.',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Lightweight asset compression, modern responsive images, and rapid render speeds for friction-free browsing.',
  },
  {
    id: 'website-maintenance-updates',
    title: 'Website Maintenance & Updates',
    description: 'Ongoing technical care, price adjustments, seasonal menu updates, and content additions as your business grows.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'demo-restaurant',
    title: 'Aura Artisan Bistro',
    category: 'Restaurant',
    badge: 'Concept Demo',
    industry: 'Hospitality & Dining',
    image: '/src/assets/images/portfolio_restaurant_1790694641301.jpg',
    description: 'An editorial dining showcase featuring live categorized menus, wine pairings, table reservation requests, and direct WhatsApp ordering.',
    highlights: ['Interactive Digital Menu', 'Reservation Request Engine', 'Atmospheric Imagery Scrims', 'Direct WhatsApp Ordering'],
    deviceMockup: {
      heroHeading: 'Artisanal Dining Crafted With Seasonal Ingredients',
      subheading: 'Experience contemporary seasonal gastronomy in a serene, candlelit setting.',
      actionText: 'Reserve a Table',
      features: ['Seasonal 5-Course Tasting Menu', 'Curated Natural Wine Selection', 'Private Event Dining'],
    },
  },
  {
    id: 'demo-gym',
    title: 'Apex Athletics Club',
    category: 'Gym',
    badge: 'Concept Demo',
    industry: 'Fitness & Performance',
    image: '/src/assets/images/portfolio_gym_1790694655073.jpg',
    description: 'A high-impact athletic club layout featuring class timetables, coach credentials, membership comparisons, and trial pass booking.',
    highlights: ['Live Class Schedule Grid', '1-Day Free Trial Signup', 'Coach Profiles & Certifications', 'Transparent Membership Matrix'],
    deviceMockup: {
      heroHeading: 'High-Performance Training for Determined Athletes',
      subheading: 'Olympic lifting platforms, cardio mezzanine, and expert strength coaches.',
      actionText: 'Claim 1-Day Trial Pass',
      features: ['Daily HIIT & Conditioning', 'One-on-One Strength Coaching', 'Recovery & Sauna Access'],
    },
  },
  {
    id: 'demo-salon',
    title: 'Maison Éclat Wellness & Hair',
    category: 'Salon',
    badge: 'Concept Demo',
    industry: 'Beauty & Spa',
    image: '/src/assets/images/portfolio_salon_1790694666595.jpg',
    description: 'A serene boutique salon website showcasing hair artistry treatments, spa rate cards, stylist portfolios, and one-tap appointment booking.',
    highlights: ['Treatment Rate Card', 'Stylist Lookbook Grid', 'Mobile WhatsApp Booking', 'Pre-Care Consultation Form'],
    deviceMockup: {
      heroHeading: 'Modern Hair Artistry & Restorative Wellness',
      subheading: 'Bespoke color formulation, precision cuts, and organic hair rituals.',
      actionText: 'Book an Appointment',
      features: ['Balayage & Color Correction', 'Scalp Therapy Treatments', 'Bridal & Editorial Styling'],
    },
  },
  {
    id: 'demo-hotel',
    title: 'Verdant Highlands Retreat',
    category: 'Hotel',
    badge: 'Concept Demo',
    industry: 'Boutique Hospitality',
    image: '/src/assets/images/portfolio_hotel_1790695038385.jpg',
    description: 'An elegant hospitality retreat website with suite galleries, amenity spotlights, direct stay reservation requests, and regional excursions.',
    highlights: ['Panoramic Suite Tours', 'Amenity Checklist', 'Direct Stay Inquiry Engine', 'Interactive Local Itinerary'],
    deviceMockup: {
      heroHeading: 'Serene Highland Sanctuary in the Heart of Nature',
      subheading: 'Spacious stone cottages with panoramic mountain views and farm-to-table breakfast.',
      actionText: 'Check Room Availability',
      features: ['Heated Infinity Pool', 'Guided Nature Trails', 'Complimentary Estate Breakfast'],
    },
  },
  {
    id: 'demo-coaching',
    title: 'Horizon STEM & Competitive Academy',
    category: 'Coaching Institute',
    badge: 'Concept Demo',
    industry: 'Education & Academics',
    image: '/src/assets/images/portfolio_coaching_1790695023057.jpg',
    description: 'A structured academic website engineered to drive demo class registrations, showcasing faculty credentials, course syllabi, and batch timetables.',
    highlights: ['Curriculum Modules', 'Free Demo Class Form', 'Faculty Qualifications', 'Batch Timings & Fee Structure'],
    deviceMockup: {
      heroHeading: 'Inspiring the Next Generation of Engineers & Thinkers',
      subheading: 'Practical robotics, coding, and mathematics for students ages 10 to 18.',
      actionText: 'Register for Free Demo Class',
      features: ['Hands-on Hardware Labs', 'Small Batch Sizes (Max 12)', 'Mentored by Industry Engineers'],
    },
  },
  {
    id: 'demo-local-business',
    title: 'Stone & Flour Artisan Bakery',
    category: 'Local Business',
    badge: 'Concept Demo',
    industry: 'Retail & Specialty Food',
    image: '/src/assets/images/portfolio_local_shop_1790695056428.jpg',
    description: 'A warm, community-focused website for an artisan retail bakery featuring fresh daily bakes, store timings, map directions, and pre-orders.',
    highlights: ['Daily Bake Catalog', 'Store Hours & Google Map', 'Click-to-Call Contact', 'WhatsApp Pre-Order Desk'],
    deviceMockup: {
      heroHeading: 'Slow-Fermented Sourdough & French Pastries',
      subheading: 'Baked fresh every morning in small batches with heirloom organic grains.',
      actionText: 'View Today’s Bakes',
      features: ['100% Organic Flours', 'Natural 36-Hour Fermentation', 'Pre-Order for Weekend Pickups'],
    },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us About Your Business',
    description: 'Share your business goals, target clientele, required pages, and essential functionality via our structured requirement form or a direct conversation.',
  },
  {
    number: '02',
    title: 'Share Your Content',
    description: 'Provide your logo, service details, pricing structure, address, and any existing photos. If you do not have photos or text yet, we will guide you with clear frameworks.',
  },
  {
    number: '03',
    title: 'We Design Your Website',
    description: 'We construct a custom responsive layout with high-character typography, optimal visual hierarchy, and strategic conversion pathways tailored specifically to your trade.',
  },
  {
    number: '04',
    title: 'You Review & Request Changes',
    description: 'Explore your staging website on your smartphone, tablet, and computer. We review your feedback collaboratively and refine copy, images, and layout elements.',
  },
  {
    number: '05',
    title: 'We Launch Your Website',
    description: 'We configure your domain records, set up hosting, run final mobile responsiveness and speed checks, and deploy your site live to the web.',
  },
  {
    number: '06',
    title: 'You Go Live',
    description: 'Your new website is ready to receive customers, capture leads, and establish authentic credibility. We remain available for ongoing updates and support.',
  },
];

export const FEATURES_LIST = [
  { title: 'Responsive Design', desc: 'Adapts effortlessly to all phone, tablet, laptop, and desktop viewports.' },
  { title: 'Fast Loading', desc: 'Optimized assets and modern semantic code for lightning-fast first contentful paint.' },
  { title: 'Modern UI/UX', desc: 'Clean, intentional interfaces that project high competence and trust.' },
  { title: 'SEO-Friendly Structure', desc: 'Built with search-engine-ready tags, schema markup, and accessible heading hierarchy.' },
  { title: 'WhatsApp Button', desc: 'Direct click-to-chat triggers for high-intent visitors on mobile.' },
  { title: 'Contact Forms', desc: 'Reliable lead capture modules with built-in validation.' },
  { title: 'Google Maps', desc: 'Embedded location maps and turn-by-turn driving directions.' },
  { title: 'Social Media Links', desc: 'Branded links connecting visitors to your official social presences.' },
  { title: 'Gallery', desc: 'High-definition responsive galleries for facilities, foods, styles, or products.' },
  { title: 'Services / Pricing Sections', desc: 'Clear, structured breakdowns of offerings, rate cards, and inclusions.' },
  { title: 'Easy Content Updates', desc: 'Modular architecture allowing hassle-free future text and image revisions.' },
  { title: 'Secure Deployment', desc: 'Standard HTTPS encryption and modern hosting configurations.' },
  { title: 'Custom Design', desc: 'Bespoke layouts engineered for your industry without generic template constraints.' },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does the website creation process work?',
    answer: 'Our process is simple and structured across six milestones: (1) You tell us about your business, (2) You share your content or outline, (3) We design and build your website, (4) You review a live staging preview and request revisions, (5) We configure hosting and domain records, and (6) Your website goes live.',
  },
  {
    question: 'What information do I need to provide?',
    answer: 'Basic business details: your business name, contact information, service or product lists, rough pricing (if public), opening hours, and location. If you have a logo and photos, you can share them; if not, we can provide clean typography wordmarks and curated professional imagery.',
  },
  {
    question: 'Can you build a website for my type of business?',
    answer: 'Yes. We build websites for restaurants, gyms, salons, hotels, coaching institutes, schools, shops, real estate agents, doctors, lawyers, consultants, and local service providers. Every website is structured around how your specific customers evaluate and book services.',
  },
  {
    question: 'Will the website work on mobile phones?',
    answer: 'Yes, completely. Mobile responsiveness is a central priority. We design and test thoroughly on actual smartphone and tablet screen widths to guarantee fast loading, legible typography, and intuitive touch targets.',
  },
  {
    question: 'Can I request changes after seeing the website?',
    answer: 'Yes. Every project includes a structured review and revision phase where you review a live link and provide feedback. We adjust wording, images, spacing, and layout until you are confident with the result.',
  },
  {
    question: 'Can I update my website later?',
    answer: 'Yes. We structure all websites with clean, modular code. Whenever you add new services, change prices, update your menu, or launch announcements, we provide swift maintenance and update support.',
  },
  {
    question: 'Do I need a domain and hosting?',
    answer: 'Yes, every live website requires a domain name (like yourbusiness.com) and secure web hosting. If you already have these, we can launch directly onto your account.',
  },
  {
    question: 'Can you help with domain and hosting?',
    answer: 'Yes, absolutely. If you do not have a domain or hosting yet, we will recommend the most cost-effective and dependable registrars, guide you step-by-step, and handle the technical setup for you.',
  },
  {
    question: 'Can I add WhatsApp and Google Maps?',
    answer: 'Yes. One-tap WhatsApp chat buttons and interactive Google Maps pins are standard features that we frequently implement to help local visitors contact or visit your physical location easily.',
  },
  {
    question: 'How long does a website project take?',
    answer: 'Standard business websites and landing pages typically take 1 to 2 weeks from the moment content requirements are confirmed. More complex multi-page or custom feature websites may take 2 to 3 weeks depending on scope and revision cycles.',
  },
];

export const PLACEHOLDER_CONTACT = {
  businessName: 'PRINCE WEB STUDIO',
  tagline: 'Professional Websites for Modern Businesses',
  email: 'contact@princewebstudio.com',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  location: 'Serving businesses worldwide · Remote-first studio',
  availability: 'Currently accepting new projects',
  responseWindow: 'Replies within 24–48 business hours',
};
