import {
  ChevronLeft,
  CreditCard,
  Facebook,
  Lock,
  Headphones,
  HeartHandshake,
  Home,
  Menu,
  PartyPopper,
  Repeat,
  Settings,
  Star,
  Twitter,
  User,
  Users2,
  X,
  type LucideIcon,
} from "lucide-react";

export interface Icons {
  [key: string]: LucideIcon;
}

export const Icons: Icons = {
  billing: CreditCard,
  close: X,
  facebook: Facebook,
  left: ChevronLeft,
  lock: Lock,
  heartHandshake: HeartHandshake,
  home: Home,
  menu: Menu,
  partyPopper: PartyPopper,
  repeat: Repeat,
  settings: Settings,
  star: Star,
  support: Headphones,
  twitter: Twitter,
  user: User,
  users: Users2,
};
