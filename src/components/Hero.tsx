import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { currentTheme } = useTheme();
  
  const scrollToGenerator = () => {
    const main = document.querySelector('main');
    main?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative overflow-hidden ${currentTheme.background.hero} ${currentTheme.text.hero} py-20`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 ${currentTheme.animations.backgroundAnimation || 'animate-pulse'}`}></div>
        <div className={`absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 ${currentTheme.animations.backgroundAnimation || 'animate-pulse'}`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${currentTheme.animations.heroAnimation || 'animate-fade-in'}`}>
            GH-License-Builder
          </h1>
          <p className={`text-xl md:text-2xl mb-8 opacity-90`}>
            Selecciona una licencia, personaliza nombre, año y proyecto, y copia el texto listo para tu repositorio.
          </p>
          <button
            onClick={scrollToGenerator}
            className={`${currentTheme.button.primary} ${currentTheme.button.hover} ${currentTheme.button.text} px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-2xl`}
          >
            Empezar →
          </button>
        </div>
      </div>
    </section>
  );
}
