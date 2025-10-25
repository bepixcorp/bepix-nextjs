# Public Assets

This folder contains public assets for the BePix website.

## Logo Files

- `logo.svg` - Main logo in SVG format (120x40px)
- `favicon.svg` - Favicon in SVG format (32x32px)

## Logo Design

The placeholder logo features:
- **Text**: "BePix" in Inter font, bold weight
- **Colors**: 
  - Background: Light gray (#F8F7F5)
  - Text: Dark gray (#1F2937)
  - Accent: Orange (#FCB03A)
- **Style**: Clean, modern, professional

## Usage

These are placeholder logos. Replace with your actual logo files when ready.

### Next.js Integration

In Next.js, you can reference these files from the public folder:

```jsx
// In your components
<img src="/logo.svg" alt="BePix Logo" />
```

### Favicon

Add to your `app/layout.tsx`:

```jsx
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```
