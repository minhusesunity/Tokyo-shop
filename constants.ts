import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Chrono-Lounge Chair',
    category: 'Seating',
    price: 'Request Quote',
    description: 'A chair that subtly warps time around you for maximum comfort. Upholstered in self-healing nano-fabric.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    options: {
      materials: ['Brushed Titanium', 'Polished Chrome', 'Matte Obsidian'],
      sizes: ['Standard', 'Extended'],
    },
  },
  {
    id: 2,
    name: 'Aether-Desk',
    category: 'Surfaces',
    price: 'Request Quote',
    description: 'A floating desk maintained by a silent, localized magnetic field. The surface is a customizable holographic display.',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    options: {
      materials: ['Transparent Alumina', 'Smoked Glass', 'E-Ink Composite'],
      sizes: ['Compact (1.2m)', 'Executive (2.0m)'],
    },
  },
  {
    id: 3,
    name: 'Quantum Entanglement Vases',
    category: 'Decor',
    price: 'Request Quote',
    description: 'A pair of vases that are quantumly entangled. A flower placed in one will be holographically projected in the other, regardless of distance.',
    image: 'https://images.unsplash.com/photo-1541160359441-218719965153?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    options: {
      materials: ['Polished Marble', 'Ceramic', '3D-Printed Resin'],
      sizes: ['Small (15cm)', 'Large (30cm)'],
    },
  },
    {
    id: 4,
    name: 'Kinetic Wall Sculpture',
    category: 'Art',
    price: 'Request Quote',
    description: 'A dynamic art piece that slowly changes its form throughout the day, controlled by a simple AI that responds to ambient light.',
    image: 'https://images.unsplash.com/photo-1618221195720-97b79a528f80?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    options: {
      materials: ['Copper', 'Steel', 'Brass'],
      sizes: ['Medium (1m x 1m)', 'Large (2m x 2m)'],
    },
  },
];
