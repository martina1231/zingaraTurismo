import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Trip {
  id: number;
  destination: string;
  date: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}