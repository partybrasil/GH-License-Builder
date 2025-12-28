export default function LicenseComparison() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Comparación de Licencias
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300 dark:border-gray-600">
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Licencia</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Tipo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Uso Comercial</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Código Derivado Libre</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Mejor Para</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">MIT</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Permisiva</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">No requerido</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Proyectos simples, amplia adopción</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Apache 2.0</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Permisiva</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">No requerido</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Proyectos empresariales, protección patentes</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">BSD 2/3-Clause</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Permisiva</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">No requerido</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Máxima libertad, licencias cortas</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">GPLv3</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Copyleft Fuerte</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Sí, GPL</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Garantizar libertad del software</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">LGPLv3</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Copyleft Débil</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Solo librería</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Librerías que pueden usarse en software privativo</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">AGPLv3</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Copyleft Fuerte</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Sí, AGPL</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Servicios web/SaaS, protección en red</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">MPL 2.0</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Copyleft Débil</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Solo archivos MPL</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Término medio, proyectos Mozilla</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">EPL 2.0</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Copyleft Débil</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Solo componentes EPL</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Entornos empresariales, Eclipse</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">CC0</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Dominio Público</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">No aplicable</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Contenido, datasets, máxima libertad</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">Unlicense</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Dominio Público</td>
              <td className="py-3 px-4 text-green-600 dark:text-green-400">Sí</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300">No aplicable</td>
              <td className="py-3 px-4 text-gray-600 dark:text-gray-300 text-xs">Renuncia total de derechos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Casos de Uso Comunes</h3>
        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
          <li>• <strong>MIT / Apache / BSD:</strong> Quiero que cualquiera use mi código, incluso en productos propietarios</li>
          <li>• <strong>GPL / AGPL:</strong> Quiero obligar a que las mejoras sigan siendo libres y abiertas</li>
          <li>• <strong>LGPL / MPL:</strong> Tengo una librería que otros usen sin abrir todo su código</li>
          <li>• <strong>CC0 / Unlicense:</strong> Renuncio a mis derechos y lo coloco en dominio público</li>
        </ul>
      </div>
    </div>
  );
}
