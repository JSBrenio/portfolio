# 🚀 Personal Portfolio

<div align="center">

![Portfolio Preview](./public/portfolio/image.gif)

**A modern, theme-aware React portfolio showcasing my development journey**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-jsbrenio.com-00d4ff?style=for-the-badge)](https://jsbrenio.com)
[![Cloudflare](https://img.shields.io/badge/Deployed_on-Cloudflare_Pages-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![TypeScript](https://img.shields.io/badge/Built_with-TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/Powered_by-React-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Multi-Theme System**
- **4 Unique Themes**: Light, Dark, Cyberpunk, Witcher
- **Theme-Aware Content**: Dynamic text that changes with themes
- **CSS Variables**: Smooth theme transitions
- **User Preference**: Persistent theme selection

</td>
<td width="50%">

### ⚡ **Performance Optimized**
- **Lazy Loading**: Images load only when needed
- **Component Memoization**: Prevents unnecessary re-renders
- **Code Splitting**: Optimized bundle sizes
- **Vite Build**: Lightning-fast development and builds

</td>
</tr>
<tr>
<td width="50%">

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **CSS Grid & Flexbox**: Modern layout techniques
- **Touch-Friendly**: Smooth mobile interactions
- **Progressive Enhancement**: Works everywhere

</td>
<td width="50%">

### 📝 **Content Management**
- **Markdown Support**: Rich project descriptions
- **Modular Content**: Theme-dependent text system
- **Anchor Navigation**: Table of contents with smooth scrolling
- **Image Optimization**: WebP support with fallbacks

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### **Styling**
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![CSS Variables](https://img.shields.io/badge/CSS_Variables-000000?style=for-the-badge&logo=css3&logoColor=white)

### **Content & Routing**
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

### **Deployment & Tools**
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

</div>

---

## 🏗️ Architecture

```
📁 src/
├── 🎨 components/          # Reusable UI components
│   ├── LazyImage.tsx       # Optimized image loading
│   ├── ProjectCard.tsx     # Project showcase cards
│   ├── MarkdownContent.tsx # Rich content renderer
│   └── ThemeSwitcher.tsx   # Theme selection UI
├── 📄 pages/              # Route components
│   ├── Home.tsx           # Landing page
│   ├── Projects.tsx       # Project gallery
│   ├── ProjectDetail.tsx  # Individual project pages
│   └── About.tsx          # Personal information
├── 🎯 data/               # Content management
│   ├── projects.ts        # Project definitions
│   └── text/             # Theme-aware content
├── 🎨 styles/             # Component-specific CSS
├── 🔧 hooks/              # Custom React hooks
└── 🎭 contexts/           # Theme state management
```

---

## 🌟 Key Technical Implementations

<details>
<summary><b>🎨 Advanced Theme System</b></summary>

```typescript
// Theme-aware content system
const getHomeContent = (theme: Theme, useThemedContent?: boolean) => {
  const baseContent = { title: "Welcome", subtitle: "Developer & Creator" };
  
  if (!useThemedContent) return baseContent;
  
  switch (theme) {
    case 'cyberpunk':
      return { title: "SYSTEM ONLINE", subtitle: "Code.Execute.Dominate" };
    case 'witcher':
      return { title: "Greetings, Traveler", subtitle: "Weaver of Digital Magic" };
    default:
      return baseContent;
  }
};
```

</details>

<details>
<summary><b>⚡ Performance Optimizations</b></summary>

```typescript
// Lazy loading with Intersection Observer
const useLazyLoading = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(elementRef.current);
      }
    }, options);

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isIntersecting };
};
```

</details>

<details>
<summary><b>📱 Responsive Design Patterns</b></summary>

```css
/* Modern CSS Grid with container queries */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  container-type: inline-size;
}

/* Dynamic typography */
.project-title {
  font-size: clamp(1.25rem, 4vw, 2rem);
}

@container (max-width: 600px) {
  .project-title {
    font-size: clamp(1rem, 6vw, 1.5rem);
  }
}
```

</details>

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone https://github.com/JSBrenio/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Theme Showcase

<div align="center">

| Light Theme | Dark Theme |
|-------------|------------|
| ![Light](./public/portfolio/chrome_g2BxSiiAPO.png) | ![Dark](./public/portfolio/chrome_AUzZFtz0Sp.png) |

| Cyberpunk Theme | Witcher Theme |
|-----------------|---------------|
| ![Cyberpunk](./public/portfolio/chrome_EtQUk3gwdG.png) | ![Witcher](./public/portfolio/chrome_kvcnQIiuAd.png) |

</div>

---

## 📊 Project Metrics

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-85%25-blue?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-12%25-purple?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-3%25-yellow?style=flat-square)

**Performance Score**: 98/100 (Lighthouse) | **Accessibility**: AA Compliant | **Bundle Size**: < 500KB

</div>

---

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. 🐛 **Found a bug?** [Open an issue](https://github.com/JSBrenio/portfolio/issues)
2. 💡 **Have an idea?** Start a [discussion](https://github.com/JSBrenio/portfolio/discussions)
3. 🔧 **Want to contribute?** Fork → Branch → PR

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [JSBrenio](https://jsbrenio.com)**

[![Portfolio](https://img.shields.io/badge/Portfolio-jsbrenio.com-00d4ff?style=for-the-badge)](https://jsbrenio.com)
[![GitHub](https://img.shields.io/badge/GitHub-JSBrenio-181717?style=for-the-badge&logo=github)](https://github.com/JSBrenio)

*"Code is poetry written in logic"*

</div>
