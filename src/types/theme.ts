export interface Theme {
  id: string;
  name: string;
  description: string;
  
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
  
  // Layout style
  layout: {
    heroStyle: 'gradient' | 'solid' | 'pattern' | 'animated';
    cardStyle: 'rounded' | 'sharp' | 'glass' | 'neumorphic';
    spacing: 'compact' | 'normal' | 'relaxed';
  };
  
  // Button styles
  button: {
    primary: string;
    hover: string;
    text: string;
  };
}
