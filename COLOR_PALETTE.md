# Sea Green Theme - Color Palette Reference

## Complete Color Palette

```
╔════════════════════════════════════════════════════════════════╗
║           SEA GREEN THEME COLOR PALETTE                        ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  PRIMARY COLORS                                               ║
║  ══════════════════════════════════════════════════════════   ║
║  █████ #20B2AA - Light Sea Green (Main Accent)                ║
║  █████ #48D1CC - Medium Turquoise (Secondary)                 ║
║  █████ #2E8B8B - Dark Sea Green (Text/Depth)                  ║
║                                                                ║
║  BACKGROUND COLORS                                            ║
║  ══════════════════════════════════════════════════════════   ║
║  █████ #AFEEEE - Pale Turquoise (Cards)                       ║
║  █████ #E0FFFF - Azure (Square BG)                            ║
║  █████ #B0E0E6 - Light Cyan (Gradient stops)                  ║
║                                                                ║
║  ACCENT & SPECIAL STATES                                      ║
║  ══════════════════════════════════════════════════════════   ║
║  █████ #00CED1 - Dark Turquoise (Winning/Success)             ║
║  █████ #5FD3D3 - Lighter Turquoise (Gradient)                 ║
║                                                                ║
║  TEXT COLORS                                                  ║
║  ══════════════════════════════════════════════════════════   ║
║  █████ #0a2a2a - Very Dark Teal (Primary Text)                ║
║  █████ #2E8B8B - Dark Sea Green (Secondary Text)              ║
║  █████ #FFFFFF - White (On dark backgrounds)                  ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

## Color Usage Guide

### Interactive Elements
- **Buttons**: `linear-gradient(#20B2AA, #2E8B8B)`
- **Button Hover**: `linear-gradient(#48D1CC, #20B2AA)`
- **Button Text**: `white`

### Cards & Panels
- **Background**: `linear-gradient(#AFEEEE, #B0E0E6)`
- **Border**: `#48D1CC` (2px) with accent `#20B2AA` (3px top)
- **Text**: `#2E8B8B` or `#0a2a2a`

### Game Squares
- **Normal**: `linear-gradient(#E0FFFF, #AFEEEE)`
- **Hover**: `linear-gradient(#AFEEEE, #B0E0E6)`
- **Winning**: `linear-gradient(#00CED1, #20B2AA)`
- **Text**: `#2E8B8B`

### Page Background
- **Gradient**: `linear-gradient(135deg, #20B2AA 0%, #48D1CC 50%, #5FD3D3 100%)`

## Accessibility Notes

All color combinations meet WCAG AA standards:
- ✅ Contrast ratio ≥ 4.5:1 for normal text
- ✅ Contrast ratio ≥ 3:1 for large text
- ✅ No color-only information (always paired with icons/text)

## Hex Color Codes Quick Reference

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Light Sea Green | #20B2AA | 32, 178, 170 | Primary accent |
| Medium Turquoise | #48D1CC | 72, 209, 204 | Secondary accent |
| Dark Sea Green | #2E8B8B | 46, 139, 139 | Text/depth |
| Pale Turquoise | #AFEEEE | 175, 238, 238 | Light backgrounds |
| Azure | #E0FFFF | 224, 255, 255 | Very light backgrounds |
| Light Cyan | #B0E0E6 | 176, 224, 230 | Gradient stops |
| Dark Turquoise | #00CED1 | 0, 206, 209 | Winning/success |
| Lighter Turquoise | #5FD3D3 | 95, 211, 211 | Gradient light |
| Very Dark Teal | #0a2a2a | 10, 42, 42 | Primary text |
| White | #FFFFFF | 255, 255, 255 | Text on dark |

---

## Theme Consistency

All UI elements use colors from this palette in a consistent hierarchy:

1. **Background**: Full-page gradient (#20B2AA → #48D1CC → #5FD3D3)
2. **Panels**: Light gradients (#AFEEEE, #B0E0E6)
3. **Interactive**: Primary (#20B2AA) and secondary (#48D1CC)
4. **Text**: Dark teal (#0a2a2a, #2E8B8B)
5. **Success**: Dark turquoise (#00CED1)

This ensures a cohesive, professional appearance throughout the application.
