import type { LicenseCustomization, LicenseDescriptor } from '../types/license';

export interface LayoutProps {
  customization: LicenseCustomization;
  selectedLicense: LicenseDescriptor;
  handleCustomizationChange: (updates: Partial<LicenseCustomization>) => void;
  LicenseSelector: React.ComponentType<any>;
  CustomizationForm: React.ComponentType<any>;
  LicensePreview: React.ComponentType<any>;
  LicenseInfoPanel: React.ComponentType<any>;
  LicenseComparison: React.ComponentType<any>;
  cardClasses: string;
  textPrimary: string;
}
