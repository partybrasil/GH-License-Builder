import { useState } from 'react';
import type { LayoutProps } from './LayoutProps';
import { useTheme } from '../contexts/ThemeContext';

// Tabs Layout (Tabbed interface)
export function TabsLayout({
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
}: LayoutProps) {
  const [activeTab, setActiveTab] = useState<'select' | 'customize' | 'preview' | 'info' | 'compare'>('select');
  const { currentTheme } = useTheme();

  const tabButtonClass = (tab: string) => 
    `px-6 py-3 font-semibold transition-all ${
      activeTab === tab 
        ? 'border-b-4 border-current opacity-100' 
        : 'opacity-60 hover:opacity-80'
    }`;

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className={`${cardClasses} mb-6`}>
        <div className={`flex flex-wrap gap-4 border-b ${textPrimary}`}>
          <button 
            onClick={() => setActiveTab('select')}
            className={tabButtonClass('select')}
          >
            1. Seleccionar Licencia
          </button>
          <button 
            onClick={() => setActiveTab('customize')}
            className={tabButtonClass('customize')}
          >
            2. Personalizar
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={tabButtonClass('preview')}
          >
            3. Vista Previa
          </button>
          <button 
            onClick={() => setActiveTab('info')}
            className={tabButtonClass('info')}
          >
            4. Información
          </button>
          <button 
            onClick={() => setActiveTab('compare')}
            className={tabButtonClass('compare')}
          >
            5. Comparar
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === 'select' && (
          <div className={cardClasses}>
            <h2 className={`text-2xl font-bold mb-6 ${textPrimary}`}>
              Selecciona tu Licencia
            </h2>
            <LicenseSelector
              selectedLicenseId={customization.licenseId}
              onSelectLicense={(licenseId: string) => {
                handleCustomizationChange({ licenseId });
                setActiveTab('customize');
              }}
            />
          </div>
        )}

        {activeTab === 'customize' && (
          <div className={cardClasses}>
            <h2 className={`text-2xl font-bold mb-6 ${textPrimary}`}>
              Personaliza los Datos
            </h2>
            <CustomizationForm
              customization={customization}
              onChange={handleCustomizationChange}
            />
            <button
              onClick={() => setActiveTab('preview')}
              className={`mt-6 px-6 py-2 rounded font-medium ${currentTheme.button.primary} ${currentTheme.button.hover} transition-all`}
            >
              Siguiente: Ver Preview →
            </button>
          </div>
        )}

        {activeTab === 'preview' && (
          <LicensePreview customization={customization} />
        )}

        {activeTab === 'info' && (
          <LicenseInfoPanel license={selectedLicense} />
        )}

        {activeTab === 'compare' && (
          <LicenseComparison />
        )}
      </div>
    </main>
  );
}
