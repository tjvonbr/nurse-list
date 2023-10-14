import {
  ChevronLeft,
  Facebook,
  HeartHandshake,
  Home,
  PartyPopper,
  Repeat,
  Star,
  Twitter,
  Users2,
  type LucideIcon,
} from "lucide-react";

export interface Icons {
  [key: string]: LucideIcon;
}

export const Icons: Icons = {
  facebook: Facebook,
  left: ChevronLeft,
  heartHandshake: HeartHandshake,
  home: Home,
  partyPopper: PartyPopper,
  repeat: Repeat,
  star: Star,
  twitter: Twitter,
  users: Users2,
};
