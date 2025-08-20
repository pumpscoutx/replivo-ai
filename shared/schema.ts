export interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  tasks?: string[];
}

export interface SubAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  category: string;
  currentTask?: string;
  taskStatus?: string;
} 