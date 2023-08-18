export interface City {
  name: string;
  lat: string;
  lng: string;
  href: string;
  imageSrc: string;
  altText: string;
  costOfLiving: string;
  scores: {
    overall: number;
    jobs: number;
    nightlife: number;
    safety: number;
    housing: number;
  };
}

export const cityEmojiMap: { [key: string]: string } = {
  Chicago: "💨",
  Phoenix: "☀️",
  "San Antonio": "🤠",
  Honolulu: "🏝️",
  Boston: "🎓",
};

export const cities: City[] = [
  {
    name: "Chicago",
    lat: "41.88",
    lng: "-87.62",
    href: "https://jobs.nm.org/employment/chicago-illinois-united-states-nursing-jobs/27763/68550/6252001-4896861-4888671-4887398/4",
    imageSrc: "/chicago.png",
    altText: "Chicago Skyline",
    costOfLiving: "$2,425/month",
    scores: {
      jobs: 8.7,
      nightlife: 9.9,
      safety: 5.4,
      housing: 6.2,
      get overall() {
        return Math.round(
          this.housing + this.nightlife + this.safety + this.jobs / 4
        );
      },
    },
  },
  {
    name: "Phoenix",
    lat: "33.44",
    lng: "-112.07",
    href: "https://jooble.org/jobs-rn/Phoenix%2C-AZ",
    imageSrc: "/phoenix.png",
    altText: "Phoenix Skyline",
    costOfLiving: "$2,445/month",
    scores: {
      jobs: 9.5,
      nightlife: 8.7,
      safety: 7.6,
      housing: 7.5,
      get overall() {
        return Math.round(
          this.housing + this.nightlife + this.safety + this.jobs / 4
        );
      },
    },
  },
  {
    name: "San Antonio",
    lat: "29.42",
    lng: "-98.49",
    href: "https://www.monster.com/jobs/q-nursing-jobs-l-san-antonio-tx",
    imageSrc: "/san_antonio.png",
    altText: "San Antonio Skyline",
    costOfLiving: "$2,051/month",
    scores: {
      jobs: 9.2,
      nightlife: 5.4,
      safety: 8.6,
      housing: 5.6,
      get overall() {
        return Math.round(
          this.housing + this.nightlife + this.safety + this.jobs / 4
        );
      },
    },
  },
  {
    name: "Honolulu",
    lat: "21.31",
    lng: "-157.85",
    href: "https://hawaiipacifichealth.jobs/nursing/new-jobs/",
    imageSrc: "/honolulu.png",
    altText: "Honolulu Skyline",
    costOfLiving: "$2,804/month",
    scores: {
      jobs: 9.4,
      nightlife: 9.2,
      safety: 9.6,
      housing: 7.6,
      get overall() {
        return Math.round(
          this.housing + this.nightlife + this.safety + this.jobs / 4
        );
      },
    },
  },
  {
    name: "Boston",
    lat: "42.36",
    lng: "-71.06",
    href: "https://www.americantraveler.com/travel-nursing-jobs/massachusetts/boston",
    imageSrc: "/boston_skyline.png",
    altText: "Boston Skyline",
    costOfLiving: "$2,899/month",
    scores: {
      jobs: 7.2,
      nightlife: 7.8,
      safety: 7.6,
      housing: 7.6,
      get overall() {
        return Math.round(
          this.housing + this.nightlife + this.safety + this.jobs / 4
        );
      },
    },
  },
];

export const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const stateAbbreviations = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MI",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};
