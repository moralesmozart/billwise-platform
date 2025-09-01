# ⚡ BillWise Platform

> **Entiende tus facturas de electricidad y agua en España. Ahorra dinero con nuestro análisis personalizado.**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/moralesmozart/billwise-platform)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)](https://www.typescriptlang.org/)

## 🎯 ¿Qué es BillWise?

BillWise es una plataforma innovadora que ayuda a las personas en España a entender sus facturas de electricidad y agua. Explicamos cada detalle de la factura, por qué estás pagando X, y destacamos oportunidades para reducir esos costos.

### 🌍 **Problema que Resolvemos**
- **+85%** de los clientes de electricidad no saben cómo funciona su factura
- Términos como 'valle', 'punta', 'llano' son confusos para la mayoría
- Las personas pagan más de lo necesario por falta de comprensión
- Dificultad para identificar oportunidades de ahorro

### ✨ **Nuestra Solución**
- **Análisis personalizado** de facturas en múltiples idiomas
- **Explicación clara** de cada concepto y tarifa
- **Recomendaciones específicas** para reducir costos
- **Fast track** para cambio inmediato de proveedor

## 🚀 Características Principales

### 1. **Selector de Idioma Multilingüe**
- 🇪🇸 **Español** - Para residentes locales
- 🇵🇹 **Português** - Para comunidad lusófona
- 🇬🇧 **English** - Para expatriados internacionales

### 2. **Fast Track CTA**
- Opción para usuarios que solo quieren descuento
- **50€ de ahorro** garantizado al cambiar de proveedor
- Proceso simplificado sin necesidad de aprendizaje

### 3. **Testimonios Reales**
- **20+ casos de éxito** de personas alrededor del mundo
- Ahorros documentados desde 200€ hasta 600€ por año
- Historias de diferentes nacionalidades y situaciones

### 4. **Formulario Inteligente**
- Subida de facturas con drag & drop
- Validación automática de archivos
- Procesamiento inteligente de datos

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Styled Components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS Animations + Framer Motion
- **Deployment**: GitHub Pages

## 📁 Estructura del Proyecto

```
billwise-platform/
├── src/
│   ├── components/
│   │   └── BillWiseLanding.tsx    # Componente principal
│   ├── styles/                     # Estilos globales
│   ├── utils/                      # Utilidades
│   ├── types/                      # Tipos TypeScript
│   ├── App.tsx                     # Componente App
│   ├── main.tsx                    # Punto de entrada
│   └── index.css                   # Estilos globales
├── public/                         # Archivos estáticos
├── package.json                    # Dependencias
├── tsconfig.json                   # Configuración TypeScript
├── vite.config.ts                  # Configuración Vite
└── README.md                       # Este archivo
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/moralesmozart/billwise-platform.git
cd billwise-platform

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Linting del código
- `npm run deploy` - Despliegue a GitHub Pages

## 🌐 Despliegue

### GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Fork** del repositorio
2. **Habilitar** GitHub Pages en Settings > Pages
3. **Configurar** source como GitHub Actions
4. **Push** a la rama main para despliegue automático

### URL de Producción
- **Desarrollo**: `http://localhost:5173`
- **Producción**: `https://moralesmozart.github.io/billwise-platform/`

## 📱 Responsive Design

La plataforma está completamente optimizada para:
- 📱 **Móviles** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Pantallas grandes** (1440px+)

## 🎨 Paleta de Colores

- **Primario**: `#667eea` → `#764ba2` (Gradiente azul-morado)
- **Secundario**: `#FF6B35` → `#F7931E` (Gradiente naranja)
- **Acentos**: `#27AE60` (Verde para ahorros)
- **Neutros**: `#2C3E50`, `#5D6D7E`, `#E8E8E8`

## 🔧 Configuración

### Variables de Entorno
```bash
# .env.local
VITE_API_URL=your_api_url_here
VITE_ANALYTICS_ID=your_analytics_id
```

### Personalización
- **Colores**: Modificar variables CSS en `src/index.css`
- **Idiomas**: Agregar nuevos idiomas en `BillWiseLanding.tsx`
- **Testimonios**: Actualizar array `testimonials`

## 📊 Métricas y Analytics

### KPIs Principales
- **Conversión**: % de visitantes que completan el formulario
- **Engagement**: Tiempo en página y scroll depth
- **A/B Testing**: Diferentes versiones de CTAs
- **ROI**: Ahorro promedio por usuario

### Integración de Analytics
- Google Analytics 4
- Facebook Pixel
- LinkedIn Insight Tag
- Hotjar para heatmaps

## 🤝 Contribución

### Cómo Contribuir
1. **Fork** del repositorio
2. **Crear** rama feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abrir** Pull Request

### Guías de Estilo
- **TypeScript**: Configuración estricta habilitada
- **CSS**: Styled Components con naming consistente
- **Commits**: Conventional Commits
- **Testing**: Jest + React Testing Library

## 📈 Roadmap

### Fase 1 (Actual) ✅
- [x] Landing page multilingüe
- [x] Formulario de contacto
- [x] Testimonios y casos de éxito
- [x] Diseño responsive

### Fase 2 (Próximo) 🚧
- [ ] Sistema de usuarios y autenticación
- [ ] Dashboard personalizado
- [ ] Análisis automático de facturas
- [ ] Integración con APIs de proveedores

### Fase 3 (Futuro) 🔮
- [ ] App móvil nativa
- [ ] IA para recomendaciones
- [ ] Comunidad de usuarios
- [ ] Marketplace de proveedores

## 📞 Contacto y Soporte

- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [@moralesmozart](https://github.com/moralesmozart)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- **Website**: [billwise.es](https://billwise.es)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **Comunidad React** por el ecosistema increíble
- **Vite** por la herramienta de build ultra-rápida
- **Styled Components** por el CSS-in-JS elegante
- **Lucide** por los iconos hermosos y consistentes

---

**⚡ BillWise** - Haciendo las facturas más inteligentes, una factura a la vez. 💸

*¿Tienes preguntas o sugerencias? ¡Abre un issue o contribuye al proyecto!*
