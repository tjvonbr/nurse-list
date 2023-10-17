export interface NavCongig {
  marketing: NavItem[];
}

export interface NavItem {
  name: string;
  href: string;
}

export const navigationItems: NavCongig = {
  marketing: [
    {
      name: "Features",
      href: "/#features",
    },
    {
      name: "Pricing",
      href: "/#pricing",
    },
    {
      name: "Recruiters",
      href: "/recruiters",
    },
  ],
};
