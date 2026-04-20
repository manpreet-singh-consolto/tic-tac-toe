# Lime Theme Design Guide

## Color Palette

### Primary Colors
```
Bright Lime:     #BFFF00  ████████
Medium Lime:     #A8FF00  ████████
Light Lime:      #E6FF99  ████████
Pale Lime:       #F5FFCC  ████████
Darker Lime:     #7FCC00  ████████
Accent Lime:     #9FFF00  ████████
Mint:            #90FFCC  ████████
Dark Text:       #1a1a1a  ████████
Win State:       #4caf50  ████████
```

---

## Component Styling Reference

### 1. Game Board Container
```css
background: linear-gradient(135deg, #E6FF99 0%, #D4FFCC 100%);
border-radius: 16px;
border: 2px solid #7FCC00;
border-top: 3px solid #9FFF00;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 
            0 10px 20px rgba(0, 0, 0, 0.1), 
            0 15px 35px rgba(0, 0, 0, 0.08);
padding: 24px;
```

**Hover State**: Enhanced shadow depth
**Active State**: Same styling maintained

### 2. Game Squares
```css
background: linear-gradient(135deg, #FFFFFF 0%, #F5FFCC 100%);
border: 2px solid #7FCC00;
border-radius: 12px;
width: 80px;
height: 80px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 
            0 2px 4px rgba(127, 204, 0, 0.2);
```

**Hover State**: 
- Background changes to `linear-gradient(135deg, #E6FF99 0%, #D4FFCC 100%)`
- Transform: `translateY(-2px) scale(1.03)`
- Border color: `#9FFF00`
- Enhanced shadow

**Focus State**: 
- Outline: `0 0 0 3px rgba(191, 255, 0, 0.4)`
- Maintains shadow layers

**Winning State**:
- Background: `#4caf50`
- Color: `white`
- Animation: pulse (scale 1 → 1.1 → 1)

### 3. Buttons (Restart, Move History)
```css
/* Restart Button */
background: linear-gradient(135deg, #BFFF00 0%, #A8FF00 100%);
border: 2px solid #7FCC00;
border-top: 2px solid #9FFF00;
border-radius: 12px;
padding: 14px 24px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 
            0 10px 20px rgba(0, 0, 0, 0.08);
```

**Hover State**:
- Background: `linear-gradient(135deg, #9FFF00 0%, #8FFF00 100%)`
- Transform: `translateY(-3px)`
- Enhanced shadow: `0 6px 12px rgba(0, 0, 0, 0.12), 0 15px 25px rgba(0, 0, 0, 0.1)`
- Border color: `#9FFF00`

**Active State**:
- Transform: `translateY(-1px)`
- Reduced shadow depth for inward feedback

### 4. Move History Buttons
```css
background: linear-gradient(135deg, #FFFFFF 0%, #F5FFCC 100%);
border: 2px solid #7FCC00;
border-radius: 10px;
padding: 12px 16px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 
            0 4px 8px rgba(127, 204, 0, 0.15);
```

**Hover State**:
- Background: `linear-gradient(135deg, #E6FF99 0%, #D4FFCC 100%)`
- Border color: `#9FFF00`
- Transform: `translateY(-1px)`
- Shadow: `0 4px 8px rgba(0, 0, 0, 0.08), 0 6px 12px rgba(127, 204, 0, 0.2)`

**Current Move State**:
- Background: `linear-gradient(135deg, #BFFF00 0%, #A8FF00 100%)`
- Border top: `2px solid #9FFF00`
- Font weight: bold
- Enhanced shadow

---

## Spacing System

### Padding
- **Large containers**: 24px
- **Medium elements**: 16px
- **Small elements**: 10-12px
- **Mobile tablet**: 20px containers
- **Mobile small**: 16px containers

### Gaps & Margins
- **Main container gap**: 40px (desktop) / 30px (tablet) / 20px (mobile)
- **Status text margin**: 20px bottom
- **Header margin**: 30px bottom
- **List item margin**: 8px bottom

---

## Typography

### Font Family
```css
-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
```

### Font Sizes
- **Main heading**: 3rem (2rem tablet / 1.5rem mobile)
- **Status text**: 1.5rem
- **Section headers**: 1.3rem
- **Button text**: 1rem / 0.9rem
- **Move list**: 0.9rem

### Font Weights
- **Headers**: bold (700)
- **Buttons**: bold (700)
- **Normal text**: 400

---

## Shadow System

### Shadow Depth Levels

**Level 1 - Subtle (Cards, Buttons)**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 
            0 2px 4px rgba(127, 204, 0, 0.2);
```

**Level 2 - Medium (Game Board, Info Panel)**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 
            0 10px 20px rgba(0, 0, 0, 0.1), 
            0 15px 35px rgba(0, 0, 0, 0.08);
```

**Level 3 - Hover State**
```css
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 
            0 15px 25px rgba(0, 0, 0, 0.1);
```

**Level 4 - Active/Pressed**
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 
            0 4px 8px rgba(0, 0, 0, 0.05);
```

---

## Border Radius Values

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Game Board** | 16px | 14px | 12px |
| **Game Info** | 16px | 14px | 12px |
| **Squares** | 12px | 10px | 10px |
| **Buttons** | 12px | 10px | 10px |
| **Info Buttons** | 10px | 8px | 8px |

---

## Animation & Transition

### Standard Transition
```css
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

Duration breakdown:
- **Squares**: 250ms
- **Buttons**: 300ms
- **Containers**: 300ms

### Easing Curve
`cubic-bezier(0.25, 0.46, 0.45, 0.94)` creates a smooth, professional animation with slight deceleration at the end.

### Animation: Pulse (Win State)
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
animation: pulse 0.5s ease-in-out;
```

---

## Transform Effects

### Hover Lift
- **Primary Buttons**: `translateY(-3px)` - strong lift
- **Secondary Buttons**: `translateY(-1px)` - subtle lift
- **Squares**: `translateY(-2px) scale(1.03)` - lift + scale

### Active/Pressed
- **Buttons**: `translateY(-1px)` - reduced lift for tactile feedback

---

## Responsive Breakpoints

### Desktop (> 768px)
- Standard sizing and spacing
- Full layout with side-by-side board and history

### Tablet (≤ 768px)
- Game container stacks vertically
- Reduced padding: 30px → 20px
- Slightly smaller squares: 80px → 70px
- Font sizes scaled down by 10-20%

### Mobile (≤ 480px)
- Full-width containers
- Minimal padding: 16px
- Smaller squares: 60px
- Smaller buttons with touch-friendly padding
- Font sizes reduced further
- Single column layout

---

## Accessibility Features

### Color Contrast
- Dark text `#1a1a1a` on light backgrounds
- Minimum contrast ratio: 4.5:1 (WCAG AA)
- All text readable and accessible

### Focus Indicators
```css
box-shadow: 0 0 0 3px rgba(191, 255, 0, 0.4),
            0 4px 6px rgba(0, 0, 0, 0.08),
            0 2px 4px rgba(127, 204, 0, 0.2);
```
- Visible on all interactive elements
- Works with keyboard navigation

### Touch Targets
- Minimum 44×44px recommended
- Buttons and squares exceed this (60-80px)
- List buttons: 40-50px height (meets standard)

---

## Browser Compatibility

✅ **Modern Browsers**:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile Safari 14+

✅ **CSS Features Used**:
- Flexbox (IE 11+)
- Linear gradients (IE 10+)
- Transforms (IE 10+)
- Box shadows (IE 9+)
- Border radius (IE 9+)
- Cubic-bezier easing (IE 9+)

---

## Performance Notes

- ✅ No heavy animations (only pulse on win, max 0.5s)
- ✅ GPU-accelerated transforms (scale, translateY)
- ✅ Efficient shadow rendering
- ✅ No JavaScript animations needed
- ✅ Smooth 60fps animations

---

## Future Enhancement Ideas

1. **Dark Mode**: Inverse colors with dark background
2. **Theme Customization**: User-selectable color schemes
3. **Advanced Animations**: Confetti on win, shake on invalid move
4. **Sound Effects**: Optional audio feedback
5. **Accessibility**: ARIA labels, screen reader optimization
6. **Performance**: CSS containment, will-change hints
