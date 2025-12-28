import type { LicenseDescriptor } from '../types/license';

interface LicenseInfoPanelProps {
  license: LicenseDescriptor;
}

export default function LicenseInfoPanel({ license }: LicenseInfoPanelProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        ¿Qué permite esta licencia?
      </h2>

      <div className="space-y-6">
        {/* Permissions */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
            <span className="text-2xl">✓</span> Permisos
          </h3>
          <ul className="space-y-2">
            {license.info.permissions.map((permission, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5">●</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">{permission.label}:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> {permission.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditions */}
        {license.info.conditions.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
              <span className="text-2xl">!</span> Condiciones
            </h3>
            <ul className="space-y-2">
              {license.info.conditions.map((condition, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-500 mt-0.5">●</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{condition.label}:</strong>
                    <span className="text-gray-600 dark:text-gray-300"> {condition.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Limitations */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
            <span className="text-2xl">✕</span> Limitaciones
          </h3>
          <ul className="space-y-2">
            {license.info.limitations.map((limitation, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">●</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">{limitation.label}:</strong>
                  <span className="text-gray-600 dark:text-gray-300"> {limitation.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Link */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={license.referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
          >
            📖 Ver texto oficial completo →
          </a>
        </div>
      </div>
    </div>
  );
}
