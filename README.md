# 🎨 GH-License-Builder

<div align="center">

**Generador Interactivo de Licencias Open Source para GitHub**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit-32B8C6?style=for-the-badge)](https://partybrasil.github.io/GH-License-Builder/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Ready-success?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License GPL](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)](LICENSE)

**[✨ Demo Online](https://partybrasil.github.io/GH-License-Builder/) • [🚀 Inicio Rápido](#-inicio-rápido) • [📖 Documentación](#-funcionalidades)**

</div>

---

## 🌟 ¿Qué es GH-License-Builder?

**GH-License-Builder** es una aplicación web **100% client-side** (sin backend) que te permite seleccionar, personalizar y generar textos de licencias para tus proyectos de GitHub. Con una interfaz visual moderna y animada, podrás:

- 📝 **Seleccionar** entre 11 licencias populares (MIT, Apache 2.0, GPL, BSD, MPL, CC0, Unlicense, y más)
- ✏️ **Personalizar** nombre del titular, año, nombre del proyecto y URL
- 📋 **Copiar** el texto de la licencia al portapapeles
- 💾 **Descargar** el archivo LICENSE listo para tu repositorio
- 📚 **Aprender** sobre permisos, condiciones y limitaciones de cada licencia
- 🔍 **Comparar** licencias en una tabla clara y visual

### ✨ Características Destacadas

🎯 **Interfaz Intuitiva** con diseño moderno y responsive  
📦 **11 Licencias** predefinidas (MIT, Apache 2.0, GPLv3, LGPLv3, AGPLv3, MPL 2.0, EPL 2.0, BSD 2/3-Clause, CC0, Unlicense)  
🎨 **Información Clara** de permisos, condiciones y limitaciones  
🔍 **Tabla Comparativa** para elegir la licencia correcta  
⚡ **Generación Instantánea** de texto personalizado  
📋 **Export** - Copiar o descargar  
💾 **Funciona Offline** tras la primera carga (PWA ready)  
🌐 **GitHub Pages** desplegado automáticamente  
🎭 **Modo Claro/Oscuro** (respeta preferencias del sistema)  
📱 **Responsive** - funciona en escritorio y móvil

---

## 🚀 Inicio Rápido

### Opción 1: Usar Online

👉 **[https://partybrasil.github.io/GH-License-Builder/](https://partybrasil.github.io/GH-License-Builder/)**

### Opción 2: Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/partybrasil/GH-License-Builder.git
cd GH-License-Builder

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:5173/GH-License-Builder/
```

### Opción 3: Build para Producción

```bash
# Construir para producción
npm run build

# El resultado estará en la carpeta /dist
```

---

## 📖 Funcionalidades

### 🎯 Selección de Licencia

Elige entre las licencias más populares, organizadas por tipo:

- **Permisivas**: MIT, Apache 2.0, BSD 2-Clause, BSD 3-Clause
- **Copyleft Fuerte**: GPLv3, AGPLv3
- **Copyleft Débil**: LGPLv3, MPL 2.0, EPL 2.0
- **Dominio Público**: CC0, Unlicense

### ✏️ Personalización

Completa los campos requeridos:

- **Nombre del Titular** (persona u organización)
- **Año** (validado automáticamente)
- **Nombre del Proyecto**
- **URL del Proyecto** (opcional)

### 📋 Vista Previa y Export

- **Vista en texto plano o Markdown**
- **Copiar al portapapeles** con un click
- **Descargar archivo LICENSE** listo para tu repo
- **Validación en tiempo real** de los campos

### 📚 Información de Licencias

Para cada licencia se muestra:

- ✓ **Permisos**: qué puedes hacer (uso comercial, modificación, distribución)
- ! **Condiciones**: qué debes cumplir (atribución, copyleft, etc.)
- ✕ **Limitaciones**: qué no está garantizado (sin garantía, responsabilidad)
- 📖 **Enlace a texto oficial completo**

### 🔍 Tabla Comparativa

Compara rápidamente todas las licencias:

- Tipo de licencia
- Uso comercial permitido
- Requisitos para código derivado
- Mejores casos de uso

---

## 🔧 Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4 (con @tailwindcss/postcss)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

### 📂 Estructura del Proyecto

```text
GH-License-Builder/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Hero.tsx
│   │   ├── LicenseSelector.tsx
│   │   ├── CustomizationForm.tsx
│   │   ├── LicensePreview.tsx
│   │   ├── LicenseInfoPanel.tsx
│   │   ├── LicenseComparison.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── licenses.ts     # Catálogo de licencias
│   ├── types/
│   │   └── license.ts      # TypeScript types
│   ├── utils/
│   │   └── licenseUtils.ts # Funciones de utilidad
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globales
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions para deploy
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## 🎯 Casos de Uso

### 📚 ¿Qué licencia elegir?

**¿Quieres máxima libertad para otros?** → MIT / Apache / BSD  
**¿Quieres que las mejoras sigan siendo libres?** → GPL / AGPL  
**¿Tienes una librería para usar en cualquier proyecto?** → LGPL / MPL  
**¿Quieres renunciar a todos los derechos?** → CC0 / Unlicense

---

## 🌍 Despliegue en GitHub Pages

El proyecto se despliega automáticamente con GitHub Actions cuando se hace push a `main`:

1. **Configurar GitHub Pages**:
   - Ve a Settings > Pages
   - Source: GitHub Actions

2. **El workflow automáticamente**:
   - Instala dependencias
   - Construye el proyecto
   - Despliega a GitHub Pages

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 🎉

### Cómo Contribuir

1. Haz **Fork** del repositorio
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Haz commit: `git commit -m 'feat: nueva funcionalidad'`
4. Haz push: `git push origin feature/mi-mejora`
5. Abre un Pull Request

### Áreas de Contribución

- 🎨 Mejoras de UI/UX
- ✨ Nuevas funcionalidades
- 🐛 Corrección de bugs
- 📖 Mejora de documentación
- 🌍 Internacionalización (inglés, portugués, etc.)
- ♿ Mejoras de accesibilidad

---

## 📄 Licencia

Este proyecto está bajo la licencia GNU General Public License v3.0. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **[Open Source Initiative](https://opensource.org)** por las definiciones de licencias
- **[Elige una Licencia](https://eligelicencia.github.io/eligeUnaLicencia/licenses/)** por la guía en español
- **[Choose a License](https://choosealicense.com/)** por la inspiración
- **GitHub Pages** por el hosting gratuito
- La comunidad open source 💚

---

## 📞 Soporte

- 🐛 **Reportar bugs**: [Issues](https://github.com/partybrasil/GH-License-Builder/issues)
- 💡 **Solicitar features**: [Issues](https://github.com/partybrasil/GH-License-Builder/issues)
- 📧 **Contacto**: A través de GitHub

---

## ⚠️ Aviso Legal

Esta herramienta no constituye asesoría legal. Revisa siempre los textos oficiales de las licencias y consulta con un profesional en caso de duda.

---

<div align="center">

**[⬆️ Volver arriba](#-gh-license-builder)**

---

Hecho con ❤️ para la comunidad open source

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)
![No Backend](https://img.shields.io/badge/No%20Backend-⚡-blue?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-orange?style=for-the-badge)

</div>
