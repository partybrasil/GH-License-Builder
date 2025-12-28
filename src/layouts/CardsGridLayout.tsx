import type { LayoutProps } from './LayoutProps';

// Cards Grid Layout (Grid of cards)
export function CardsGridLayout({
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {/* Card 1: License Selection */}
        <div className={`${cardClasses} md:col-span-2`}>
          <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
            Selecciona tu Licencia
          </h2>
          <LicenseSelector
            selectedLicenseId={customization.licenseId}
            onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
          />
        </div>

        {/* Card 2: Customization Form */}
        <div className={cardClasses}>
          <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
            Personaliza
          </h2>
          <CustomizationForm
            customization={customization}
            onChange={handleCustomizationChange}
          />
        </div>

        {/* Card 3: Preview */}
        <div className={`${cardClasses} md:col-span-2 xl:col-span-2`}>
          <LicensePreview customization={customization} />
        </div>

        {/* Card 4: Info */}
        <div className={cardClasses}>
          <LicenseInfoPanel license={selectedLicense} />
        </div>
      </div>

      {/* Full width comparison */}
      <LicenseComparison />
    </main>
  );
}
