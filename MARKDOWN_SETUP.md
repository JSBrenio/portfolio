# Markdown Integration Setup

## Overview
Your portfolio now supports detailed markdown descriptions for each project. Here's how it works:

## Setup Summary

### 1. Vite Configuration
- Using Vite's built-in `?raw` query parameter for importing markdown as text
- Added TypeScript declarations for markdown imports in `vite-env.d.ts`
- No additional Vite plugins needed - Vite handles `.md?raw` imports natively

### 2. Project Interface
- Extended the `Project` interface to include `detailedDescription?: string`
- This allows projects to have rich markdown content while maintaining backward compatibility

### 3. Markdown Files Created
- `portfolio-website.md` - Your main portfolio project
- `task-manager.md` - Task management application
- `ecommerce-platform.md` - E-commerce solution
- `weather-dashboard.md` - Weather dashboard app
- `chat-application.md` - Real-time chat application
- `data-visualization.md` - Data visualization tool
- `social-platform.md` - Social media platform

### 4. Project Data Integration
- All projects now import their respective markdown files
- The `detailedDescription` field contains the markdown content as a string
- Projects fall back to the original description if no markdown is provided

### 5. UI Integration
- `ProjectDetail` page automatically uses markdown content in the overview section
- `MarkdownContent` component renders the markdown with proper styling
- Enhanced CSS styling for better presentation

## How to Use

### Adding New Projects with Markdown

1. **Create a markdown file**:
   ```bash
   # Create file in src/data/project-descriptions/
   touch src/data/project-descriptions/my-new-project.md
   ```

2. **Import in projects.ts**:
   ```typescript
   import myProjectMd from './project-descriptions/my-new-project.md';
   ```

3. **Add to project data**:
   ```typescript
   {
     id: 'my-new-project',
     name: 'My New Project',
     description: 'Short description...',
     detailedDescription: myProjectMd,
     // ... other fields
   }
   ```

### Markdown Structure Recommendations

Use this structure for consistent project descriptions:

```markdown
# Project Name

Brief overview paragraph...

## Project Overview
Detailed description of what the project does...

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Technical Implementation
### Frontend
- Technology details

### Backend
- Technology details

## Development Challenges
1. Challenge 1: Solution
2. Challenge 2: Solution

## Future Enhancements
- Enhancement 1
- Enhancement 2
```

## Image Support

### HTML Images in Markdown
Your markdown files now support both standard markdown images and HTML `<img>` tags for more control:

```markdown
<!-- Standard markdown -->
![Alt text](image.png)

<!-- HTML for more control -->
<img src="/image.png" alt="Description" width="400" style="border-radius: 8px;" />
```

### Image Paths
- Place images in the `public/` folder
- Reference them as `/image.png` (not `/public/image.png`)
- The system automatically handles path transformations

### Enhanced Features
- **Theme-aware styling**: Images adapt to your cyberpunk/witcher themes
- **Responsive design**: Images scale properly on all devices
- **Error handling**: Graceful fallbacks for missing images
- **Custom styling**: Full HTML and CSS support for advanced layouts

### Example Usage
```html
<img src="/blue_nobg.png" alt="Project Screenshot" 
     width="500" 
     style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);" />
```

## Alternative Approaches

### 1. Dynamic Import (Lazy Loading)
```typescript
const loadMarkdown = async (projectId: string) => {
  const module = await import(`./descriptions/${projectId}.md`);
  return module.default;
};
```

### 2. Public Directory (Runtime Loading)
```typescript
const fetchMarkdown = async (filename: string) => {
  const response = await fetch(`/markdown/${filename}`);
  return response.text();
};
```

### 3. API Integration
```typescript
const loadFromCMS = async (projectId: string) => {
  const response = await fetch(`/api/projects/${projectId}/content`);
  return response.json();
};
```

## Viewing Results

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to any project detail page**:
   - Go to `/projects`
   - Click on any project card
   - The overview section will now display the rich markdown content

3. **Test different projects**:
   - Each project has unique, detailed markdown content
   - The styling adapts to your theme system

## Benefits

- **Rich Content**: Detailed project descriptions with formatting
- **Maintainability**: Easy to update content without touching code
- **Scalability**: Simple to add new projects with detailed descriptions
- **Performance**: Markdown is imported at build time, no runtime fetching
- **Type Safety**: TypeScript ensures markdown imports are handled correctly

## Customization

### Styling
- Modify `src/styles/Markdown.css` to adjust appearance
- The styling is theme-aware and adapts to your color system

### Content
- Edit any `.md` file in `src/data/project-descriptions/`
- Changes will be reflected after restarting the dev server

### Structure
- Add new sections to markdown files as needed
- The `MarkdownContent` component handles all standard markdown features
