export type LicenseFamily = 'permissive' | 'copyleft-strong' | 'copyleft-weak' | 'public-domain';
export type LicenseType = 'software' | 'content' | 'data';

export interface LicensePermission {
  label: string;
  description: string;
}

export interface LicenseCondition {
  label: string;
  description: string;
}

export interface LicenseLimitation {
  label: string;
  description: string;
}

export interface LicenseInfo {
  permissions: LicensePermission[];
  conditions: LicenseCondition[];
  limitations: LicenseLimitation[];
}

export interface LicenseDescriptor {
  id: string;
  name: string;
  family: LicenseFamily;
  type: LicenseType;
  shortDescription: string;
  template: string;
  info: LicenseInfo;
  referenceUrl: string;
}

export interface LicenseCustomization {
  licenseId: string;
  fullname: string;
  year: string;
  projectName: string;
  projectUrl?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}
