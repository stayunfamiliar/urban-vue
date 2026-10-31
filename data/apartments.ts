export type Apartment = {
  slug: string;
  name: string;
  area: string;
  bedrooms: number;
  guests: number;
  description: string;
  airbnbUrl: string;
};

export const apartments: Apartment[] = [
  {
    slug: "apartment-one",
    name: "Apartment One",
    area: "Birmingham City Centre",
    bedrooms: 1,
    guests: 2,
    description: "A stylish one-bedroom apartment, perfect for city breaks.",
    airbnbUrl: "#",
  },
  {
    slug: "apartment-two",
    name: "Apartment Two",
    area: "Jewellery Quarter",
    bedrooms: 2,
    guests: 4,
    description: "A bright two-bedroom apartment with room for the whole group.",
    airbnbUrl: "#",
  },
];
