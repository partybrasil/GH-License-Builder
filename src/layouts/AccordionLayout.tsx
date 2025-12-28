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

  const sectionHeaderClass = `flex justify-between items-center cursor-pointer p-6 ${textPrimary} font-bold text-xl hover:opacity-80`;

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-4">
        {/* Section 1: License Selection */}
        <div className={cardClasses}>
          <div onClick={() => toggleSection('select')} className={sectionHeaderClass}>
            <span>1. Seleccionar Licencia</span>
            <span className="text-2xl">{openSection === 'select' ? '−' : '+'}</span>
          </div>
          {openSection === 'select' && (
            <div className="px-6 pb-6">
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
          <div onClick={() => toggleSection('customize')} className={sectionHeaderClass}>
            <span>2. Personalizar Datos</span>
            <span className="text-2xl">{openSection === 'customize' ? '−' : '+'}</span>
          </div>
          {openSection === 'customize' && (
            <div className="px-6 pb-6">
              <CustomizationForm
                customization={customization}
                onChange={handleCustomizationChange}
              />
            </div>
          )}
        </div>

        {/* Section 3: Preview */}
        <div className={cardClasses}>
          <div onClick={() => toggleSection('preview')} className={sectionHeaderClass}>
            <span>3. Vista Previa</span>
            <span className="text-2xl">{openSection === 'preview' ? '−' : '+'}</span>
          </div>
          {openSection === 'preview' && (
            <div className="px-6 pb-6">
              <LicensePreview customization={customization} />
            </div>
          )}
        </div>

        {/* Section 4: License Info */}
        <div className={cardClasses}>
          <div onClick={() => toggleSection('info')} className={sectionHeaderClass}>
            <span>4. Información de la Licencia</span>
            <span className="text-2xl">{openSection === 'info' ? '−' : '+'}</span>
          </div>
          {openSection === 'info' && (
            <div className="px-6 pb-6">
              <LicenseInfoPanel license={selectedLicense} />
            </div>
          )}
        </div>

        {/* Section 5: Comparison */}
        <div className={cardClasses}>
          <div onClick={() => toggleSection('compare')} className={sectionHeaderClass}>
            <span>5. Comparar Licencias</span>
            <span className="text-2xl">{openSection === 'compare' ? '−' : '+'}</span>
          </div>
          {openSection === 'compare' && (
            <div className="px-6 pb-6">
              <LicenseComparison />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
