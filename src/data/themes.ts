import type { Theme } from '../types/theme';

export const themes: Theme[] = [
  {
    id: 'gradient-waves',
    name: 'Gradient Waves',
    description: 'Colorful flowing gradients with smooth animations',
    background: {
      main: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900',
      hero: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
      card: 'bg-white dark:bg-gray-800',
      cardHover: 'hover:shadow-2xl hover:scale-[1.02]',
    },
    text: {
      primary: 'text-gray-800 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-300',
      hero: 'text-white',
      accent: 'text-purple-600',
    },
    animations: {
      backgroundAnimation: 'animate-gradient-x',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-white text-purple-600',
      hover: 'hover:bg-gray-100 transform hover:scale-105',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'dark-cyberpunk',
    name: 'Dark Cyberpunk',
    description: 'Neon lights and dark cyberpunk aesthetic',
    background: {
      main: 'bg-black relative overflow-hidden',
      hero: 'bg-gradient-to-r from-purple-900 via-pink-900 to-red-900',
      card: 'bg-gray-900 border border-cyan-500/30',
      cardHover: 'hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
    },
    text: {
      primary: 'text-cyan-400',
      secondary: 'text-gray-400',
      hero: 'text-cyan-300',
      accent: 'text-pink-500',
    },
    animations: {
      backgroundAnimation: 'animate-pulse-slow',
      cardAnimation: 'transition-all duration-500',
      heroAnimation: 'animate-flicker',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'sharp',
      spacing: 'compact',
    },
    button: {
      primary: 'bg-cyan-500 text-black border-2 border-cyan-400',
      hover: 'hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]',
      text: 'font-bold uppercase tracking-wider',
    },
  },
  
  {
    id: 'minimal-white',
    name: 'Minimal White',
    description: 'Clean and minimal design with subtle shadows',
    background: {
      main: 'bg-gray-50',
      hero: 'bg-white border-b-4 border-gray-800',
      card: 'bg-white border border-gray-200',
      cardHover: 'hover:border-gray-400 hover:shadow-lg',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      hero: 'text-gray-900',
      accent: 'text-gray-800',
    },
    animations: {
      cardAnimation: 'transition-all duration-200',
      heroAnimation: 'animate-slide-down',
    },
    layout: {
      heroStyle: 'solid',
      cardStyle: 'sharp',
      spacing: 'relaxed',
    },
    button: {
      primary: 'bg-gray-900 text-white',
      hover: 'hover:bg-gray-700',
      text: 'font-medium',
    },
  },
  
  {
    id: 'nature-organic',
    name: 'Nature Organic',
    description: 'Earthy greens with organic flowing shapes',
    background: {
      main: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      hero: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
      card: 'bg-white/90 backdrop-blur-sm',
      cardHover: 'hover:bg-white hover:shadow-2xl',
    },
    text: {
      primary: 'text-green-900',
      secondary: 'text-green-700',
      hero: 'text-white',
      accent: 'text-emerald-600',
    },
    animations: {
      backgroundAnimation: 'animate-float',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-grow',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-emerald-600 text-white',
      hover: 'hover:bg-emerald-500 transform hover:scale-105',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    description: 'Deep blue ocean with wave animations',
    background: {
      main: 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900',
      hero: 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700',
      card: 'bg-blue-900/50 backdrop-blur-md border border-cyan-500/20',
      cardHover: 'hover:bg-blue-800/60 hover:border-cyan-400/40',
    },
    text: {
      primary: 'text-cyan-100',
      secondary: 'text-blue-200',
      hero: 'text-white',
      accent: 'text-cyan-400',
    },
    animations: {
      backgroundAnimation: 'animate-wave',
      cardAnimation: 'transition-all duration-500',
      heroAnimation: 'animate-ripple',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-cyan-500 text-white',
      hover: 'hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'sunset-warm',
    name: 'Sunset Warm',
    description: 'Warm sunset colors with golden accents',
    background: {
      main: 'bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100',
      hero: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
      card: 'bg-white/80 backdrop-blur-sm',
      cardHover: 'hover:bg-white hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]',
    },
    text: {
      primary: 'text-orange-900',
      secondary: 'text-red-800',
      hero: 'text-white',
      accent: 'text-orange-600',
    },
    animations: {
      backgroundAnimation: 'animate-shimmer',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'relaxed',
    },
    button: {
      primary: 'bg-orange-500 text-white',
      hover: 'hover:bg-orange-400 transform hover:scale-105',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'retro-synthwave',
    name: 'Retro Synthwave',
    description: '80s retrowave with neon pink and purple',
    background: {
      main: 'bg-gradient-to-b from-purple-900 via-pink-900 to-purple-800',
      hero: 'bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600',
      card: 'bg-black/60 border-2 border-pink-500',
      cardHover: 'hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]',
    },
    text: {
      primary: 'text-pink-300',
      secondary: 'text-purple-300',
      hero: 'text-pink-200',
      accent: 'text-cyan-400',
    },
    animations: {
      backgroundAnimation: 'animate-grid-move',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-neon-pulse',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'sharp',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-pink-500 text-white border-2 border-pink-400',
      hover: 'hover:bg-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)]',
      text: 'font-bold uppercase',
    },
  },
  
  {
    id: 'corporate-professional',
    name: 'Corporate Professional',
    description: 'Professional business theme with blue tones',
    background: {
      main: 'bg-slate-100',
      hero: 'bg-gradient-to-r from-slate-700 to-blue-800',
      card: 'bg-white border border-slate-200 shadow-sm',
      cardHover: 'hover:shadow-md hover:border-blue-300',
    },
    text: {
      primary: 'text-slate-900',
      secondary: 'text-slate-600',
      hero: 'text-white',
      accent: 'text-blue-600',
    },
    animations: {
      cardAnimation: 'transition-all duration-200',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'solid',
      cardStyle: 'rounded',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-blue-600 text-white',
      hover: 'hover:bg-blue-700',
      text: 'font-medium',
    },
  },
  
  {
    id: 'aurora-borealis',
    name: 'Aurora Borealis',
    description: 'Northern lights with flowing colors',
    background: {
      main: 'bg-gradient-to-br from-indigo-950 via-purple-950 to-teal-950',
      hero: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
      card: 'bg-indigo-950/70 backdrop-blur-lg border border-green-400/30',
      cardHover: 'hover:border-green-400/60 hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]',
    },
    text: {
      primary: 'text-green-200',
      secondary: 'text-blue-200',
      hero: 'text-white',
      accent: 'text-green-400',
    },
    animations: {
      backgroundAnimation: 'animate-aurora',
      cardAnimation: 'transition-all duration-500',
      heroAnimation: 'animate-shimmer',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-green-400 text-black',
      hover: 'hover:bg-green-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.6)]',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'space-galaxy',
    name: 'Space Galaxy',
    description: 'Deep space with stars and nebulas',
    background: {
      main: 'bg-black relative',
      hero: 'bg-gradient-to-r from-purple-900 via-blue-900 to-black',
      card: 'bg-gray-900/80 backdrop-blur border border-purple-500/30',
      cardHover: 'hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
    },
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-400',
      hero: 'text-white',
      accent: 'text-purple-400',
    },
    animations: {
      backgroundAnimation: 'animate-stars',
      cardAnimation: 'transition-all duration-400',
      heroAnimation: 'animate-float',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-purple-600 text-white',
      hover: 'hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'pastel-dreamy',
    name: 'Pastel Dreamy',
    description: 'Soft pastel colors with dreamy atmosphere',
    background: {
      main: 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100',
      hero: 'bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300',
      card: 'bg-white/70 backdrop-blur-sm',
      cardHover: 'hover:bg-white/90 hover:shadow-xl',
    },
    text: {
      primary: 'text-purple-800',
      secondary: 'text-purple-600',
      hero: 'text-white',
      accent: 'text-pink-600',
    },
    animations: {
      backgroundAnimation: 'animate-float-slow',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'relaxed',
    },
    button: {
      primary: 'bg-purple-400 text-white',
      hover: 'hover:bg-purple-300 transform hover:scale-105',
      text: 'font-medium',
    },
  },
  
  {
    id: 'high-contrast-mono',
    name: 'High Contrast Monochrome',
    description: 'Bold black and white high contrast design',
    background: {
      main: 'bg-white',
      hero: 'bg-black',
      card: 'bg-white border-4 border-black',
      cardHover: 'hover:bg-gray-100 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
    },
    text: {
      primary: 'text-black',
      secondary: 'text-gray-700',
      hero: 'text-white',
      accent: 'text-black',
    },
    animations: {
      cardAnimation: 'transition-all duration-200',
      heroAnimation: 'animate-slide-down',
    },
    layout: {
      heroStyle: 'solid',
      cardStyle: 'sharp',
      spacing: 'compact',
    },
    button: {
      primary: 'bg-black text-white border-4 border-black',
      hover: 'hover:bg-white hover:text-black',
      text: 'font-bold uppercase',
    },
  },
  
  {
    id: 'fire-ember',
    name: 'Fire & Ember',
    description: 'Hot fire colors with glowing effects',
    background: {
      main: 'bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900',
      hero: 'bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600',
      card: 'bg-red-950/70 backdrop-blur border border-orange-500/40',
      cardHover: 'hover:border-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]',
    },
    text: {
      primary: 'text-orange-100',
      secondary: 'text-red-200',
      hero: 'text-white',
      accent: 'text-yellow-400',
    },
    animations: {
      backgroundAnimation: 'animate-flicker',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-ember-pulse',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-orange-500 text-white',
      hover: 'hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.7)]',
      text: 'font-bold',
    },
  },
  
  {
    id: 'ice-frost',
    name: 'Ice & Frost',
    description: 'Cool ice blue with crystalline effects',
    background: {
      main: 'bg-gradient-to-br from-blue-100 via-cyan-100 to-slate-200',
      hero: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400',
      card: 'bg-white/60 backdrop-blur-md border border-blue-200',
      cardHover: 'hover:bg-white/80 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
    },
    text: {
      primary: 'text-blue-900',
      secondary: 'text-cyan-800',
      hero: 'text-white',
      accent: 'text-cyan-600',
    },
    animations: {
      backgroundAnimation: 'animate-frost-shimmer',
      cardAnimation: 'transition-all duration-400',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-cyan-500 text-white',
      hover: 'hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'forest-woodland',
    name: 'Forest Woodland',
    description: 'Deep forest greens with natural textures',
    background: {
      main: 'bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900',
      hero: 'bg-gradient-to-r from-green-700 via-emerald-700 to-lime-700',
      card: 'bg-green-950/60 backdrop-blur border border-green-600/40',
      cardHover: 'hover:bg-green-950/80 hover:border-green-500/60',
    },
    text: {
      primary: 'text-green-100',
      secondary: 'text-emerald-200',
      hero: 'text-white',
      accent: 'text-lime-400',
    },
    animations: {
      backgroundAnimation: 'animate-leaves',
      cardAnimation: 'transition-all duration-400',
      heroAnimation: 'animate-grow',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-green-600 text-white',
      hover: 'hover:bg-green-500',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'desert-sand',
    name: 'Desert Sand',
    description: 'Warm desert tones with sandy textures',
    background: {
      main: 'bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100',
      hero: 'bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600',
      card: 'bg-amber-50/90 backdrop-blur-sm border border-amber-300',
      cardHover: 'hover:bg-amber-50 hover:shadow-xl',
    },
    text: {
      primary: 'text-amber-900',
      secondary: 'text-orange-800',
      hero: 'text-white',
      accent: 'text-amber-700',
    },
    animations: {
      backgroundAnimation: 'animate-sand-wave',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'relaxed',
    },
    button: {
      primary: 'bg-amber-600 text-white',
      hover: 'hover:bg-amber-500 transform hover:scale-105',
      text: 'font-semibold',
    },
  },
  
  {
    id: 'neon-matrix',
    name: 'Neon Matrix',
    description: 'Matrix-style green code with digital effects',
    background: {
      main: 'bg-black',
      hero: 'bg-gradient-to-r from-green-900 via-lime-900 to-emerald-900',
      card: 'bg-black border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]',
      cardHover: 'hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]',
    },
    text: {
      primary: 'text-green-400',
      secondary: 'text-green-300',
      hero: 'text-green-400',
      accent: 'text-lime-400',
    },
    animations: {
      backgroundAnimation: 'animate-matrix-rain',
      cardAnimation: 'transition-all duration-200',
      heroAnimation: 'animate-glitch',
    },
    layout: {
      heroStyle: 'animated',
      cardStyle: 'sharp',
      spacing: 'compact',
    },
    button: {
      primary: 'bg-green-500 text-black border-2 border-green-400',
      hover: 'hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]',
      text: 'font-mono font-bold',
    },
  },
  
  {
    id: 'candy-playful',
    name: 'Candy Playful',
    description: 'Sweet candy colors with playful vibes',
    background: {
      main: 'bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200',
      hero: 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400',
      card: 'bg-white border-4 border-pink-300 rounded-3xl',
      cardHover: 'hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:rotate-1',
    },
    text: {
      primary: 'text-pink-900',
      secondary: 'text-purple-700',
      hero: 'text-white',
      accent: 'text-pink-600',
    },
    animations: {
      backgroundAnimation: 'animate-bounce-slow',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-wiggle',
    },
    layout: {
      heroStyle: 'gradient',
      cardStyle: 'rounded',
      spacing: 'relaxed',
    },
    button: {
      primary: 'bg-pink-500 text-white border-4 border-pink-400 rounded-full',
      hover: 'hover:bg-pink-400 transform hover:scale-110 hover:rotate-3',
      text: 'font-bold',
    },
  },
  
  {
    id: 'newspaper-print',
    name: 'Newspaper Print',
    description: 'Classic newspaper layout with serif fonts',
    background: {
      main: 'bg-gray-50',
      hero: 'bg-white border-t-8 border-b-8 border-black',
      card: 'bg-white border-2 border-gray-400',
      cardHover: 'hover:shadow-lg',
    },
    text: {
      primary: 'text-black',
      secondary: 'text-gray-700',
      hero: 'text-black',
      accent: 'text-gray-900',
    },
    animations: {
      cardAnimation: 'transition-all duration-200',
    },
    layout: {
      heroStyle: 'solid',
      cardStyle: 'sharp',
      spacing: 'compact',
    },
    button: {
      primary: 'bg-gray-900 text-white border-2 border-gray-900',
      hover: 'hover:bg-white hover:text-gray-900',
      text: 'font-serif font-bold uppercase',
    },
  },
  
  {
    id: 'glass-morphism',
    name: 'Glass Morphism',
    description: 'Modern glassmorphic design with blurred backgrounds',
    background: {
      main: 'bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400',
      hero: 'bg-white/20 backdrop-blur-xl border border-white/30',
      card: 'bg-white/10 backdrop-blur-lg border border-white/20',
      cardHover: 'hover:bg-white/20 hover:border-white/40',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-white/80',
      hero: 'text-white',
      accent: 'text-white',
    },
    animations: {
      backgroundAnimation: 'animate-gradient-move',
      cardAnimation: 'transition-all duration-300',
      heroAnimation: 'animate-fade-in',
    },
    layout: {
      heroStyle: 'pattern',
      cardStyle: 'glass',
      spacing: 'normal',
    },
    button: {
      primary: 'bg-white/30 text-white backdrop-blur border border-white/40',
      hover: 'hover:bg-white/40 hover:border-white/60',
      text: 'font-semibold',
    },
  },
];
