import type { LayoutProps } from './LayoutProps';

// Masonry Layout (Pinterest-style staggered grid)
export function MasonryLayout({
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
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {/* License Selection */}
        <div className={`${cardClasses} break-inside-avoid`}>
          <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
            Selecciona tu Licencia
          </h2>
          <LicenseSelector
            selectedLicenseId={customization.licenseId}
            onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
          />
        </div>

        {/* Preview */}
        <div className="break-inside-avoid">
          <LicensePreview customization={customization} />
        </div>

        {/* Customization */}
        <div className={`${cardClasses} break-inside-avoid`}>
          <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
            Personaliza los Datos
          </h2>
          <CustomizationForm
            customization={customization}
            onChange={handleCustomizationChange}
          />
        </div>

        {/* License Info */}
        <div className="break-inside-avoid">
          <LicenseInfoPanel license={selectedLicense} />
        </div>
      </div>

      {/* Comparison at bottom */}
      <div className="mt-12">
        <LicenseComparison />
      </div>
    </main>
  );
}
