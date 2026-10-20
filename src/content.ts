export const links = {
  playStore: "https://play.google.com/store/apps/details?id=app.horizon.showseek",
  x: "https://x.com/theavgcoder",
  xHandle: "@theavgcoder",
  email: "shamar.morrison2000@gmail.com",
  privacy: "https://privacy-policies-psi.vercel.app/show-seek/privacy",
  terms: "https://privacy-policies-psi.vercel.app/show-seek/terms",
};

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  { label: "Download", href: "#download" },
];

export const stats = [
  { value: "10K+", label: "Downloads on Google Play" },
  { value: "Trakt & IMDb", label: "Import your history in minutes" },
  { value: "Free", label: "Optional premium features" },
];

const avatars = import.meta.glob<string>("./assets/avatars/*.webp", { eager: true, import: "default" });
const avatarFor = (name: string) => avatars[`./assets/avatars/${name.toLowerCase().replace(/\s+/g, "-")}.webp`];

type ReviewInput = {
  name: string;
  quote: string;
};

export type Review = ReviewInput & {
  avatar: string;
  rating: number;
};

// Real Google Play reviews (all rated 5 stars), trimmed for length. Avatars are the reviewers' Play profile photos.
const reviewInputs: ReviewInput[] = [
  {
    name: "Yuri",
    quote:
      "One of the best apps I've come across for keeping track of what I watch. Clean and easy to navigate.",
  },
  {
    name: "teddy cruz",
    quote:
      "As an avid movie and series watcher this app is a literal godsend. Especially the calendar and the mood picker.",
  },
  {
    name: "James Key",
    quote: "Best TV show and movie tracker there is for Android.",
  },
  {
    name: "Kiss Mia",
    quote:
      "Very easy to use and it helps me not lose track of the episodes I've already watched. 10/10.",
  },
  {
    name: "Lance Reed",
    quote: "Been using it for a couple weeks, then decided to buy premium. Well worth it.",
  },
  {
    name: "Kelleina Mighty",
    quote:
      "I've been struggling to remember which episode I was on in some animes and this helps a lot.",
  },
  {
    name: "Diogenes Chong",
    quote: "Great for tracking your favorite shows with a smooth, sleek interface.",
  },
  {
    name: "Nampa Smith",
    quote: "It's a great app. I like how it's able to remind me and keep me updated.",
  },
  {
    name: "Shari McNeil",
    quote: "Pretty easy to navigate and I like how neat the interface is.",
  },
  {
    name: "bankai",
    quote: "Great app. User friendly and super efficient.",
  },
];

export const reviews: Review[] = reviewInputs.map((r) => ({ ...r, avatar: avatarFor(r.name), rating: 5 }));
