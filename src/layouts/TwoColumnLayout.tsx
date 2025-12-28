import type { LayoutProps } from './LayoutProps';

// Two Column Layout (Classic - Left/Right split)
export function TwoColumnLayout({
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Configuration */}
        <div className="space-y-6">
          <div className={cardClasses}>
            <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
              Selecciona tu Licencia
            </h2>
            <LicenseSelector
              selectedLicenseId={customization.licenseId}
              onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
            />
          </div>

          <div className={cardClasses}>
            <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
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
  );
}
