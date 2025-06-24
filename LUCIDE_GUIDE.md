# Lucide React Icons Guide

## Overview
Your theme switcher now uses beautiful Lucide React icons! Here's how to use them throughout your portfolio.

## Theme Icons Used
- **Ocean** 🌊 - `Waves` icon
- **Fire** 🔥 - `Flame` icon  
- **Light** ☀️ - `Sun` icon
- **Dark** 🌙 - `Moon` icon
- **Forest** 🌲 - `Trees` icon
- **Sunset** 🌅 - `Sunset` icon

## How to Use Lucide Icons

### 1. Import Icons
```tsx
import { Heart, Star, User, Settings } from 'lucide-react';
```

### 2. Basic Usage
```tsx
<Heart size={24} color="red" />
<Settings size={32} />
```

### 3. With Theme Colors
```tsx
<User 
  size={24} 
  style={{ color: 'rgb(var(--primary))' }} 
/>
```

### 4. With CSS Classes
```tsx
<Star className="text-primary" size={20} />
```

## Popular Icons for Portfolios

### Contact & Social
```tsx
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
```

### Skills & Tech  
```tsx
import { Code, Database, Smartphone, Globe, Cpu } from 'lucide-react';
```

### Navigation
```tsx
import { Home, User, Briefcase, FileText, MessageCircle } from 'lucide-react';
```

### Actions
```tsx
import { Download, ExternalLink, ArrowRight, ChevronDown } from 'lucide-react';
```

### UI Elements
```tsx
import { Menu, X, Search, Filter, Settings } from 'lucide-react';
```

## Customization Options
- `size` - Number (default: 24)
- `color` - String or CSS variable
- `strokeWidth` - Number (default: 2)
- `className` - CSS classes
- `style` - Inline styles

## Examples from Your Portfolio
Check `src/components/ThemeSwitcher.tsx` and `src/pages/Home.tsx` to see Lucide icons in action with your theme system!

## Benefits of Lucide React
✅ **Lightweight** - Tree-shakable, only bundles used icons
✅ **Consistent** - All icons follow the same design system  
✅ **Customizable** - Easy to style with your theme colors
✅ **TypeScript** - Full TypeScript support
✅ **Accessible** - Built with accessibility in mind

## Browse All Icons
Visit: https://lucide.dev/icons to browse all 1000+ available icons
