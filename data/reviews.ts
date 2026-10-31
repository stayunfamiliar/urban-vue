export type Review = {
  quote: string;
  author: string;
  source: string;
  placeholder?: boolean;
};

export const reviews: Review[] = [
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
  },
  {
    quote: "Placeholder: replace with a real guest review.",
    author: "Guest name",
    source: "Airbnb",
    placeholder: true,
  },
  {
    quote: "Placeholder: replace with a real guest review.",
    author: "Guest name",
    source: "Airbnb",
    placeholder: true,
  },
  {
    quote: "Placeholder: replace with a real guest review.",
    author: "Guest name",
    source: "Airbnb",
    placeholder: true,
  },
  {
    quote: "Placeholder: replace with a real guest review.",
    author: "Guest name",
    source: "Airbnb",
    placeholder: true,
  },
  {
    quote: "Placeholder: replace with a real guest review.",
    author: "Guest name",
    source: "Airbnb",
    placeholder: true,
  },
];
