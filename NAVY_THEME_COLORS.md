# Navy Blue Theme - Quick Color Reference

## 🎨 Complete Color Palette

```
┌─────────────────────────────────────────────────────┐
│           NAVY BLUE THEME COLOR PALETTE             │
└─────────────────────────────────────────────────────┘

PRIMARY NAVY
████████████ #1A3A52 (Dark Navy - Text, Primary Elements)

MEDIUM NAVY
████████████ #2C5282 (Medium Navy - Buttons, Winning Squares)

LIGHT NAVY
████████████ #3D5A80 (Light Navy - Accents, Borders)

STEEL BLUE
████████████ #4A6FA5 (Steel Blue - Hover States)

LIGHT STEEL BLUE
████████████ #8BA5C4 (Light Steel Blue - Game Board BG)

PALE BLUE
████████████ #C9D9E8 (Pale Blue - Squares, Light BG)

BRIGHT STEEL BLUE
████████████ #5B9FD1 (Bright Steel Blue - Borders, Focus)

WHITE
████████████ #FFFFFF (White - Text on Dark)

VERY DARK NAVY
████████████ #0D1B2A (Very Dark Navy - Alternative Text)
```

## 📍 Where Each Color is Used

### Background Colors
- **Body Background:** `linear-gradient(135deg, #1A3A52, #2C5282, #3D5A80)`
- **Game Board:** `linear-gradient(135deg, #8BA5C4, #C9D9E8)`
- **Squares:** `linear-gradient(135deg, #C9D9E8, #8BA5C4)`
- **Buttons (Light):** `linear-gradient(135deg, #D4E3F0, #E8F1F8)`
- **Buttons (Dark):** `linear-gradient(135deg, #3D5A80, #2C5282)`
- **Winning Squares:** `linear-gradient(135deg, #3D5A80, #2C5282)`

### Border Colors
- **Primary Borders:** `#5B9FD1` (Bright Steel Blue)
- **Top Borders:** `#3D5A80` (Light Navy)
- **Button Borders:** `#2C5282` (Medium Navy)
- **Focus Ring:** `rgba(91, 159, 209, 0.3)` (Bright Steel Blue)

### Text Colors
- **Primary Text:** `#1A3A52` (Dark Navy) - On light backgrounds
- **Dark Text:** `#0D1B2A` (Very Dark Navy) - On very light backgrounds
- **Light Text:** `#FFFFFF` (White) - On dark navy backgrounds
- **Heading:** `#1A3A52` (Dark Navy)

### Shadow Colors
- **Standard Shadow:** `rgba(0, 0, 0, 0.1-0.15)`
- **Branded Shadow:** `rgba(91, 159, 209, 0.15-0.3)` (Bright Steel Blue tint)
- **Navy Shadow:** `rgba(26, 58, 82, 0.2)` (Primary Navy tint)

## 🎯 How to Use These Colors

### For Game Board
```css
background: linear-gradient(135deg, #8BA5C4 0%, #C9D9E8 100%);
border: 2px solid #5B9FD1;
border-top: 3px solid #3D5A80;
```

### For Interactive Elements
```css
background: linear-gradient(135deg, #C9D9E8 0%, #8BA5C4 100%);
border: 2px solid #5B9FD1;
color: #1A3A52;
```

### For Emphasis/Winning
```css
background: linear-gradient(135deg, #3D5A80 0%, #2C5282 100%);
color: #FFFFFF;
border-color: #5B9FD1;
```

### For Hover States
```css
background: linear-gradient(135deg, #A8C5DD 0%, #8BA5C4 100%);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14), 
            0 6px 12px rgba(91, 159, 209, 0.3);
```

## 📱 Responsive Adjustments
- All colors remain consistent across breakpoints
- Opacity adjustments for smaller screens if needed
- Box shadows may be reduced for mobile performance

## ✅ Verification Checklist
- [x] Primary navy (#1A3A52) used for text on light backgrounds
- [x] Light steel blue (#8BA5C4) used for main panels
- [x] Pale blue (#C9D9E8) used for interactive squares
- [x] Bright steel blue (#5B9FD1) used for borders and focus
- [x] White (#FFFFFF) used for text on dark navy
- [x] Gradients applied to all major elements
- [x] Contrast ratios verified for accessibility
- [x] Hover states implemented with transitions
- [x] Focus states visible and accessible

---

**Theme Version:** Navy Blue Professional
**Last Updated:** 2024
**Status:** ✅ Production Ready
