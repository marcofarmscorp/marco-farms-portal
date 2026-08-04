export interface Product {
  id: string;
  name: string;
  image: string | null;
  description: string;
  yearRound: boolean;
  available: boolean;
}
 
export const products: Product[] = [
  {
    id: "tahiti-lime",
    name: "Tahiti Lime",
    image: "/Images/products/tahiti-lime.jpg",
    description: "Bright, juicy limes with a long shelf life for export.",
    yearRound: true,
    available: true,
  },
  {
    id: "mandarin",
    name: "Mandarin",
    image: "/Images/products/mandarin.jpg",
    description: "Sweet, easy-peel mandarins graded for wholesale.",
    yearRound: true,
    available: true,
  },
  {
    id: "mango",
    name: "Mango",
    image: "/Images/products/mango.jpg",
    description: "Premium mangoes selected for consistent size and color.",
    yearRound: true,
    available: true,
  },
  {
    id: "culantro",
    name: "Culantro",
    image: "/Images/products/culantro.jpg",
    description: "Fresh culantro, harvested and packed for freshness.",
    yearRound: true,
    available: true,
  },
  {
    id: "mamey-zapote",
    name: "Mamey Zapote",
    image: null,
    description: "Sweet, creamy tropical fruit with rich flavor and vibrant orange flesh.",
    yearRound: false,
    available: false,
  },
  {
    id: "thai-guava",
    name: "Thai Guava",
    image: null,
    description: "Crisp white-fleshed guava with a refreshing taste and excellent shelf life.",
    yearRound: false,
    available: false,
  },
  {
    id: "pink-guava",
    name: "Pink Guava",
    image: null,
    description: "Aromatic pink-fleshed guava with natural sweetness and tropical flavor.",
    yearRound: false,
    available: false,
  },
  {
    id: "green-plantain-ec",
    name: "Green Plantain EC",
    image: null,
    description: "Premium green plantain, ideal for cooking, frying, and international markets.",
    yearRound: false,
    available: false,
  },
];