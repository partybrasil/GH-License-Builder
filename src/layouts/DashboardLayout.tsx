import type { LayoutProps } from './LayoutProps';

// Dashboard Layout (Dashboard-style grid with different sized cards)
export function DashboardLayout({
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
      {/* Top Row - Preview takes center stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <LicensePreview customization={customization} />
        </div>
        <div className={cardClasses}>
          <h2 className={`text-lg font-bold mb-4 ${textPrimary}`}>
            Personaliza
          </h2>
          <CustomizationForm
            customization={customization}
            onChange={handleCustomizationChange}
          />
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className={`${cardClasses} lg:col-span-2`}>
          <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
            Selecciona tu Licencia
          </h2>
          <LicenseSelector
            selectedLicenseId={customization.licenseId}
            onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
          />
        </div>
        <div>
          <LicenseInfoPanel license={selectedLicense} />
        </div>
      </div>

      {/* Bottom Row - Full width */}
      <LicenseComparison />
    </main>
  );
}
