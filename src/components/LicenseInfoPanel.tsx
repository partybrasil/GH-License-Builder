import type { LicenseDescriptor } from '../types/license';
import { useTheme } from '../contexts/ThemeContext';

interface LicenseInfoPanelProps {
  license: LicenseDescriptor;
}

export default function LicenseInfoPanel({ license }: LicenseInfoPanelProps) {
  const { currentTheme } = useTheme();
  const cardClasses = `${currentTheme.background.card} rounded-2xl shadow-xl p-6 ${currentTheme.animations.cardAnimation} ${currentTheme.background.cardHover}`;

  return (
    <div className={cardClasses}>
      <h2 className={`text-2xl font-bold mb-4 ${currentTheme.text.primary}`}>
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
                  <strong className={currentTheme.text.primary}>{permission.label}:</strong>
                  <span className={currentTheme.text.secondary}> {permission.description}</span>
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
                    <strong className={currentTheme.text.primary}>{condition.label}:</strong>
                    <span className={currentTheme.text.secondary}> {condition.description}</span>
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
                  <strong className={currentTheme.text.primary}>{limitation.label}:</strong>
                  <span className={currentTheme.text.secondary}> {limitation.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Link */}
        <div className={`pt-4 border-t ${currentTheme.text.secondary}`} style={{borderTopWidth: '1px'}}>
          <a
            href={license.referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.text.accent} hover:underline text-sm font-medium`}
          >
            📖 Ver texto oficial completo →
          </a>
        </div>
      </div>
    </div>
  );
}
