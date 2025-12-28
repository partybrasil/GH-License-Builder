import { useState, useEffect } from 'react';
import type { LicenseCustomization } from './types/license';
import { licenses } from './data/licenses';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Hero from './components/Hero';
import LicenseSelector from './components/LicenseSelector';
import CustomizationForm from './components/CustomizationForm';
import LicensePreview from './components/LicensePreview';
import LicenseInfoPanel from './components/LicenseInfoPanel';
import LicenseComparison from './components/LicenseComparison';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import {
  TwoColumnLayout,
  SingleColumnLayout,
  ThreeColumnLayout,
  SidebarLeftLayout,
  SidebarRightLayout,
  TabsLayout,
  AccordionLayout,
  CardsGridLayout,
  MasonryLayout,
  DashboardLayout,
} from './layouts';

const STORAGE_KEY = 'gh-license-builder-state';

function AppContent() {
  const { currentTheme } = useTheme();
  const currentYear = new Date().getFullYear().toString();
  
  const [customization, setCustomization] = useState<LicenseCustomization>({
    licenseId: 'MIT',
    fullname: '',
    year: currentYear,
    projectName: '',
    projectUrl: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCustomization(prev => ({
          ...prev,
          ...parsed,
          year: parsed.year || currentYear, // Ensure year is always set
        }));
      } catch (error) {
        console.error('Failed to load saved state:', error);
      }
    }
  }, [currentYear]);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customization));
  }, [customization]);

  const selectedLicense = licenses.find(l => l.id === customization.licenseId) || licenses[0];

  const handleCustomizationChange = (updates: Partial<LicenseCustomization>) => {
    setCustomization(prev => ({ ...prev, ...updates }));
  };

  const cardClasses = `${currentTheme.background.card} rounded-2xl shadow-xl p-6 ${currentTheme.animations.cardAnimation} ${currentTheme.background.cardHover}`;
  const textPrimary = currentTheme.text.primary;

  // Layout props
  const layoutProps = {
    customization,
    selectedLicense,
    handleCustomizationChange,
    LicenseSelector,
    CustomizationForm,
    LicensePreview,
    LicenseInfoPanel,
    LicenseComparison,
    cardClasses,
    textPrimary,
  };

  // Select layout based on theme
  const renderLayout = () => {
    switch (currentTheme.layout.type) {
      case 'single-column':
        return <SingleColumnLayout {...layoutProps} />;
      case 'three-column':
        return <ThreeColumnLayout {...layoutProps} />;
      case 'sidebar-left':
        return <SidebarLeftLayout {...layoutProps} />;
      case 'sidebar-right':
        return <SidebarRightLayout {...layoutProps} />;
      case 'tabs':
        return <TabsLayout {...layoutProps} />;
      case 'accordion':
        return <AccordionLayout {...layoutProps} />;
      case 'cards-grid':
        return <CardsGridLayout {...layoutProps} />;
      case 'masonry':
        return <MasonryLayout {...layoutProps} />;
      case 'dashboard':
        return <DashboardLayout {...layoutProps} />;
      case 'two-column':
      default:
        return <TwoColumnLayout {...layoutProps} />;
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.background.main} ${currentTheme.animations.backgroundAnimation || ''}`}>
      <ThemeSelector />
      <Hero />
      
      {renderLayout()}

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
