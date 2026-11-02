export type Review = {
  quote: string;
  author: string;
  source: string;
  placeholder?: boolean;
};

export const reviews: Review[] = [
  // Genuine guest review.
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
  },
  // TEMPORARY DESIGN PLACEHOLDERS:
  // The five entries below are duplicates of the review above, used only to
  // preview the carousel layout while genuine guest reviews are being
  // collected. Replace each of them with a real review when available.
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
    placeholder: true,
  },
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
    placeholder: true,
  },
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
    placeholder: true,
  },
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
    placeholder: true,
  },
  {
    quote:
      "Great communication from host, amazing apartment, was lucky to find this in this area. Would 100% recommend.",
    author: "Guest",
    source: "Guest review",
    placeholder: true,
  },
];
