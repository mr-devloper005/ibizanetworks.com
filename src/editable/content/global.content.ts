import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Businesses', href: '/listing' },
      { label: 'Add listing', href: '/create' },
      { label: 'Search', href: '/search' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Free business listing', href: '/create' },
      secondary: { label: 'Contact support', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Business discovery, local trust, and listing growth',
    description: 'A practical local directory where customers discover nearby businesses and owners publish clean, useful listing pages.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business listings', href: '/listing' },
          { label: 'Search directory', href: '/search' },
          { label: 'Recently updated', href: '/listing' },
          { label: 'Create a listing', href: '/create' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean local discovery and business visibility.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
