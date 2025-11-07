# Money Flow 💰

A brutalist-style personal finance tracker built with modern web technologies. Track your income and expenses with a bold, playful interface designed for clarity and ease of use.

## 🎨 About This Project

Money Flow is a minimalist finance tracking app featuring a distinctive "brutalist" design aesthetic:
- **Thick black borders** and **hard shadows** for visual impact
- **Playful rotations** and **vibrant accent colors** (yellow, pink, cyan)
- **Clean, distraction-free** interface focused on core actions
- **Hong Kong Dollar (HK$)** as default currency

## 🏗️ Project Structure

```
src/
├── assets/          # SVG icons and images (centralized exports)
├── components/      # React components
│   ├── dashboard/   # Main dashboard UI components (ActionButton, BalanceCard, etc.)
│   ├── layout/      # Layout wrappers (DashboardLayout)
│   └── ui/          # shadcn-ui base components (Button, Toast, etc.)
├── config/          # ⭐ Configuration constants (SINGLE SOURCE OF TRUTH)
│   ├── app.ts       # App metadata (name, currency, header buttons)
│   ├── dashboard.ts # Dashboard content (action buttons, stats config)
│   ├── theme.ts     # Design tokens (gradients, borders)
│   └── index.ts     # Barrel export for all config
├── hooks/           # Custom React hooks (useBalance, useToast)
├── lib/             # Utility functions (cn for className merging)
├── pages/           # Route components (Index, NotFound)
└── types/           # TypeScript type definitions
```

### 📁 Key Architecture Decisions

1. **Barrel Exports**: Each folder has an `index.ts` that exports all components/config
   - Import from folders, not individual files: `import { Button } from '@/components/ui'`
   - Cleaner imports, easier refactoring, better maintainability

2. **Config-Driven UI**: All constants live in `src/config/`
   - Change app name, currency, colors in one place
   - No magic strings scattered throughout code

3. **Type Safety**: TypeScript interfaces in `src/types/` ensure consistency
   - `ActionButtonConfig` defines button structure
   - `StatCardConfig` defines stat card structure

## 🎯 Key Features

- **Balance Tracking** with clear visual hierarchy
- **Quick Action Buttons** for logging income/expense transactions
- **Monthly Statistics** display (income/expense this month)
- **Brutalist Design System** with consistent styling tokens
- **Fully Responsive** layout (mobile-first approach)
- **Accessible** components using shadcn-ui primitives

## 🎨 Design System

### Colors (HSL Format)
- **Income**: Vibrant cyan `hsl(195 100% 58%)` - represents positive cash flow
- **Expense**: Soft pink `hsl(315 100% 82%)` - represents spending
- **Accents**: 
  - Yellow badge `hsl(48 90% 70%)`
  - Pink badge `hsl(300 50% 85%)`
  - Blue badge `hsl(200 60% 75%)`
  - White badge `hsl(0 0% 100%)`
- **Borders**: Always black `hsl(0 0% 0%)` for maximum contrast

### Typography
- **Headings**: Space Grotesk (bold, modern, geometric)
- **Body**: Inter (clean, readable, professional)

### Shadows & Borders
- **Brutalist offset shadows**: `shadow-[3px_3px_0px_rgba(0,0,0,1)]`
- **Hover lift effect**: `shadow-[5px_5px_0px_rgba(0,0,0,1)]` with translate
- **Border widths**: `border-3` (3px) or `border-4` (4px) - always bold

### Layout Patterns
- Cards use `rounded-3xl` for friendly, approachable feel
- Thick borders + hard shadows = brutalist aesthetic
- Slight rotations (`rotate-1`, `rotate-6`) add playfulness

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Modern browser (Chrome, Firefox, Safari, Edge)

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd money-flow

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```sh
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🛠️ Technologies Used

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **shadcn-ui** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful, consistent icon library
- **React Router** - Client-side routing
- **React Hook Form** - Form state management (ready for expansion)
- **Zod** - Schema validation (ready for expansion)

## 📝 How to Customize

### Change App Name/Currency
Edit `src/config/app.ts`:
```typescript
export const APP_CONFIG = {
  name: 'Your App Name',      // Change app title
  tagline: 'Your tagline',     // Change subtitle
  currency: '€',               // Change currency symbol
}
```

### Modify Dashboard Actions
Edit `src/config/dashboard.ts` to add/remove/modify action buttons:
```typescript
export const ACTION_BUTTONS: ActionButtonConfig[] = [
  {
    id: 'transfer',
    label: 'Transfer',
    icon: transferIcon,
    bgColor: 'bg-badge-blue',
    // ... other config
  },
  // Add more buttons here
];
```

### Update Colors
Modify CSS variables in `src/index.css` (root section):
```css
:root {
  --income: 195 100% 58%;      /* Change income color */
  --expense: 315 100% 82%;     /* Change expense color */
  --badge-yellow: 48 90% 70%;  /* Change badge colors */
}
```

Or update Tailwind config in `tailwind.config.ts` for additional colors.

### Add New Components
1. Create component in appropriate folder (`components/dashboard/`, etc.)
2. Export from barrel file (`index.ts` in that folder)
3. Import using clean path:
   ```typescript
   import { MyComponent } from '@/components/dashboard';
   ```

### Add New Routes
1. Create page component in `src/pages/`
2. Update router in `src/App.tsx`
3. Use `DashboardLayout` wrapper for consistent header

## 🌐 Deployment

### Deploy to Lovable (Easiest)
1. Open [Lovable Project](https://lovable.dev/projects/364cda25-571b-476f-b49e-6c18d2ed4889)
2. Click **Share → Publish**
3. Your app is live! 🎉

### Deploy to Vercel/Netlify
```sh
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting provider
```

### Custom Domain
Navigate to **Project > Settings > Domains** in Lovable to connect your own domain.

[Read more about custom domains](https://docs.lovable.dev/features/custom-domain)

## 📚 Learn More

- [Lovable Documentation](https://docs.lovable.dev/) - AI-powered development platform
- [React Documentation](https://react.dev/) - Official React docs
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn-ui](https://ui.shadcn.com/) - Re-usable component library
- [Vite Guide](https://vitejs.dev/guide/) - Fast build tooling

## 🤝 Contributing

This project was built with [Lovable](https://lovable.dev). Changes can be made through:

1. **Lovable's AI Editor** - Natural language prompts to update code
2. **Direct Code Editing** - Clone repo and edit in your preferred IDE
3. **GitHub Pull Requests** - Collaborate with team members

All changes sync automatically between Lovable and GitHub repository.

---

**Built with ❤️ using [Lovable](https://lovable.dev)**

*Tracking finances has never looked this good.*
