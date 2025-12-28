import type { LayoutProps } from './LayoutProps';

// Sidebar Left Layout (Sidebar on left, content on right)
export function SidebarLeftLayout({
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
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Narrow */}
        <aside className="lg:w-80 space-y-6 flex-shrink-0">
          <div className={cardClasses}>
            <h2 className={`text-lg font-bold mb-4 ${textPrimary}`}>
              Licencia
            </h2>
            <LicenseSelector
              selectedLicenseId={customization.licenseId}
              onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
            />
          </div>

          <div className={cardClasses}>
            <h2 className={`text-lg font-bold mb-4 ${textPrimary}`}>
              Datos
            </h2>
            <CustomizationForm
              customization={customization}
              onChange={handleCustomizationChange}
            />
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          <LicensePreview customization={customization} />
          <LicenseInfoPanel license={selectedLicense} />
          <LicenseComparison />
        </div>
      </div>
    </main>
  );
}
