# BePix Website

A modern Next.js website with homepage, about us page, and services page.

## Features

- **Homepage**: Hero section, features showcase, and call-to-action
- **About Us**: Company story, mission & values, team information
- **Services**: Service offerings, process overview, pricing plans
- **Contact**: Contact form and business information
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── about-us/
│   │   └── page.tsx         # About Us page
│   ├── services/
│   │   └── page.tsx         # Services page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   └── Footer.tsx           # Footer component
├── package.json
├── next.config.js
└── tsconfig.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (via custom CSS)
- **React** - UI library

## Customization

### Colors
The website uses a blue color scheme. You can customize colors in `app/globals.css`:

- Primary: `#4f46e5` (Indigo)
- Secondary: `#667eea` (Blue gradient)
- Accent: `#764ba2` (Purple gradient)

### Content
- Update company information in the About Us page
- Modify services in the Services page
- Change contact information in the Contact page and Footer

### Styling
- All styles are in `app/globals.css`
- Uses CSS Grid and Flexbox for layouts
- Responsive design with mobile-first approach

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting platform

## License

This project is open source and available under the [MIT License](LICENSE).
