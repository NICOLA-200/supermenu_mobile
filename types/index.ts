export interface User {
    id: string;
    name: string;
    email: string;
}


export type ProductType = 'Drink' | 'Dessert' | 'Starter' | 'Appetizer' | 'Main';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: ProductType;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}


export interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  menu: string[];
}
