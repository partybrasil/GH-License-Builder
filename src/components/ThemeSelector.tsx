import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSelector() {
  const { currentTheme, setTheme, allThemes } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`${currentTheme.background.card} ${currentTheme.animations.cardAnimation} rounded-xl shadow-2xl p-4 max-w-xs`}>
        <h3 className={`${currentTheme.text.primary} text-sm font-bold mb-3 flex items-center gap-2`}>
          <span>🎨</span> Seleccionar Tema
        </h3>
        <select
          value={currentTheme.id}
          onChange={(e) => setTheme(e.target.value)}
          className={`w-full ${currentTheme.background.card} ${currentTheme.text.primary} border-2 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            currentTheme.text.accent && currentTheme.text.accent.startsWith('text-')
              ? currentTheme.text.accent.replace('text-', 'focus:ring-')
              : 'focus:ring-current'
          } ${
            currentTheme.text.accent && currentTheme.text.accent.startsWith('text-')
              ? currentTheme.text.accent.replace('text-', 'border-')
              : 'border-current'
          }`}
        >
          {allThemes.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          ))}
        </select>
        <p className={`${currentTheme.text.secondary} text-xs mt-2`}>
          {currentTheme.description}
        </p>
      </div>
    </div>
  );
}
