import { licenses } from '../data/licenses';
import type { LicenseFamily } from '../types/license';

interface LicenseSelectorProps {
  selectedLicenseId: string;
  onSelectLicense: (licenseId: string) => void;
}

const familyLabels: Record<LicenseFamily, string> = {
  'permissive': 'Permisiva',
  'copyleft-strong': 'Copyleft Fuerte',
  'copyleft-weak': 'Copyleft Débil',
  'public-domain': 'Dominio Público',
};

const familyColors: Record<LicenseFamily, string> = {
  'permissive': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'copyleft-strong': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  'copyleft-weak': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'public-domain': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};

export default function LicenseSelector({ selectedLicenseId, onSelectLicense }: LicenseSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {licenses.map((license) => (
        <button
          key={license.id}
          onClick={() => onSelectLicense(license.id)}
          className={`p-4 rounded-lg border-2 text-left transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
            selectedLicenseId === license.id
              ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-400'
              : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">{license.name}</h3>
            <span className={`px-2 py-1 rounded text-xs font-medium ${familyColors[license.family]}`}>
              {familyLabels[license.family]}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{license.shortDescription}</p>
        </button>
      ))}
    </div>
  );
}
