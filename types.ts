export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ProductOptions {
  size: 'S' | 'M' | 'L';
  quantity: number;
  color: 'Black' | 'White';
}

// FIX: Added missing type definitions for the Garden Planner feature.
export interface GardenPreferences {
  width: number;
  height: number;
  sunlight: string;
  style: string;
  colors: string;
  features: string;
}

export interface Plant {
  name: string;
  location: string;
  description: string;
}

export interface GardenPlan {
  description: string;
  ambience: string;
  plantList: Plant[];
}
