# shadcn/ui primitives (Wellness migration)

Minimal set of shadcn components used by the migrated Spruce Ridge Wellness
marketing components. Kept here, separate from `src/components/ui/` (Base UI),
to avoid name collisions.

Currently contains:
- `button.tsx` (depends on `@radix-ui/react-slot`)
- `separator.tsx` (depends on `@radix-ui/react-separator`)

Both import `cn` from `@/lib/utils` which resolves to ShipFree's existing
`src/lib/utils/css.ts` (byte-identical implementation).

If a future wellness component needs more shadcn primitives, copy them from
`/Users/edipidizi/Documents/wellness-website/components/ui/` and add the
matching `@radix-ui/*` peer to `package.json`.
