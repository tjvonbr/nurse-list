export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Network",
    description:
      "Gain direct access to recruiters in the city you want to work.",
    icon: "heartHandshake",
  },
  {
    title: "Source housing",
    description:
      "Source fully furnished housing for the duration of your contract.",
    icon: "home",
  },
  {
    title: "Make friends",
    description: "Network and make friends with other nurses in your city.",
    icon: "users",
  },
  {
    title: "Meet up",
    description: "Meet up with your new friends and explore your new city.",
    icon: "partyPopper",
  },
  {
    title: "Rate your experience",
    description: "Review your experience to pay it forward to fellow nurses.",
    icon: "star",
  },
  {
    title: "Find your next contract",
    description:
      "Return to step one and repeat the process for your next contract!",
    icon: "repeat",
  },
];
