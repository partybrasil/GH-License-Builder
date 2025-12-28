export interface Theme {
  id: string;
  name: string;
  description: string;
  
  // Layout configuration - determines the structural layout
  layout: {
    type: 'two-column' | 'single-column' | 'three-column' | 'sidebar-left' | 'sidebar-right' | 'tabs' | 'accordion' | 'cards-grid' | 'masonry' | 'dashboard';
    heroStyle: 'gradient' | 'solid' | 'pattern' | 'animated' | 'minimal' | 'split';
    cardStyle: 'rounded' | 'sharp' | 'glass' | 'neumorphic' | 'elevated' | 'flat';
    spacing: 'compact' | 'normal' | 'relaxed' | 'wide';
    direction: 'ltr' | 'rtl';
  };
  
  // Background colors and gradients
  background: {
    main: string;
    hero: string;
    card: string;
    cardHover: string;
  };
  
  // Text colors
  text: {
    primary: string;
    secondary: string;
    hero: string;
    accent: string;
  };
  
  // Animations
  animations: {
    backgroundAnimation?: string;
    cardAnimation?: string;
    heroAnimation?: string;
  };
  
  // Button styles
  button: {
    primary: string;
    hover: string;
    text: string;
  };
}
