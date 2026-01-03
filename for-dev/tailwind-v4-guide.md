# Tailwind CSS v4 Configuration Guide

## Overview
This project uses **Tailwind CSS v4**, which introduces a simplified configuration approach. Unlike v3, which relied heavily on `tailwind.config.js`, v4 prioritizes standard CSS syntax.

## The Issue
Legacy v3 directives (`@tailwind base`, etc.) and `tailwind.config.js` theme extensions may not work as expected or can conflict with the v4 engine, specifically when using `@tailwindcss/vite`.

## The Solution: Native CSS Configuration

To define custom theme values (colors, fonts, etc.) in v4, use the `@theme` directive directly in your CSS entry point.

### 1. Update `src/index.css`

Replace standard directives with the import and theme block:

```css
@import "tailwindcss";

@theme {
  /* Define your brand colors as CSS variables */
  --color-brand-primary: #071B3A;
  --color-brand-secondary: #0B2A52;
  --color-brand-accent: #FFC107;
  
  --color-text-primary: #FFFFFF;
  --color-text-muted: #D1D5DB;
}
```

### 2. Usage in Components

You can now use these colors as utility classes just like before:

```jsx
<div className="bg-brand-primary text-text-primary">
  Content
</div>
```

## Summary of Changes
1.  **Removed** `tailwind.config.js` dependency for colors.
2.  **Updated** `src/index.css` to use `@import "tailwindcss";`.
3.  **Added** `@theme` block in `src/index.css` to define custom colors.
