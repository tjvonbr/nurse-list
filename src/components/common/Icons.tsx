import {
  ChevronLeft,
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

export const Icons: Icons = {
  left: ChevronLeft,
  heartHandshake: HeartHandshake,
  home: Home,
  partyPopper: PartyPopper,
  repeat: Repeat,
  star: Star,
  users: Users2,
};
