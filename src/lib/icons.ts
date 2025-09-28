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
  X,
  Image,
  FileText,
  HandHeart,
  Users
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
  Image,
  FileText,
  HandHeart,
  Users
} as const;

export type IconName = keyof typeof ICONS;

export const getIcon = (name: IconName) => ICONS[name];