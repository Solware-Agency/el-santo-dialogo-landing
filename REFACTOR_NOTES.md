# Refactor Implementation Notes

## New Shared Components & Usage

### `Section` Component
**Location**: `src/components/ui/section.tsx`  
**Purpose**: Standardized section wrapper with consistent padding and container classes  
**Used in**: LegacyBio, ExhibitModules, CuratorialText, VenueDates, Impact, Team, Contact

```tsx
<Section id="legado" background="muted">
  {/* content */}
</Section>
```

### `SectionHeader` Component  
**Location**: `src/components/ui/section-header.tsx`  
**Purpose**: Reusable title + subtitle pattern with consistent typography  
**Used in**: All major sections (7 components)

```tsx
<SectionHeader 
  title="Section Title"
  subtitle="Optional description text"
/>
```

### `IconBadge` Component
**Location**: `src/components/ui/icon-badge.tsx`  
**Purpose**: Consistent icon containers with gradient backgrounds  
**Used in**: LegacyBio (4 instances), VenueDates (2 instances)

```tsx
<IconBadge icon="BookOpen" variant="primary" />
```

### `ContactLink` Component
**Location**: `src/components/ui/contact-link.tsx`  
**Purpose**: Unified contact method display with icons and descriptions  
**Used in**: Contact component (3 instances)

```tsx
<ContactLink
  href="tel:+1234567890"
  icon="Phone"
  title="Teléfono"
  description="Llamar ahora"
  variant="primary"
/>
```

## Utility Modules

### `src/constants.ts`
**Centralized configuration**:
- `Z_INDEX`: Header, donation tab, modal z-index values
- `ARIA_LABELS`: Consistent accessibility labels
- `ANIMATION_DELAYS`: Standardized fade-in timing
- `BREAKPOINT_CLASSES`: Reusable Tailwind class combinations
- `CONTACT_CONFIG`: Form limits and default values

### `src/lib/icons.ts`
**Icon management**:
- Single import point for all Lucide icons
- Type-safe icon name mapping
- `getIcon()` helper function

### `src/lib/validation.ts`
**Form validation**:
- Zod schema for contact form
- TypeScript types derived from schema
- Centralized validation logic

## Refactoring Patterns Applied

### 1. Extract Constants
**Before**: Magic numbers and strings scattered throughout components  
**After**: Centralized in `constants.ts` with semantic names

### 2. Component Composition
**Before**: Repeated JSX patterns in every section  
**After**: Composable `Section` + `SectionHeader` pattern

### 3. Type Safety
**Before**: `any` types and loose TypeScript configuration  
**After**: Strict mode enabled, all components properly typed

### 4. Icon Centralization
**Before**: Individual icon imports in each component  
**After**: Single icon registry with type-safe access

### 5. Validation Extraction
**Before**: Inline Zod schema and validation in Contact component  
**After**: Separate validation module with reusable schema

## Bundle Impact
- **Reduced**: Eliminated duplicate imports and repeated code
- **Maintained**: No new dependencies added
- **Improved**: Better tree-shaking through centralized imports

## Accessibility Preservation
- All ARIA labels moved to constants but values unchanged
- Semantic HTML structure maintained
- Focus management and keyboard navigation preserved
- Screen reader compatibility intact

## Performance Considerations
- Lazy loading preserved for below-fold images
- No additional client-side hydration introduced
- Component memoization opportunities maintained
- Bundle splitting unaffected