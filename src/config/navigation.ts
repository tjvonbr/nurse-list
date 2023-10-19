export interface NavCongig {
  main: NavItem[];
  dashboard: NavItemWithIcon[];
}

export interface NavItem {
  name: string;
  href: string;
  disabled: false;
}

export interface NavItemWithIcon extends NavItem {
  icon: string;
}

export const navigationItems: NavCongig = {
  main: [
    {
      name: "Features",
      href: "/#features",
      disabled: false,
    },
    {
      name: "Pricing",
      href: "/#pricing",
      disabled: false,
    },
    {
      name: "Newsletter",
      href: "/newsletter",
      disabled: false,
    },
    {
      name: "Recruiters",
      href: "/recruiters",
      disabled: false,
    },
  ],
  dashboard: [
    {
      name: "Billing",
      href: "/dashboard",
      icon: "billing",
      disabled: false,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
      disabled: false,
    },
    {
      name: "Support",
      href: "/dashboard/support",
      icon: "support",
      disabled: false,
    },
  ],
};
