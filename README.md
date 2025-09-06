# Portfolio - Astro + Svelte + TypeScript

A modern, responsive portfolio website built with Astro, Svelte, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Astro, Svelte, and TypeScript for optimal performance
- **Responsive Design**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Theme switcher with system preference detection
- **Performance Optimized**: Fast loading times with Astro's static site generation
- **Accessible**: WCAG compliant with proper semantic HTML and keyboard navigation
- **SEO Friendly**: Optimized meta tags and structured data
- **Component-Based**: Reusable Svelte components with TypeScript

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Components**: [Svelte](https://svelte.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager**: [npm](https://www.npmjs.com/)

## 📦 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── social-image.png
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Reusable Svelte components
│   │   ├── Button/
│   │   ├── Heading/
│   │   ├── Text/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ProjectCard/
│   │   └── sections/    # Page sections
│   ├── constants/       # App constants and configuration
│   ├── content/         # Content data (projects, articles)
│   ├── hooks/           # Custom Svelte stores and utilities
│   ├── layouts/         # Astro layout components
│   ├── pages/           # Astro pages (routes)
│   ├── stores/          # Svelte stores
│   ├── styles/          # Global styles and CSS
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio-svelte
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Content

1. **Update personal information**: Edit `src/config.json`
2. **Add projects**: Modify `src/content/projects.ts`
3. **Update assets**: Replace images in `src/assets/`

### Styling

- **Theme colors**: Modify CSS custom properties in `src/styles/global.css`
- **Tailwind config**: Update `tailwind.config.mjs` for custom design tokens
- **Component styles**: Edit individual Svelte components

### Components

All components are located in `src/components/` and are built with:
- **Svelte**: For reactive UI components
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

### Site Configuration

Update `src/config.json` with your personal information:

```json
{
  "name": "Your Name",
  "role": "Your Role",
  "disciplines": ["Skill 1", "Skill 2", "Skill 3"],
  "url": "https://yoursite.com",
  "github": "yourusername",
  // ... other social links
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 696px and below
- Tablet: 1040px and below
- Laptop: 1680px and below
- Desktop: 2080px and below

## 🎯 Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript with Astro's partial hydration

## 🔍 SEO

- Semantic HTML structure
- Open Graph and Twitter Card meta tags
- Structured data markup
- Sitemap generation
- Optimized images with proper alt tags

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📬 Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: contact@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Website**: [yoursite.com](https://yoursite.com)

---

Built with ❤️ using Astro, Svelte, and TypeScript
