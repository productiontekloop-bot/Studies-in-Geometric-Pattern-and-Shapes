export interface ImageArtwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  price?: string;
  imageUrl: string;
  productUrl: string;
  isLarge?: boolean;
  width?: number;  // Optional custom width (in meters). Overrides global config.
  height?: number; // Optional custom height (in meters). Overrides global config.
  size?: string;   // Optional custom artwork size (e.g. "24in x 36in")
}

/**
 * GALLERY_IMAGES
 * To customize the dimensions of any specific image, add properties:
 *    width: [number],
 *    height: [number]
 * inside the image object below. E.g.:
 *    width: 4.5,
 *    height: 3.0
 */
export const GALLERY_IMAGES: ImageArtwork[] = [
  // --- NORTH WALL (6 Normal Artworks) ---
  {
    id: "2",
    title: "Echoing Boundaries, Oil on canvas",
    artist: "Grace Refuerzo ",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$4,800",
    imageUrl: "/images/001.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1291&quantity=1",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"
  },
  {
    id: "3",
    title: "Portal, Venetian plaster on wood",
    artist: "Grace Refuerzo Art",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/02.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1244&quantity=1",
    size: "30in x 40in",
    width: 3.0,
    height: 4.0

  },
  {
    id: "4",
    title: "City Scape Series1, Acrylic on wood",
    artist: "Grace Refuerzo Art",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/03.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1239&quantity=1",
    width: 2.0,
    height: 3.0,
    size: "24in x 36in" 
  },
  {
    id: "5",
    title: "City Scape Series 2, Acrylic on wood",
    artist: "Grace Refuerzo",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$3,500",
    imageUrl: "/images/04.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1238&quantity=1",
    width: 2.0,
    height: 3.0,
    size: "24in x 36in"
  },
  {
    id: "6",
    title: "Dots and Squares",
    artist: "Grace Refuerzo Art",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$2,800",
    imageUrl: "/images/05.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1268&quantity=1",
    width: 3.6,
    height: 4.0,
    size: "36in x 48in"

  },
  {
    id: "7",
    title: "Labyrinth, Acrylic on canvas",
    artist: "Grace Refuerzo Art",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$4,900",
    imageUrl: "/images/06.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1266&quantity=1",
    width: 3.5,
    height: 4.5,
    size: "48in x 60in"
  },

  // --- EAST WALL (8 Normal Artworks) ---
  {
    id: "8",
    title: "Labyrinth Mini, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$2,500",
    imageUrl: "/images/07.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1264&quantity=1",
    width: 2.0,
    height: 3.6,
    size: "12in x 36in"
  },
  {
    id: "9",
    title: "Mod, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$450",
    imageUrl: "/images/08.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1273&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "24in x 36in"
  },
  {
    id: "10",
    title: "Overlap Series, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/09.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1259&quantity=1",
    width: 2.0,
    height: 3.5,
    size: "10in x 10in"
  },
  {
    id: "11",
    title: "Overlap Series, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/10.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1255&quantity=1",
    width: 2.0,
    height: 3.5,
    size: "10in x 10in"
  },
  {
    id: "12",
    title: "Overlap Series, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/11.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1259&quantity=1",
    width: 2.0,
    height: 3.5,
    size: "10in x 10in"
  },
  {
    id: "13",
    title: "Overlap Series, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/12.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1262&quantity=1",
    width: 2.0,
    height: 3.5,
    size: "10in x 10in"
  },
  {
    id: "14",
    title: "Sideshow, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$5,500",
    imageUrl: "/images/13.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1263&quantity=1",
    width: 3.0,
    height: 4.5,
    size: "60in x 72in"
  },
  {
    id: "15",
    title: "Stained Glass Series, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/14.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1250&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "9in x 12in"
  },

  // --- SOUTH WALL (8 Normal Artworks) ---
  {
    id: "16",
    title: "Stained Glass Series, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/15.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1251&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "9in x 12in"
  },
  {
    id: "17",
    title: "Tide Pool Series, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/16.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1245&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "9in x 12in"
  },
  {
    id: "18",
    title: "Tide Pool Series, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/17.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1248&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "9in x 12in"
  },
  {
    id: "19",
    title: "Tide Pool Series, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/18.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=1243&quantity=1",
    width: 2.5,
    height: 3.5,
    size: "9in x12in"
  },
  {
    id: "20",
    title: "Abstract I’s, Acrylic on canvas",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$650",
    imageUrl: "/images/19.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2019&quantity=1",
    width: 3.5,
    height: 4.5,
    size: "36in x 48in"
  },
  {
    id: "21",
    title: "Flower Series l, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/20.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2023&quantity=1",
    width: 2.5,
    height: 2.5,
    size: "12in x 12in"
  },
  {
    id: "22",
    title: "Flower Series ll, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/21.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2025&quantity=1",
    width: 2.5,
    height: 2.5,
    size: "12in x 12in"
  },
  {
    id: "23",
    title: "Flower Series lll, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/22.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2027&quantity=1",
    width: 2.5,
    height: 2.5,
    size: "12in x 12in"
  },

  // --- WEST WALL (1 Normal Artwork to make exactly 23) ---
  {
    id: "24",
    title: "Flower Series lV, Acrylic on wood",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$350",
    imageUrl: "/images/23.png",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2029&quantity=1",
    width: 2.5,
    height: 2.5,
    size: "12in x 12in"
  },
  {
    id: "26",
    title: "Linear Harmony No. 1&2, 2026,",
    artist: "Artist Room 1",
    description: "Grace Refuerzo-level exhibition frame. Ready for replacement.",
    price: "$3,800",
    imageUrl: "/images/24.jpeg",
    productUrl: "https://demowebsiteexecutions.com/grace/checkout/?add-to-cart=2610&quantity=1",
    width: 4.0,
    height: 4.0,
    size: "72in x 60in"
  }
];

// NOTE: To use your local images later:
// 1. Upload your images to the /public/images/ folder named art1.jpg, art2.jpg, etc.
// 2. Change the fields above (or replace the list) to point to `/images/art${id}.jpg`
