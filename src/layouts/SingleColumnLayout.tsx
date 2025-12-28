import type { LayoutProps } from './LayoutProps';

// Single Column Layout (Vertical stacking)
export function SingleColumnLayout({
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
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8">
        {/* License Selection */}
        <div className={cardClasses}>
          <h2 className={`text-3xl font-bold mb-6 ${textPrimary} text-center`}>
            Selecciona tu Licencia
          </h2>
          <LicenseSelector
            selectedLicenseId={customization.licenseId}
            onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
          />
        </div>

        {/* Customization Form */}
        <div className={cardClasses}>
          <h2 className={`text-3xl font-bold mb-6 ${textPrimary} text-center`}>
            Personaliza los Datos
          </h2>
          <CustomizationForm
            customization={customization}
            onChange={handleCustomizationChange}
          />
        </div>

        {/* Preview */}
        <LicensePreview customization={customization} />

        {/* Info Panel */}
        <LicenseInfoPanel license={selectedLicense} />

        {/* Comparison */}
        <LicenseComparison />
      </div>
    </main>
  );
}
