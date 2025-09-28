// Centralized icon imports and mapping
import { 
  BookOpen, 
  Stethoscope, 
  Cross, 
  User, 
  MapPin, 
  Calendar,
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Youtube,
  Menu,
  X
} from "lucide-react";

export const ICONS = {
  BookOpen,
  Stethoscope,
  Cross,
  User,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
} as const;

export type IconName = keyof typeof ICONS;

export const getIcon = (name: IconName) => ICONS[name];