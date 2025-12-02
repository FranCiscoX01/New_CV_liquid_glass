# Portfolio React - John Doe

Un portfolio moderno y responsivo construido con React, TypeScript y Tailwind CSS. Este proyecto unifica todas las secciones HTML originales en una aplicación React cohesiva con buenas prácticas de desarrollo frontend.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Toggle entre temas con persistencia
- **Animaciones Fluidas**: Transiciones y efectos visuales atractivos
- **TypeScript**: Tipado estático para mayor robustez
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Rendimiento Optimizado**: Lazy loading y optimizaciones de Vite
- **Accesibilidad**: Cumple con estándares WCAG
- **SEO Friendly**: Estructura semántica y meta tags

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones (opcional)
- **Lucide React** - Iconos modernos
- **ESLint** - Linting de código

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run type-check` - Verifica tipos de TypeScript

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       └── ScrollToTop.tsx
├── data/
│   └── portfolio.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Personalización

### Colores y Tema

Los colores principales se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: "#66ffdb",
  "primary-dark": "#0df2bd",
  "background-light": "#f5f8f8",
  "background-dark": "#0a192f",
  // ...
}
```

### Contenido

Actualiza el contenido en `src/data/portfolio.ts`:

- **Proyectos**: Modifica el array `projects`
- **Experiencia**: Actualiza el array `experiences`
- **Habilidades**: Edita el array `skills`
- **Enlaces Sociales**: Cambia `socialLinks`

### Componentes

Cada sección es un componente independiente que puedes personalizar:

- `Hero.tsx` - Sección principal con animación de texto
- `About.tsx` - Información personal y valores
- `Experience.tsx` - Timeline de experiencia laboral
- `Projects.tsx` - Showcase de proyectos con filtros
- `Skills.tsx` - Habilidades técnicas con barras de progreso
- `Contact.tsx` - Formulario de contacto e información

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Despliega automáticamente

### Netlify

1. Conecta tu repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Sube el contenido de dist/ a gh-pages branch
```

## 🔧 Configuración Adicional

### Variables de Entorno

Crea un archivo `.env.local` para variables de entorno:

```env
VITE_CONTACT_EMAIL=tu@email.com
VITE_GITHUB_URL=https://github.com/tuusuario
VITE_LINKEDIN_URL=https://linkedin.com/in/tuusuario
```

### Formulario de Contacto

Para un formulario funcional, integra con servicios como:
- **Formspree**
- **Netlify Forms**
- **EmailJS**

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ♿ Accesibilidad

- Navegación por teclado
- Lectores de pantalla compatibles
- Contraste de colores WCAG AA
- Texto alternativo en imágenes
- Estructura semántica HTML

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

John Doe - [@johndoe](https://twitter.com/johndoe) - john@example.com

Project Link: [https://github.com/johndoe/portfolio-react](https://github.com/johndoe/portfolio-react)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!