import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find local businesses near you',
      description: 'Search local business listings, compare services, and help customers discover trusted companies nearby.',
      openGraphTitle: 'Find local businesses near you',
      openGraphDescription: 'Browse business listings, service areas, reviews, and contact details through a clean local directory.',
      keywords: ['business directory', 'local business listings', 'business search', 'claim listing'],
    },
    hero: {
      badge: 'Local business search',
      title: ['Find a Business', 'Near You.'],
      description: 'Search trusted local merchants, compare services, and help your company get discovered by customers ready to call, visit, or book.',
      primaryCta: { label: 'Find businesses', href: '/listing' },
      secondaryCta: { label: 'Claim your listing', href: '/create' },
      searchPlaceholder: 'Landscapers, restaurants, plumbers...',
      focusLabel: 'Directory',
      featureCardBadge: 'listing visibility',
      featureCardTitle: 'Clean business profiles help customers choose faster.',
      featureCardDescription: 'Show phone, location, services, photos, and service area details in one practical listing page.',
    },
    intro: {
      badge: 'Who we are',
      title: 'Our mission is to help local businesses get found everywhere customers search.',
      paragraphs: [
        'Customers want clear answers before they call. We organize business listings so service details, locations, photos, categories, and contact options are easy to scan.',
        'Business owners need a simple way to improve local visibility without rebuilding their entire web presence. A complete listing helps strengthen discovery and trust.',
        'The directory is designed around practical decisions: what a business does, where it serves, how to reach it, and why it is worth choosing.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Fast local search by business type, keyword, and city.',
        'Listing cards that show location, category, and clear next steps.',
        'Profile pages with photos, contact details, services, and service areas.',
        'Content focused on business discovery, not generic publishing.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Add a business', href: '/create' },
    },
    cta: {
      badge: 'Free business listing',
      title: 'Claim your business page and make your services easier to find.',
      description: 'Add the essentials customers need: business description, categories, phone, website, service area, hours, and photos.',
      primaryCta: { label: 'Create a listing', href: '/create' },
      secondaryCta: { label: 'Contact support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'Local business discovery should be clear, useful, and easy to trust.',
    description: `${slot4BrandConfig.siteName} helps customers find local companies and gives business owners a cleaner way to present their services online.`,
    paragraphs: [
      'Every listing is arranged around the details that matter in a buying decision: what the business offers, where it works, how to contact it, and what makes it credible.',
      'The experience keeps directory browsing focused and normal-sized, with practical cards, readable sections, and profile pages that feel useful on desktop and mobile.',
      'For business owners, the goal is simple: publish a listing that can be found, understood, and acted on without unnecessary friction.',
    ],
    values: [
      {
        title: 'Useful business profiles',
        description: 'Listings show the core details customers need before they call, visit, request a quote, or open a website.',
      },
      {
        title: 'Local discovery rhythm',
        description: 'Categories, cities, service areas, and related businesses help visitors keep comparing without getting lost.',
      },
      {
        title: 'Business owner friendly',
        description: 'The create flow is built for quick listing submission with visible form text, clear fields, and account access.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a business listing?',
    description: 'Send us listing updates, category questions, ownership requests, or support notes. We will help route your message to the right directory workflow.',
    formTitle: 'Send listing support request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search business listings by name, service, or location.',
      description: 'Use keywords, categories, and listing types to discover local businesses across the directory.',
      placeholder: 'Search by business name, service, city, or category',
    },
    resultsTitle: 'Latest business directory results',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a local business listing.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a business listing.',
      description: 'Use your account to add a listing, save business details, and prepare a useful public profile.',
    },
    hero: {
      badge: 'Business listing workspace',
      title: 'Add a business profile customers can act on.',
      description: 'Enter the company name, service category, contact details, photos, service area, and a clear description for local discovery.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Business owner access',
      title: 'Welcome back to your listing dashboard.',
      description: 'Login to continue creating listings, updating profile details, and managing business submissions from your account.',
      formTitle: 'Login to your account',
      submitLabel: 'Login',
      noAccount: 'No account matched these details. Create an account first, then log in.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Free listing access',
      title: 'Create an account and publish your business listing.',
      description: 'Set up access for your business so you can submit listing details, add contact information, and improve local visibility.',
      formTitle: 'Create your business account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
