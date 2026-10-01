/**
 * Explicit icon registry.
 * Importing named icons (instead of `import * as Icons`) keeps the bundle
 * tree-shakeable — a namespace import pulls in Lucide's entire icon set.
 * Register any new data-driven icon name here.
 */
import {
  Home,
  Building,
  Building2,
  Factory,
  Wrench,
  Sofa,
  Ruler,
  ClipboardList,
  ShieldCheck,
  Clock,
  Wallet,
  Users,
  HardHat,
  Headset,
  MessageSquare,
  PencilRuler,
  FileCheck2,
  Hammer,
  ClipboardCheck,
  KeyRound,
  HelpCircle,
  Flame,
  Anvil,
  Sparkles,
} from "lucide-react";

const icons = {
  Home,
  Building,
  Building2,
  Factory,
  Wrench,
  Sofa,
  Ruler,
  ClipboardList,
  ShieldCheck,
  Clock,
  Wallet,
  Users,
  HardHat,
  Headset,
  MessageSquare,
  PencilRuler,
  FileCheck2,
  Hammer,
  ClipboardCheck,
  KeyRound,
  Flame,
  Anvil,
  Sparkles,
};

export default function Icon({ name, ...props }) {
  const LucideIcon = icons[name] || HelpCircle;
  return <LucideIcon {...props} />;
}
