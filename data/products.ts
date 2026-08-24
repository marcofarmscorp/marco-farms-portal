export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  yearRound: boolean;
  available: boolean;
  exotic?: boolean;
}

export const products: Product[] = [
  {
    id: "tahiti-lime",
    name: "Tahiti Lime",
    images: [
  "/Images/products/tahiti-lime.jpeg",
  "/Images/products/tahiti-lime-2.jpeg",
  "/Images/products/tahiti-lime-3.jpeg",
  "/Images/products/tahiti-lime-4.jpeg",
    ],
    description:
      "Bright, juicy limes with a long shelf life for export.",
    yearRound: true,
    available: true,
  },

  {
    id: "mandarin",
    name: "Mandarin",
    images: [
      "/Images/products/mandarin.jpg",
      "/Images/products/mandarin-2.jpeg",
      "/Images/products/mandarin-3.jpeg",
      "/Images/products/mandarin-4.jpeg",
    ],
    description:
      "Sweet, easy-peel mandarins graded for wholesale.",
    yearRound: true,
    available: true,
  },

  {
    id: "mango",
    name: "Mango",
    images: [
      "/Images/products/mango.jpg",
      "/Images/products/mango-2.jpg",
          ],
    description:
      "Premium mangoes selected for consistent size and color.",
    yearRound: true,
    available: true,
  },

  {
    id: "culantro",
    name: "Culantro",
    images: [
      "/Images/products/culantro.jpg",
      "/Images/products/culantro-2.jpeg",
      "/Images/products/culantro-3.jpeg",
      "/Images/products/culantro-4.jpeg",
      "/Images/products/culantro-5.jpeg",
    ],
    description:
      "Fresh culantro, harvested and packed for freshness.",
    yearRound: true,
    available: true,
  },

  {
    id: "cana",
    name: "Sugarcane",
    images: [
      "/Images/products/cana.jpeg",
      "/Images/products/cana-2.jpeg",
      "/Images/products/cana-3.jpeg",
      "/Images/products/cana-4.jpeg",
    ],
    description:
      "Fresh sugarcane with a crisp texture and naturally sweet flavor.",
    yearRound: true,
    available: true,
  },

  {
    id: "mamey-zapote",
    name: "Mamey Zapote",
    images: [
    "/Images/products/mamey.jpeg",
    "/Images/products/mamey-2.jpeg",   
    ],
    description:
      "Sweet, creamy tropical fruit with rich flavor and vibrant orange flesh.",
    yearRound: false,
    available: true,
  },

  {
    id: "thai-guava",
    name: "Thai Guava",
    images: [
    "/Images/products/Tguava.jpeg",
    "/Images/products/Tguava-2.jpeg",
    "/Images/products/Tguava-3.jpeg",  
    ],
    description:
      "Crisp white-fleshed guava with a refreshing taste and excellent shelf life.",
    yearRound: false,
    available: true,
  },

  {
    id: "pink-guava",
    name: "Pink Guava",
    images: [
    "/Images/products/Pguava.jpeg",
    "/Images/products/Pguava-2.jpeg",
    "/Images/products/Pguava-3.jpeg",  
    ],
    description:
      "Aromatic pink-fleshed guava with natural sweetness and tropical flavor.",
    yearRound: false,
    available: true,
  },

  {
    id: "green-plantain-ec",
    name: "Green Plantain EC",
    images: [
    "/Images/products/Gplantain.jpeg",
    "/Images/products/Gplantain-2.jpeg",
    "/Images/products/Gplantain-3.jpeg",
    "/Images/products/Gplantain-4.jpeg", 
    "/Images/products/Gplantain-5.png",
    ],
    description:
      "Premium green plantain, ideal for cooking, frying, and international markets.",
    yearRound: false,
    available: true,
  },
    {
    id: "guanabana",
    name: "Guanabana",
    images: [
      "/Images/products/guanabana.jpeg",
      "/Images/products/guanabana-2.jpeg",
      "/Images/products/guanabana-3.jpeg",
    ],
    description:
      "Exotic soursop with soft white pulp, prized for its sweet-tart tropical flavor.",
    yearRound: false,
    available: true,
    exotic: true,
  },

  {
    id: "rambutan",
    name: "Rambutan",
    images: [
      "/Images/products/rambutan.jpeg",
      "/Images/products/rambutan-2.jpeg",
      "/Images/products/rambutan-3.jpeg",
    ],
    description:
      "Vibrant, hairy-skinned tropical fruit with juicy, translucent sweet flesh.",
    yearRound: false,
    available: true,
    exotic: true,
  },
];
