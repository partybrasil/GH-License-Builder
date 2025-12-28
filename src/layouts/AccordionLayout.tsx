import { useState } from 'react';
import type { LayoutProps } from './LayoutProps';

// Accordion Layout (Collapsible sections)
export function AccordionLayout({
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
  const [openSection, setOpenSection] = useState<string>('select');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const sectionHeaderClass = `flex justify-between items-center cursor-pointer p-6 ${textPrimary} font-bold text-xl hover:opacity-80 w-full text-left`;

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-4">
        {/* Section 1: License Selection */}
        <div className={cardClasses}>
          <button 
            onClick={() => toggleSection('select')} 
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('select')}
            className={sectionHeaderClass}
            aria-expanded={openSection === 'select'}
            aria-controls="section-select"
          >
            <span>1. Seleccionar Licencia</span>
            <span className="text-2xl" aria-hidden="true">{openSection === 'select' ? '−' : '+'}</span>
          </button>
          {openSection === 'select' && (
            <div id="section-select" className="px-6 pb-6">
              <LicenseSelector
                selectedLicenseId={customization.licenseId}
                onSelectLicense={(licenseId: string) => {
                  handleCustomizationChange({ licenseId });
                  setOpenSection('customize');
                }}
              />
            </div>
          )}
        </div>

        {/* Section 2: Customization */}
        <div className={cardClasses}>
          <button 
            onClick={() => toggleSection('customize')} 
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('customize')}
            className={sectionHeaderClass}
            aria-expanded={openSection === 'customize'}
            aria-controls="section-customize"
          >
            <span>2. Personalizar Datos</span>
            <span className="text-2xl" aria-hidden="true">{openSection === 'customize' ? '−' : '+'}</span>
          </button>
          {openSection === 'customize' && (
            <div id="section-customize" className="px-6 pb-6">
              <CustomizationForm
                customization={customization}
                onChange={handleCustomizationChange}
              />
            </div>
          )}
        </div>

        {/* Section 3: Preview */}
        <div className={cardClasses}>
          <button 
            onClick={() => toggleSection('preview')} 
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('preview')}
            className={sectionHeaderClass}
            aria-expanded={openSection === 'preview'}
            aria-controls="section-preview"
          >
            <span>3. Vista Previa</span>
            <span className="text-2xl" aria-hidden="true">{openSection === 'preview' ? '−' : '+'}</span>
          </button>
          {openSection === 'preview' && (
            <div id="section-preview" className="px-6 pb-6">
              <LicensePreview customization={customization} />
            </div>
          )}
        </div>

        {/* Section 4: License Info */}
        <div className={cardClasses}>
          <button 
            onClick={() => toggleSection('info')} 
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('info')}
            className={sectionHeaderClass}
            aria-expanded={openSection === 'info'}
            aria-controls="section-info"
          >
            <span>4. Información de la Licencia</span>
            <span className="text-2xl" aria-hidden="true">{openSection === 'info' ? '−' : '+'}</span>
          </button>
          {openSection === 'info' && (
            <div id="section-info" className="px-6 pb-6">
              <LicenseInfoPanel license={selectedLicense} />
            </div>
          )}
        </div>

        {/* Section 5: Comparison */}
        <div className={cardClasses}>
          <button 
            onClick={() => toggleSection('compare')} 
            onKeyDown={(e) => e.key === 'Enter' && toggleSection('compare')}
            className={sectionHeaderClass}
            aria-expanded={openSection === 'compare'}
            aria-controls="section-compare"
          >
            <span>5. Comparar Licencias</span>
            <span className="text-2xl" aria-hidden="true">{openSection === 'compare' ? '−' : '+'}</span>
          </button>
          {openSection === 'compare' && (
            <div id="section-compare" className="px-6 pb-6">
              <LicenseComparison />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
