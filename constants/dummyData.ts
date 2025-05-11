// dummyData.ts
export interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export const dummyRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Sunny Bistro",
    description: "A cozy spot with fresh, locally-sourced dishes.",
    imageUrl: "https://via.placeholder.com/150?text=Sunny+Bistro",
  },
  {
    id: 2,
    name: "Urban Grill",
    description: "Sizzling steaks and craft cocktails in a modern setting.",
    imageUrl: "https://via.placeholder.com/150?text=Urban+Grill",
  },
  {
    id: 3,
    name: "Pasta Haven",
    description: "Authentic Italian pasta made with love.",
    imageUrl: "https://via.placeholder.com/150?text=Pasta+Haven",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    description: "Vibrant Mexican flavors with a fun atmosphere.",
    imageUrl: "https://via.placeholder.com/150?text=Taco+Fiesta",
  },
  {
    id: 5,
    name: "Zen Sushi",
    description: "Fresh sushi and serene vibes.",
    imageUrl: "https://via.placeholder.com/150?text=Zen+Sushi",
  },
];