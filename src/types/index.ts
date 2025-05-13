export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  isOrganic: boolean;
  isInSeason: boolean;
  nutritionFacts: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company?: string;
  quote: string;
  imageUrl: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}