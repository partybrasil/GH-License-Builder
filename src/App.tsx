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

  return (
    <div className={`min-h-screen ${currentTheme.background.main} ${currentTheme.animations.backgroundAnimation || ''}`}>
      <ThemeSelector />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Configuration */}
          <div className="space-y-6">
            <div className={cardClasses}>
              <h2 className={`text-2xl font-bold mb-4 ${currentTheme.text.primary}`}>
                Selecciona tu Licencia
              </h2>
              <LicenseSelector
                selectedLicenseId={customization.licenseId}
                onSelectLicense={(licenseId) => handleCustomizationChange({ licenseId })}
              />
            </div>

            <div className={cardClasses}>
              <h2 className={`text-2xl font-bold mb-4 ${currentTheme.text.primary}`}>
                Personaliza los Datos
              </h2>
              <CustomizationForm
                customization={customization}
                onChange={handleCustomizationChange}
              />
            </div>
          </div>

          {/* Right Column - Preview & Info */}
          <div className="space-y-6">
            <LicensePreview customization={customization} />
            <LicenseInfoPanel license={selectedLicense} />
          </div>
        </div>

        <LicenseComparison />
      </main>

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
