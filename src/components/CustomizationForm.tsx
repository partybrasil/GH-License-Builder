import { useState, useEffect } from 'react';
import type { LicenseCustomization, ValidationError } from '../types/license';
import { validateCustomization } from '../utils/licenseUtils';

interface CustomizationFormProps {
  customization: LicenseCustomization;
  onChange: (updates: Partial<LicenseCustomization>) => void;
}

export default function CustomizationForm({ customization, onChange }: CustomizationFormProps) {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  useEffect(() => {
    const validationErrors = validateCustomization(customization);
    setErrors(validationErrors);
  }, [customization]);

  const getError = (field: string): string | undefined => {
    return errors.find(e => e.field === field)?.message;
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nombre del Titular *
        </label>
        <input
          type="text"
          id="fullname"
          value={customization.fullname}
          onChange={(e) => onChange({ fullname: e.target.value })}
          placeholder="Tu nombre o el de tu organización"
          className={`w-full px-4 py-2 rounded-lg border ${
            getError('fullname')
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
          } focus:ring-2 focus:outline-none dark:bg-gray-700 dark:text-white transition-all`}
        />
        {getError('fullname') && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-shake">{getError('fullname')}</p>
        )}
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Año *
        </label>
        <input
          type="text"
          id="year"
          value={customization.year}
          onChange={(e) => onChange({ year: e.target.value })}
          placeholder="2025"
          className={`w-full px-4 py-2 rounded-lg border ${
            getError('year')
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
          } focus:ring-2 focus:outline-none dark:bg-gray-700 dark:text-white transition-all`}
        />
        {getError('year') && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-shake">{getError('year')}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Nombre del Proyecto *
        </label>
        <input
          type="text"
          id="projectName"
          value={customization.projectName}
          onChange={(e) => onChange({ projectName: e.target.value })}
          placeholder="mi-proyecto-increible"
          className={`w-full px-4 py-2 rounded-lg border ${
            getError('projectName')
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
          } focus:ring-2 focus:outline-none dark:bg-gray-700 dark:text-white transition-all`}
        />
        {getError('projectName') && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-shake">{getError('projectName')}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          URL del Proyecto (opcional)
        </label>
        <input
          type="url"
          id="projectUrl"
          value={customization.projectUrl || ''}
          onChange={(e) => onChange({ projectUrl: e.target.value })}
          placeholder="https://github.com/usuario/proyecto"
          className={`w-full px-4 py-2 rounded-lg border ${
            getError('projectUrl')
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
          } focus:ring-2 focus:outline-none dark:bg-gray-700 dark:text-white transition-all`}
        />
        {getError('projectUrl') && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-shake">{getError('projectUrl')}</p>
        )}
      </div>

      {errors.length > 0 && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">
            Por favor, corrige los errores antes de generar la licencia.
          </p>
        </div>
      )}
    </div>
  );
}
