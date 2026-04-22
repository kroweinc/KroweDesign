# Sidebar

Source: `src/app/components/ui/sidebar.tsx` (shadcn/ui-style primitives).

## Exports

- `Sidebar`
- `SidebarContent`
- `SidebarFooter`
- `SidebarGroup`
- `SidebarGroupAction`
- `SidebarGroupContent`
- `SidebarGroupLabel`
- `SidebarHeader`
- `SidebarInput`
- `SidebarInset`
- `SidebarMenu`
- `SidebarMenuAction`
- `SidebarMenuBadge`
- `SidebarMenuButton`
- `SidebarMenuItem`
- `SidebarMenuSkeleton`
- `SidebarMenuSub`
- `SidebarMenuSubButton`
- `SidebarMenuSubItem`
- `SidebarProvider`
- `SidebarRail`
- `SidebarSeparator`
- `SidebarTrigger`
- `useSidebar`

## Install / import

Use path aliases as configured in this repo (for example `@/app/components/ui/sidebar`).

```tsx
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup } from '@/app/components/ui/sidebar';
```

## Usage

Compose Radix-style parts: trigger + content (or root + children) as in the [shadcn documentation](https://ui.shadcn.com/docs/components/sidebar) — adjust slug if the upstream name differs.

Styling uses Tailwind utility classes and `cn()` from `@/app/components/ui/utils`.

Large surface API: wrap the app shell with `SidebarProvider`, render `Sidebar` + `SidebarInset` for main content. Use `useSidebar()` for open/collapsed state.


