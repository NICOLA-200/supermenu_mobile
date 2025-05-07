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
  type: ProductType;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
