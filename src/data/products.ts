export type Product = {
  id: number;
  name: string;
  price: number;
  category: "men" | "women" | "unisex";
  images: string[];
  notes: { top: string; heart: string; base: string };
  sizes: string[];
  description: string;
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ombre Noire",
    price: 4200,
    category: "men",
    images: ["/images/products/ombre-noire-1.jpg"],
    notes: { top: "Black Pepper, Bergamot", heart: "Cedarwood, Iris", base: "Vetiver, Amber" },
    sizes: ["50ml", "100ml"],
    description:
      "A smoky, woody signature built for evening wear — sharp on the first breath, warm by the time it settles.",
    bestseller: true,
  },
  {
    id: 2,
    name: "Velours Blanc",
    price: 3800,
    category: "women",
    images: ["/images/products/velours-blanc-1.jpg"],
    notes: { top: "Pink Pepper, Mandarin", heart: "Jasmine, Peony", base: "Musk, Sandalwood" },
    sizes: ["50ml", "100ml"],
    description:
      "Soft floral musk with a powdery finish — light enough for daywear, lingers just long enough to be noticed.",
    bestseller: true,
  },
  {
    id: 3,
    name: "Sel Marin",
    price: 3600,
    category: "unisex",
    images: ["/images/products/sel-marin-1.jpg"],
    notes: { top: "Sea Salt, Grapefruit", heart: "Fig Leaf, Lavender", base: "Ambergris, Musk" },
    sizes: ["30ml", "50ml", "100ml"],
    description:
      "A fresh, salt-air scent that reads clean and unisex — built for daily wear in any weather.",
  },
  {
    id: 4,
    name: "Cuir Doré",
    price: 4500,
    category: "men",
    images: ["/images/products/cuir-dore-1.jpg"],
    notes: { top: "Saffron, Cardamom", heart: "Leather, Rose", base: "Oud, Tonka Bean" },
    sizes: ["50ml", "100ml"],
    description: "Deep leather and oud for cold-weather evenings — bold, long-lasting, unapologetic.",
  },
];
