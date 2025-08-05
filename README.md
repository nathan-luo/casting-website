# Casting Website

The official website for Casting - Building AI Leverage.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── blog/         # Blog section
│   └── page.tsx      # Homepage
├── components/ui/    # Reusable UI components
├── content/posts/    # MDX blog posts
├── lib/              # Utility functions
└── styles/           # Global styles
```

## Adding Blog Posts

Create new blog posts in `src/content/posts/` as MDX files:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
summary: "A brief description of your post"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings

## License

© 2024 Casting
