import { useState } from 'react';
import type { LicenseCustomization } from '../types/license';
import { generateLicenseText, copyToClipboard, downloadLicenseFile } from '../utils/licenseUtils';
import { validateCustomization } from '../utils/licenseUtils';

interface LicensePreviewProps {
  customization: LicenseCustomization;
}

export default function LicensePreview({ customization }: LicensePreviewProps) {
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Vista Previa</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('text')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'text'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Texto
          </button>
          <button
            onClick={() => setActiveTab('markdown')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'markdown'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Markdown
          </button>
        </div>
      </div>

      {!isValid ? (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
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
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {copied ? '✓ Copiado' : '📋 Copiar'}
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              💾 Descargar LICENSE
            </button>
          </div>
        </>
      )}
    </div>
  );
}
