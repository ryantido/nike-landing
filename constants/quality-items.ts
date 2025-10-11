import { Lock, ShieldCheck, Truck } from "lucide-react";

export const qualityItems = [
  {
    title: "Premium Quality",
    description: `Ensuring premium comfort and style, our meticulously crafted footwear is designed to 
        elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.`,
    icon: ShieldCheck,
  },
  {
    title: "Free Shipping",
    description: `Experience the convenience of free shipping on every order, making your purchases more
        accessible and enjoyable.`,
    icon: Truck,
  },
  {
    title: "Secure Payment",
    description: `We prioritize your security and privacy, ensuring your transactions are protected and
        your payment information remains confidential.`,
    icon: Lock,
  },
] as const;
