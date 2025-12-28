export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">GH-License-Builder</h3>
          <p className="text-gray-400 mb-6">
            Generador de licencias open source personalizado
          </p>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/partybrasil/GH-License-Builder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://eligelicencia.github.io/eligeUnaLicencia/licenses/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Elige una Licencia
            </a>
            <a
              href="https://opensource.org/licenses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              OSI Licenses
            </a>
          </div>

          <div className="pt-6 border-t border-gray-800 text-sm text-gray-500">
            <p className="mb-2">
              ⚠️ <strong>Aviso Legal:</strong> Esta herramienta no constituye asesoría legal.
            </p>
            <p>
              Revisa siempre los textos oficiales de las licencias y consulta con un profesional en caso de duda.
            </p>
          </div>

          <div className="mt-6 text-gray-600">
            <p>Hecho con ❤️ para la comunidad open source</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
