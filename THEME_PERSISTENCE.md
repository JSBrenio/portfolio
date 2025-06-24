# Theme Persistence Across Routes

## How Your Theme System Works Globally

### **✅ Automatic Persistence**
Your theme system automatically persists across all routes/pages because:

1. **Context at App Root**: `ThemeProvider` wraps your entire app in `main.tsx`
2. **Body Class Application**: Themes are applied to `document.body.className`
3. **CSS Variables**: All components use the same global CSS variables
4. **localStorage**: Theme choice is saved and restored automatically

### **Architecture Overview**

```
main.tsx
├── ThemeProvider (wraps entire app)
    ├── App.tsx
        ├── Route 1 (Home)
        ├── Route 2 (About) 
        ├── Route 3 (Projects)
        └── Route N (Any page)
```

### **How It Works**

1. **Theme Selection**: User clicks theme in `ThemeSwitcher`
2. **Context Update**: `setTheme()` updates React context
3. **Body Class**: `document.body.className = 'dark'` (or other theme)
4. **CSS Variables**: All `var(--primary)` references update instantly
5. **Storage**: Theme saved to `localStorage.setItem('portfolio-theme', 'dark')`

### **What This Means**

✅ **Any new page** you create will automatically use the theme  
✅ **Page refreshes** maintain the selected theme  
✅ **Browser restart** remembers the theme choice  
✅ **No extra setup** needed for new routes  

### **Example: Adding a New Page**

```tsx
// src/pages/Projects.tsx
const Projects = () => {
  return (
    <div style={{ padding: '2rem' }}>
      {/* These colors automatically match the selected theme */}
      <h1 style={{ color: 'rgb(var(--primary))' }}>My Projects</h1>
      <p style={{ color: 'rgb(var(--text-light))' }}>
        This page automatically uses the theme colors!
      </p>
      <div style={{ 
        backgroundColor: 'rgba(var(--accent), 0.1)',
        border: '1px solid rgba(var(--accent), 0.2)',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        Project card with theme colors
      </div>
    </div>
  );
};
```

### **With React Router**

If you add React Router later, themes still work automatically:

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeSwitcher /> {/* Available on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### **Key Benefits**

1. **Zero Configuration**: New pages automatically inherit themes
2. **Consistent Experience**: Same theme across entire app
3. **Performance**: CSS variables update instantly (no re-renders)
4. **Flexibility**: Easy to add new themes or modify existing ones

### **Best Practices**

- Use `rgb(var(--primary))` for colors instead of hardcoded values
- Test new pages with different themes to ensure consistency
- Consider theme-aware components for complex styling needs
- Use the utility classes for common theme-based styles

Your theme system is production-ready and will scale with your portfolio as you add more pages and features!
