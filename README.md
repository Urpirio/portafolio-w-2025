# Portafolio Web 2025 - UrpirioDev

Portfolio personal de Urpirio Junior Moreno Vargas, Full Stack Developer con más de un año de experiencia en desarrollo web.

## 🚀 Acerca del Proyecto

Este es un portfolio web moderno y responsivo desarrollado con Next.js 15, diseñado para mostrar mis proyectos, habilidades y experiencia como desarrollador Full Stack. El sitio incluye una interfaz interactiva con animaciones, modo responsive para dispositivos móviles, y un sistema de contacto integrado con notificaciones por email.

### 🌟 Características Principales

- ✨ **Diseño Moderno y Responsivo**: Interfaz adaptable a todo tipo de dispositivos
- 📱 **Secciones de Proyectos**: Showcase de proyectos web y móviles
- 🎨 **Animaciones Interactivas**: Experiencia de usuario fluida y atractiva
- 📧 **Sistema de Contacto**: Formulario integrado con envío de emails usando Resend
- 🔍 **Búsqueda de Proyectos**: Sistema de búsqueda y filtrado de proyectos
- 🎯 **Navegación Intuitiva**: Header fijo y footer con enlaces importantes
- 💼 **Showcase de Habilidades**: Sección dedicada a tecnologías y stack técnico

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.2.2** - Framework React con SSR y SSG
- **React 19** - Biblioteca JavaScript para interfaces de usuario
- **Tailwind CSS 4** - Framework CSS utility-first
- **PrimeReact 10.9.6** - Componentes UI ricos y personalizables
- **React Icons 5.5.0** - Biblioteca de iconos

### Backend & Servicios
- **Resend 4.1.2** - Servicio de envío de emails transaccionales
- **React Email Components** - Templates de email en React
- **API Routes de Next.js** - Endpoints para servicios backend

### Herramientas de Desarrollo
- **ESLint 9** - Linter para mantener código limpio
- **Turbopack** - Empaquetador de alta velocidad para desarrollo

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior)
- **npm** o **yarn** como gestor de paquetes
- Una cuenta en [Resend](https://resend.com) para el envío de emails (opcional para desarrollo)

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Urpirio/portafolio-w-2025.git
cd portafolio-w-2025
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno** (opcional)
```bash
# Crear archivo .env.local en la raíz del proyecto
# Agregar la API key de Resend si se desea usar el servicio de emails
RESEND_API_KEY=tu_api_key_aqui
```

## 🚀 Ejecución

### Modo Desarrollo

Iniciar el servidor de desarrollo con Turbopack:

```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Modo Producción

1. **Construir el proyecto**
```bash
npm run build
# o
yarn build
```

2. **Iniciar servidor de producción**
```bash
npm start
# o
yarn start
```

### Linting

Ejecutar el linter para verificar el código:

```bash
npm run lint
# o
yarn lint
```

## 📁 Estructura del Proyecto

```
portafolio-w-2025/
├── public/                      # Archivos estáticos
│   ├── Img-Proyects/           # Imágenes de proyectos web
│   ├── Img-MobileProyects/     # Imágenes de proyectos móviles
│   ├── SomeTopProyects/        # Imágenes de proyectos destacados
│   └── LogoPortafolio.png      # Logo del sitio
├── src/
│   ├── app/
│   │   ├── api/                # API Routes
│   │   │   ├── send/          # Endpoint de envío de emails
│   │   │   ├── sendUser/      # Endpoint de confirmación a usuario
│   │   │   └── sendVerify/    # Endpoint de verificación
│   │   ├── components/         # Componentes de la página principal
│   │   │   ├── Section1.jsx   # Hero section
│   │   │   ├── Aboutme.jsx    # Sección "Sobre mí"
│   │   │   ├── AboutmeP2.jsx  # Sección "Sobre mí" parte 2
│   │   │   ├── WebProyects.jsx # Proyectos web
│   │   │   ├── MobileProyects.jsx # Proyectos móviles
│   │   │   ├── TopProyects.jsx # Proyectos destacados
│   │   │   ├── Contact.jsx    # Formulario de contacto
│   │   │   ├── Header.jsx     # Encabezado
│   │   │   └── Footer.jsx     # Pie de página
│   │   ├── Data/              # Datos estáticos
│   │   │   ├── DataSkills.js  # Habilidades técnicas
│   │   │   ├── DataTopProyects.js # Datos de proyectos destacados
│   │   │   └── DataHoverNav.js # Datos de navegación
│   │   ├── proyect/           # Página de proyectos detallados
│   │   │   ├── components/    # Componentes de proyectos
│   │   │   ├── Data/         # Datos de proyectos
│   │   │   └── func/         # Funciones auxiliares
│   │   ├── layout.jsx         # Layout principal
│   │   └── page.jsx           # Página de inicio
│   └── styles/
│       └── Globals.css        # Estilos globales
├── emails/                     # Templates de email
├── package.json               # Dependencias y scripts
├── next.config.mjs           # Configuración de Next.js
├── tailwind.config.mjs       # Configuración de Tailwind
├── postcss.config.mjs        # Configuración de PostCSS
└── jsconfig.json             # Configuración de JavaScript
```

## 🎨 Secciones del Portfolio

### 1. Hero Section (Section1)
Presentación principal con nombre, título y enlaces a redes sociales.

### 2. About Me (Aboutme & AboutmeP2)
Información personal, experiencia y trayectoria profesional.

### 3. Projects Showcase
- **Web Projects**: Proyectos de desarrollo web
- **Mobile Projects**: Aplicaciones móviles
- **Top Projects**: Proyectos destacados con más detalles

### 4. Skills
Tecnologías y herramientas con las que trabajo:
- HTML, CSS, JavaScript
- React, React Native
- Next.js, Node.js
- MySQL, MongoDB
- Git, GitHub

### 5. Contact Form
Formulario de contacto integrado con sistema de envío de emails.

## 📧 Sistema de Emails

El portfolio incluye un sistema de notificaciones por email usando Resend:

- **EmailUdev**: Template para notificaciones al propietario
- **EmailUser**: Template de confirmación para usuarios
- **EmailVerify**: Template de verificación

Los endpoints están disponibles en:
- `/api/send` - Envío principal
- `/api/sendUser` - Confirmación a usuario
- `/api/sendVerify` - Verificación

## 🌐 Deployment

El sitio está optimizado para deployment en **Vercel**:

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura las variables de entorno necesarias
3. Vercel detectará automáticamente Next.js y configurará el build

### Variables de Entorno para Producción

```env
RESEND_API_KEY=tu_api_key_de_resend
```

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, puedes:

1. Abrir un Issue
2. Hacer un Fork del proyecto
3. Crear una Pull Request

## 👤 Contacto

**Urpirio Junior Moreno Vargas**
- Portfolio: [urpiriodev.online](https://www.urpiriodev.online)
- Email: urpiriojunior@gmail.com
- GitHub: [@Urpirio](https://github.com/Urpirio)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

⭐ **Si te gusta este proyecto, no olvides darle una estrella!** ⭐
