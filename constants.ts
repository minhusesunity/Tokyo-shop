import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'One Piece T-Shirt',
    description: 'Set sail on the Grand Line with this exclusive One Piece tee. Featuring iconic art, it\'s a must-have for any aspiring Pirate King.',
    imageUrl: 'https://images.unsplash.com/photo-1608889421873-65a85a43c7b2?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Dragon Ball T-Shirt',
    description: 'Go Super Saiyan with this powerful Dragon Ball Z t-shirt. Perfect for training, charging up, or just showing off your power level.',
    imageUrl: 'https://images.unsplash.com/photo-1569721233418-b808e03588a4?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Naruto T-Shirt',
    description: 'Embody the way of the ninja with this Naruto Shippuden inspired tee. A comfortable and stylish choice for any shinobi on a mission.',
    imageUrl: 'https://images.unsplash.com/photo-1611911813383-66223b3a3a48?q=80&w=2574&auto=format&fit=crop',
  },
    {
    id: 4,
    name: 'Attack on Titan T-Shirt',
    description: 'Dedicate your heart to the cause with this Attack on Titan t-shirt. Join the Survey Corps and fight for humanity in style.',
    imageUrl: 'https://images.unsplash.com/photo-1598402193548-52c6a0614144?q=80&w=2574&auto=format&fit=crop',
  },
];

// FIX: Added missing constants for the Garden Planner form.
export const GARDEN_STYLES = ['Modern', 'Cottage', 'Zen', 'Tropical', 'Desert'];
export const SUNLIGHT_OPTIONS = ['Full Sun (6+ hours)', 'Partial Shade (4-6 hours)', 'Full Shade (less than 4 hours)'];
export const COLOR_PALETTES = ['Vibrant & Colorful', 'Cool Blues & Purples', 'Warm Reds & Oranges', 'Pastel Pinks & Whites', 'Monochromatic Greenery'];