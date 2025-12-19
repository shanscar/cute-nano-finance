# User Profile Dropdown Component

A reusable, configurable user profile dropdown component with brutalist design style.

## Dependencies

This component requires the following dependencies:

```bash
# shadcn/ui components
npx shadcn@latest add dropdown-menu button

# Other dependencies (usually already installed)
npm install lucide-react react-router-dom
```

Also ensure you have the `cn` utility function in `@/lib/utils`.

## Installation

Copy the entire `user-profile` folder to your project's `src/components/` directory.

## Usage

### Basic Usage

```tsx
import { UserProfileDropdown } from '@/components/user-profile';

const menuItems = [
  { id: 'profile', label: '👤 我的資料', href: '/profile' },
  { id: 'documents', label: '📂 我的文件', href: '/documents' },
  { id: 'logout', label: '🚪 登出', variant: 'destructive' },
];

<UserProfileDropdown menuItems={menuItems} />
```

### With Custom Styling

```tsx
<UserProfileDropdown
  menuItems={menuItems}
  bgColor="bg-blue-500/50"
  rotation="rotate-2"
  size="md"
  rounded="xl"
  align="start"
  menuWidth="w-56"
/>
```

### With Avatar Image

```tsx
<UserProfileDropdown
  menuItems={menuItems}
  avatarUrl="https://example.com/avatar.jpg"
/>
```

### With Custom Click Handler

```tsx
<UserProfileDropdown
  menuItems={menuItems}
  onItemClick={(item) => {
    console.log('Clicked:', item.id);
    // Custom analytics, etc.
  }}
/>
```

### Using ProfileIconButton Standalone

```tsx
import { ProfileIconButton } from '@/components/user-profile';

<ProfileIconButton
  bgColor="bg-badge-pink/50"
  rotation="rotate-1"
  size="lg"
  onClick={() => console.log('clicked')}
/>
```

## API Reference

### UserProfileDropdownProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `ProfileMenuItem[]` | required | Array of menu items |
| `onItemClick` | `(item: ProfileMenuItem) => void` | - | Callback when item is clicked |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Dropdown alignment |
| `menuWidth` | `string` | `'w-48'` | Tailwind width class |
| `bgColor` | `string` | `'bg-badge-pink/50'` | Background color class |
| `rotation` | `string` | `'rotate-1'` | Rotation class |
| `size` | `'sm' \| 'md' \| 'lg'` | `'lg'` | Button size |
| `rounded` | `'xl' \| 'full'` | `'full'` | Border radius |
| `avatarUrl` | `string` | - | Avatar image URL |
| `icon` | `LucideIcon` | `User` | Custom icon component |

### ProfileMenuItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `label` | `string` | Display text |
| `icon` | `string` | Emoji or icon string (optional) |
| `href` | `string` | Navigation path (optional) |
| `onClick` | `() => void` | Custom click handler (optional) |
| `variant` | `'default' \| 'destructive'` | Style variant (optional) |

## Customization

### Design Tokens

The component uses these design tokens that should be defined in your Tailwind config:

- `bg-badge-pink` - Default background color
- `bg-badge-yellow` - Alternative background color
- `text-destructive` - Destructive action color

### Modifying Defaults

Edit `config.ts` to change default values:

```ts
export const DEFAULT_PROFILE_STYLE = {
  bgColor: 'bg-your-color',
  rotation: 'rotate-2',
  size: 'md' as ButtonSize,
  rounded: 'xl' as const,
};
```

## License

MIT
