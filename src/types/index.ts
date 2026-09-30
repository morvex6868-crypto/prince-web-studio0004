export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type CategoryCard = {
  id: string;
  title: string;
  iconName: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  badge: 'Concept Demo';
  image: string;
  description: string;
  industry: string;
  highlights: string[];
  deviceMockup: {
    heroHeading: string;
    subheading: string;
    actionText: string;
    features: string[];
  };
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export interface WebsiteRequirementsFormData {
  // Step 1: Basic Information
  fullName: string;
  businessName: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;

  // Step 2: Business Information
  businessType: string;
  businessDescription: string;

  // Step 3: Website Requirements (Purpose)
  purposes: string[];

  // Step 4: Pages / Features
  pagesAndFeatures: string[];

  // Step 5: Content
  servicesOrProducts: string;
  pricingDetails: string;
  openingHours: string;
  address: string;
  contactInformation: string;
  additionalContentInfo: string;

  // Step 6: Media
  hasLogo: string;
  hasPhotos: string;
  cloudStorageLink: string;
  mediaNotes: string;

  // Step 7: Additional Requirements
  additionalNotes: string;
  confirmedAccurate: boolean;
}
