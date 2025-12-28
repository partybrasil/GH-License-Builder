export default function Hero() {
  const scrollToGenerator = () => {
    const main = document.querySelector('main');
    main?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            GH-License-Builder
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Selecciona una licencia, personaliza nombre, año y proyecto, y copia el texto listo para tu repositorio.
          </p>
          <button
            onClick={scrollToGenerator}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            Empezar →
          </button>
        </div>
      </div>
    </section>
  );
}
