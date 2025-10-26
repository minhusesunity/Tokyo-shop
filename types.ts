export type Theme = 'light' | 'dark';

export interface ProductOptions {
  materials: string[];
  sizes: string[];
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  options: ProductOptions;
}
