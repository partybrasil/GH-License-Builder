import type { LayoutProps } from './LayoutProps';

// Three Column Layout (Split into 3 sections)
export function ThreeColumnLayout({
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
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Left Column - License Selection */}
        <div className="space-y-6">
          <div className={cardClasses}>
            <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
              Selecciona tu Licencia
            </h2>
            <LicenseSelector
              selectedLicenseId={customization.licenseId}
              onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
            />
          </div>
          <LicenseInfoPanel license={selectedLicense} />
        </div>

        {/* Middle Column - Customization */}
        <div className="space-y-6">
          <div className={cardClasses}>
            <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
              Personaliza los Datos
            </h2>
            <CustomizationForm
              customization={customization}
              onChange={handleCustomizationChange}
            />
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-6">
          <LicensePreview customization={customization} />
        </div>
      </div>

      <LicenseComparison />
    </main>
  );
}
