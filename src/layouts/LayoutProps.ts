import type { LicenseCustomization, LicenseDescriptor } from '../types/license';

// Component prop interfaces
interface LicenseSelectorProps {
  selectedLicenseId: string;
  onSelectLicense: (licenseId: string) => void;
}

interface CustomizationFormProps {
  customization: LicenseCustomization;
  onChange: (updates: Partial<LicenseCustomization>) => void;
}

interface LicensePreviewProps {
  customization: LicenseCustomization;
}

interface LicenseInfoPanelProps {
  license: LicenseDescriptor;
}

interface LicenseComparisonProps {
  // No props needed
}

export interface LayoutProps {
  customization: LicenseCustomization;
  selectedLicense: LicenseDescriptor;
  handleCustomizationChange: (updates: Partial<LicenseCustomization>) => void;
  LicenseSelector: React.ComponentType<LicenseSelectorProps>;
  CustomizationForm: React.ComponentType<CustomizationFormProps>;
  LicensePreview: React.ComponentType<LicensePreviewProps>;
  LicenseInfoPanel: React.ComponentType<LicenseInfoPanelProps>;
  LicenseComparison: React.ComponentType<LicenseComparisonProps>;
  cardClasses: string;
  textPrimary: string;
}
