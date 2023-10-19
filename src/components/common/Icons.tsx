import {
  ChevronLeft,
  Facebook,
  HeartHandshake,
  Home,
  Menu,
  PartyPopper,
  Repeat,
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
  close: X,
  facebook: Facebook,
  left: ChevronLeft,
  heartHandshake: HeartHandshake,
  home: Home,
  menu: Menu,
  partyPopper: PartyPopper,
  repeat: Repeat,
  star: Star,
  twitter: Twitter,
  user: User,
  users: Users2,
};
