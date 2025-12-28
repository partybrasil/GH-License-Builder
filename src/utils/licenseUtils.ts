import type { LicenseCustomization, ValidationError } from '../types/license';
import { licenses } from '../data/licenses';

// Note: All error messages and UI text are in Spanish as per project requirements
// For internationalization, consider implementing i18n in a future version

export function generateLicenseText(customization: LicenseCustomization): string {
  const license = licenses.find(l => l.id === customization.licenseId);
  if (!license) {
    throw new Error(`License not found: ${customization.licenseId}`);
  }

  let text = license.template;
  text = text.replace(/\{\{year\}\}/g, customization.year);
  text = text.replace(/\{\{fullname\}\}/g, customization.fullname);
  text = text.replace(/\{\{project\}\}/g, customization.projectName);
  text = text.replace(/\{\{url\}\}/g, customization.projectUrl || '');

  // Check for remaining placeholders
  const remainingPlaceholders = text.match(/\{\{[^}]+\}\}/g);
  if (remainingPlaceholders) {
    console.warn('Remaining placeholders:', remainingPlaceholders);
  }

  return text;
}

export function validateCustomization(data: Partial<LicenseCustomization>): ValidationError[] {
  const errors: ValidationError[] = [];
  const currentYear = new Date().getFullYear();

  if (!data.fullname || data.fullname.trim() === '') {
    errors.push({ field: 'fullname', message: 'El nombre es obligatorio' });
  } else if (data.fullname.length > 200) {
    errors.push({ field: 'fullname', message: 'El nombre es demasiado largo (máximo 200 caracteres)' });
  }

  if (!data.year || data.year.trim() === '') {
    errors.push({ field: 'year', message: 'El año es obligatorio' });
  } else {
    const yearNum = parseInt(data.year, 10);
    if (isNaN(yearNum) || yearNum < 1980 || yearNum > currentYear + 1) {
      errors.push({ field: 'year', message: `El año debe estar entre 1980 y ${currentYear + 1}` });
    }
  }

  if (!data.projectName || data.projectName.trim() === '') {
    errors.push({ field: 'projectName', message: 'El nombre del proyecto es obligatorio' });
  } else if (data.projectName.length > 200) {
    errors.push({ field: 'projectName', message: 'El nombre del proyecto es demasiado largo (máximo 200 caracteres)' });
  }

  if (data.projectUrl && data.projectUrl.trim() !== '') {
    try {
      new URL(data.projectUrl);
    } catch {
      errors.push({ field: 'projectUrl', message: 'La URL no es válida' });
    }
  }

  return errors;
}

export function downloadLicenseFile(text: string, filename: string = 'LICENSE'): void {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}
