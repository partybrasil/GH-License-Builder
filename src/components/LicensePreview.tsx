import { useState } from 'react';
import type { LicenseCustomization } from '../types/license';
import { generateLicenseText, copyToClipboard, downloadLicenseFile } from '../utils/licenseUtils';
import { validateCustomization } from '../utils/licenseUtils';
import { useTheme } from '../contexts/ThemeContext';

interface LicensePreviewProps {
  customization: LicenseCustomization;
}

export default function LicensePreview({ customization }: LicensePreviewProps) {
  const { currentTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'markdown'>('text');

  const isValid = validateCustomization(customization).length === 0;
  const licenseText = isValid ? generateLicenseText(customization) : '';

  const handleCopy = async () => {
    if (!isValid) return;
    const success = await copyToClipboard(licenseText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!isValid) return;
    downloadLicenseFile(licenseText, 'LICENSE');
  };

  const cardClasses = `${currentTheme.background.card} rounded-2xl shadow-xl p-6 ${currentTheme.animations.cardAnimation} ${currentTheme.background.cardHover}`;

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl font-bold ${currentTheme.text.primary}`}>Vista Previa</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('text')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'text'
                ? `${currentTheme.button.primary}`
                : `${currentTheme.text.secondary} opacity-60 hover:opacity-100`
            }`}
          >
            Texto
          </button>
          <button
            onClick={() => setActiveTab('markdown')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'markdown'
                ? `${currentTheme.button.primary}`
                : `${currentTheme.text.secondary} opacity-60 hover:opacity-100`
            }`}
          >
            Markdown
          </button>
        </div>
      </div>

      {!isValid ? (
        <div className={`${currentTheme.background.card} opacity-70 rounded-lg p-8 text-center`}>
          <p className={currentTheme.text.secondary}>
            Completa los campos obligatorios para generar la licencia
          </p>
        </div>
      ) : (
        <>
          <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-auto max-h-96">
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
              {activeTab === 'text' ? licenseText : `\`\`\`\n${licenseText}\n\`\`\``}
            </pre>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
                copied
                  ? 'bg-green-600 text-white'
                  : `${currentTheme.button.primary} ${currentTheme.button.hover}`
              }`}
            >
              {copied ? '✓ Copiado' : '📋 Copiar'}
            </button>
            <button
              onClick={handleDownload}
              className={`flex-1 px-4 py-2 rounded-lg font-medium ${currentTheme.button.primary} ${currentTheme.button.hover} transition-all transform hover:scale-105`}
            >
              💾 Descargar LICENSE
            </button>
          </div>
        </>
      )}
    </div>
  );
}
