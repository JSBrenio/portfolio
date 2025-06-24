# Theme System Usage Guide

## Overview
Your portfolio now has a complete theme system with 6 different themes:
- **Ocean** - Cool blues and purples (default)
- **Fire** - Bold reds and dark tones  
- **Light** - Clean and bright
- **Dark** - Modern dark theme
- **Forest** - Natural greens
- **Sunset** - Warm oranges and pinks

## How to Use Themes in Your Components

### 1. Using CSS Variables
The easiest way to use theme colors is with CSS variables:

```tsx
// In inline styles
<div style={{ 
  color: 'rgb(var(--primary))',
  backgroundColor: 'rgba(var(--accent), 0.1)',
  borderColor: 'rgb(var(--secondary))'
}}>
  Content
</div>
```

```css
/* In CSS files */
.my-component {
  color: rgb(var(--primary));
  background-color: rgba(var(--accent), 0.1);
  border: 1px solid rgb(var(--secondary));
}
```

### 2. Available CSS Variables
- `--primary` - Main brand color
- `--secondary` - Secondary brand color  
- `--accent` - Accent/highlight color
- `--highlight` - Additional highlight color
- `--neutral` - Neutral/gray color
- `--background` - Background color
- `--text` - Main text color
- `--text-light` - Light/secondary text color

### 3. Using the Theme Hook
```tsx
import { useTheme } from '../hooks/useTheme';

function MyComponent() {
  const { theme, setTheme, themes } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark Theme
      </button>
    </div>
  );
}
```

### 4. Utility Classes
You can also use the provided utility classes:

```tsx
<div className="text-primary bg-accent border-secondary">
  Styled with utility classes
</div>
```

Available utility classes:
- Text: `.text-primary`, `.text-secondary`, `.text-accent`, `.text-highlight`, `.text-neutral`, `.text-light`
- Background: `.bg-primary`, `.bg-secondary`, `.bg-accent`, `.bg-highlight`, `.bg-neutral`, `.bg-background`
- Border: `.border-primary`, `.border-secondary`, `.border-accent`
- Hover: `.hover-primary`, `.hover-accent`, `.hover-bg-primary`, `.hover-bg-accent`

### 5. Adding New Themes
To add a new theme, edit `src/styles/globals.css`:

```css
.my-new-theme {
  --primary: 255, 0, 0;        /* Red */
  --secondary: 0, 255, 0;      /* Green */
  --accent: 0, 0, 255;         /* Blue */
  --highlight: 255, 255, 0;    /* Yellow */
  --neutral: 128, 128, 128;    /* Gray */
  --background: 255, 255, 255; /* White */
  --text: 0, 0, 0;             /* Black */
  --text-light: 64, 64, 64;    /* Dark Gray */
}
```

Then add it to the themes array in `src/types/theme.ts`:

```tsx
export const themes = [
  // ...existing themes
  { name: 'my-new-theme' as Theme, label: 'My Theme', description: 'My custom theme' },
];
```

### 6. Theme Persistence
Themes are automatically saved to localStorage and restored when the user returns to your site.

### 7. Responsive Theme Switcher
The theme switcher automatically adapts to different screen sizes and shows color previews for each theme.

## Example Usage
Check `src/pages/Home.tsx` for a complete example of how to use the theme system throughout your components.
