# BillWise Platform 🚀

**Plataforma para entender facturas de electricidad y agua en España**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-blue?style=for-the-badge)](https://moralesmozart.github.io/billwise-platform/#/)
[![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)](https://github.com/moralesmozart/billwise-platform)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## ✨ What's New in v1.0.0

### 🎯 Enhanced User Experience
- **Loading States**: Smooth loading animations and spinners
- **Progress Tracking**: Visual progress bar showing page completion
- **Floating Action Button**: Quick WhatsApp access that appears on scroll
- **Scroll Indicators**: Interactive scroll hints for better navigation
- **Enhanced Animations**: Staggered fade-in animations for content sections

### 📱 Progressive Web App (PWA) Features
- **Offline Support**: Service worker for caching and offline functionality
- **App Installation**: Install BillWise as a native app on mobile/desktop
- **Push Notifications**: Ready for future notification features
- **Background Sync**: Handles offline actions when connection returns

### 🎨 Improved Visual Design
- **Better Typography**: Enhanced font hierarchy and readability
- **Smooth Transitions**: 60fps animations and micro-interactions
- **Responsive Grid**: Improved mobile and tablet layouts
- **Enhanced Cards**: Better shadows, borders, and hover effects

### 🚀 Performance Improvements
- **Lazy Loading**: Content loads progressively for better performance
- **Optimized Animations**: Respects user's motion preferences
- **Efficient Caching**: Smart resource caching strategy
- **Bundle Optimization**: Smaller, faster loading times

### 🌍 Accessibility Enhancements
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences

## 🏗️ Architecture

```
billwise-platform/
├── src/
│   ├── components/
│   │   ├── BillWiseLanding.tsx      # Main landing page
│   │   ├── BillWiseExplanation.tsx  # Detailed explanation page
│   │   └── TestimonialsCarousel.tsx # Customer testimonials
│   ├── App.tsx                      # Main app with routing
│   ├── main.tsx                     # Entry point with PWA setup
│   └── styles/                      # Global styles and animations
├── public/
│   ├── sw.js                        # Service worker
│   ├── manifest.json                # PWA manifest
│   └── assets/                      # Images and icons
└── package.json                     # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/moralesmozart/billwise-platform.git
cd billwise-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🌟 Key Features

### Multi-Language Support
- 🇪🇸 **Español**: Primary language for Spanish users
- 🇵🇹 **Português**: Full Portuguese translation
- 🇬🇧 **English**: Complete English version

### Smart Content Delivery
- **Progressive Disclosure**: Information revealed as users scroll
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Design**: Works perfectly on all devices

### Performance Optimizations
- **Service Worker**: Offline-first approach
- **Lazy Loading**: Content loads as needed
- **Optimized Assets**: Compressed images and efficient code

## 📱 PWA Features

### Installation
Users can install BillWise as a native app:
- **Mobile**: Add to home screen from browser
- **Desktop**: Install from browser menu
- **Offline**: Works without internet connection

### Benefits
- **Faster Loading**: Cached resources load instantly
- **Offline Access**: Core functionality works offline
- **Native Feel**: Looks and feels like a native app
- **Push Notifications**: Ready for future features

## 🎨 Customization

### Styling
The app uses styled-components for consistent theming:
```typescript
// Example of custom styling
const CustomButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 25px;
  padding: 16px 32px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;
```

### Animations
Global CSS animations are available as utility classes:
```css
.animate-fade-in-up    /* Fade in from bottom */
.animate-slide-in-left /* Slide in from left */
.animate-scale-in      /* Scale in effect */
.animate-bounce        /* Bouncing animation */
```

## 🔧 Development

### Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for quality checks

## 📊 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+ 
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🌐 Deployment

### GitHub Pages
The app is automatically deployed to GitHub Pages:
```bash
npm run deploy
```

### Custom Domain
To use a custom domain:
1. Add CNAME file in `public/` folder
2. Configure DNS settings
3. Update `package.json` homepage field

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Styled Components**: For the styling solution
- **Vite**: For the fast build tool
- **GitHub Pages**: For the hosting platform

## 📞 Contact

- **Website**: [https://moralesmozart.github.io/billwise-platform/](https://moralesmozart.github.io/billwise-platform/)
- **WhatsApp**: [+34 671 310 850](https://wa.me/+34671310850)
- **Email**: [contact@billwise.es](mailto:contact@billwise.es)

---

**Made with ❤️ by [Mozart Morales](https://github.com/moralesmozart)**

*Helping people understand their utility bills and save money since 2024*
