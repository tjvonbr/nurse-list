export interface City {
  name: string;
  lat: string;
  lon: string;
  href: string;
  imageSrc: string;
  altText: string;
  costOfLiving: string;
}

export const cityEmojiMap: { [key: string]: string } = {
  Chicago: "💨",
  Phoenix: "☀️",
  "San Antonio": "🤠",
  Honolulu: "🏝️",
};

export const cities: City[] = [
  {
    name: "Chicago",
    lat: "41.88",
    lon: "-87.62",
    href: "https://jobs.nm.org/employment/chicago-illinois-united-states-nursing-jobs/27763/68550/6252001-4896861-4888671-4887398/4",
    imageSrc: "/chicago.png",
    altText: "Chicago Skyline",
    costOfLiving: "$2,425/month",
  },
  {
    name: "Phoenix",
    lat: "33.44",
    lon: "-112.07",
    href: "https://jooble.org/jobs-rn/Phoenix%2C-AZ",
    imageSrc: "/phoenix.png",
    altText: "Phoenix Skyline",
    costOfLiving: "$2,445/month",
  },
  {
    name: "San Antonio",
    lat: "29.42",
    lon: "-98.49",
    href: "https://www.monster.com/jobs/q-nursing-jobs-l-san-antonio-tx",
    imageSrc: "/san_antonio.png",
    altText: "San Antonio Skyline",
    costOfLiving: "$2,051/month",
  },
  {
    name: "Honolulu",
    lat: "21.31",
    lon: "-157.85",
    href: "https://hawaiipacifichealth.jobs/nursing/new-jobs/",
    imageSrc: "/honolulu.png",
    altText: "Honolulu Skyline",
    costOfLiving: "$2,804/month",
  },
];

export const weatherEmojiMap = {};
