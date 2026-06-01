export const COMPANY = {
  name: 'M.M. Engineering Works',
  shortName: 'MEW',
  proprietor: 'A.C. Manjunatha',
  phoneDisplay: '+91 98453 98542',
  phoneTel: 'tel:+919845398542',
  whatsappUrl: 'https://wa.me/919845398542',
  fax: '080-27831424',
  address:
    'No.3, Near Biocon, Hosur Main Road, Hebbagodi, Bangalore - 560 099.',
} as const;

export const SERVICES = [
  {
    id: 'trusses',
    title: 'Manufacturers of Trusses',
    description: 'Structural truss fabrication for industrial and commercial builds.',
  },
  {
    id: 'rolling-shutters',
    title: 'Rolling Shutters',
    description: 'Durable rolling shutters for shops, warehouses, and garages.',
  },
  {
    id: 'gates',
    title: 'Gates',
    description: 'Custom metal gates designed for security and daily use.',
  },
  {
    id: 'window-grills',
    title: 'Windows Grills',
    description: 'Protective window grills with clean finishes and precise fitting.',
  },
  {
    id: 'doors',
    title: 'Doors',
    description: 'Steel and metal doors built to specification for your site.',
  },
  {
    id: 'sheet-metal',
    title: 'Sheet Metal Works',
    description: 'Cutting, bending, and fabrication for varied sheet metal needs.',
  },
  {
    id: 'aluminum-partition',
    title: 'Aluminum Partition Works',
    description: 'Lightweight aluminum partitions for offices and commercial spaces.',
  },
] as const;

export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=No.3,+Near+Biocon,+Hosur+Main+Road,+Hebbagodi,+Bangalore+-+560099&output=embed';

export const NAV_SECTIONS = [
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
  { id: 'location', label: 'Location' },
] as const;
