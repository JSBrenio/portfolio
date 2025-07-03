# Image Examples in Markdown

This file demonstrates different ways to include images in your project descriptions.

## Method 1: Standard Markdown Syntax
![Portfolio Screenshot](blue_nobg.png)

## Method 2: Standard Markdown with Title
![Portfolio Screenshot](blue_nobg.png "Portfolio Website Screenshot")

## Method 3: HTML img tag (Basic)
<img src="/blue_nobg.png" alt="Portfolio Screenshot" />

## Method 4: HTML img tag with Size Control
<img src="/blue_nobg.png" alt="Portfolio Screenshot" width="400" />

## Method 5: HTML img tag with Styling
<img src="/blue_nobg.png" alt="Portfolio Screenshot" width="500" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); margin: 2rem 0;" />

## Method 6: HTML img tag with Custom Classes
<img src="/blue_nobg.png" alt="Portfolio Screenshot" width="400" class="project-image featured" />

## Method 7: Centered Image with HTML
<div style="text-align: center; margin: 2rem 0;">
  <img src="/blue_nobg.png" alt="Portfolio Screenshot" width="450" style="border-radius: 8px;" />
  <p style="font-size: 0.875rem; color: #666; margin-top: 0.5rem; font-style: italic;">Portfolio website homepage showcasing the cyberpunk theme</p>
</div>

## Method 8: Image Gallery Layout
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/blue_nobg.png" alt="Screenshot 1" style="width: 100%; border-radius: 8px;" />
  <img src="/blue.png" alt="Screenshot 2" style="width: 100%; border-radius: 8px;" />
</div>

## Method 9: Figure with Caption (HTML5)
<figure style="margin: 2rem 0; text-align: center;">
  <img src="/blue_nobg.png" alt="Portfolio Screenshot" width="400" style="border-radius: 8px;" />
  <figcaption style="margin-top: 0.5rem; font-size: 0.875rem; color: #666; font-style: italic;">
    The portfolio homepage featuring the cyberpunk theme with neon effects
  </figcaption>
</figure>

## Method 10: Responsive Image
<img src="/blue_nobg.png" alt="Portfolio Screenshot" style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; display: block; margin: 1rem auto;" />

## Best Practices

### For Simple Images
Use standard markdown syntax when you just need a basic image:
```markdown
![Alt text](image.png)
```

### For Styled Images
Use HTML when you need:
- Custom sizing
- Border radius
- Shadows
- Positioning
- Responsive behavior

### Image Paths
- Place images in the `public/` folder
- Reference them with `/image.png` (not `/public/image.png`)
- The component automatically handles path transformations

### Accessibility
Always include meaningful `alt` text for screen readers:
```html
<img src="/image.png" alt="Descriptive text about the image content" />
```
