import { MousePointerClick, Search, Sparkles, Share2, Globe, ShoppingCart, Code2, GraduationCap, Palette, TrendingUp } from 'lucide-react';

export const iconos = { MousePointerClick, Search, Sparkles, Share2, Globe, ShoppingCart, Code2, GraduationCap, Palette, TrendingUp } as const;
export type IconoKey = keyof typeof iconos;
