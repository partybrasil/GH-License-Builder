import type { LayoutProps } from './LayoutProps';

// Sidebar Right Layout (Content on left, sidebar on right)
export function SidebarRightLayout({
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
        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          <LicensePreview customization={customization} />
          <div className={cardClasses}>
            <h2 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
              Selecciona tu Licencia
            </h2>
            <LicenseSelector
              selectedLicenseId={customization.licenseId}
              onSelectLicense={(licenseId: string) => handleCustomizationChange({ licenseId })}
            />
          </div>
          <LicenseComparison />
        </div>

        {/* Right Sidebar */}
        <aside className="lg:w-96 space-y-6 flex-shrink-0">
          <div className={cardClasses}>
            <h2 className={`text-xl font-bold mb-4 ${textPrimary}`}>
              Personaliza
            </h2>
            <CustomizationForm
              customization={customization}
              onChange={handleCustomizationChange}
            />
          </div>
          <LicenseInfoPanel license={selectedLicense} />
        </aside>
      </div>
    </main>
  );
}
