import {
  HeartHandshake,
  Home,
  PartyPopper,
  Repeat,
  Star,
  Users2,
  type LucideIcon,
} from "lucide-react";

export interface Icons {
  [key: string]: LucideIcon;
}

export const icons: Icons = {
  heartHandshake: HeartHandshake,
  home: Home,
  partyPopper: PartyPopper,
  repeat: Repeat,
  star: Star,
  users: Users2,
};
