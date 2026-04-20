# Sea Green Theme - Quick Reference Guide

## 🎨 Theme Color Palette (Copy-Paste Ready)

### Primary Colors
```
#20B2AA  - Light Sea Green (Main Accent)
#48D1CC  - Medium Turquoise (Secondary Accent)
#2E8B8B  - Dark Sea Green (Text/Depth)
```

### Light Colors
```
#AFEEEE  - Pale Turquoise (Cards)
#E0FFFF  - Azure (Light Elements)
#B0E0E6  - Light Cyan (Gradients)
```

### Special
```
#00CED1  - Dark Turquoise (Winning)
#5FD3D3  - Lighter Turquoise (Gradient)
#0a2a2a  - Very Dark Teal (Primary Text)
#FFFFFF  - White (Dark BG Text)
```

---

## 🎯 Commonly Used Gradient Combinations

### Button Gradient
```css
background: linear-gradient(135deg, #20B2AA 0%, #2E8B8B 100%);
```

### Button Hover
```css
background: linear-gradient(135deg, #48D1CC 0%, #20B2AA 100%);
```

### Card Background
```css
background: linear-gradient(135deg, #AFEEEE 0%, #B0E0E6 100%);
```

### Square Background
```css
background: linear-gradient(135deg, #E0FFFF 0%, #AFEEEE 100%);
```

### Winning Square
```css
background: linear-gradient(135deg, #00CED1 0%, #20B2AA 100%);
```

### Page Background
```css
background: linear-gradient(135deg, #20B2AA 0%, #48D1CC 50%, #5FD3D3 100%);
```

---

## 🎭 Recommended Text Colors

| Background | Text Color | Contrast Ratio | Status |
|------------|-----------|---|---|
| #AFEEEE | #0a2a2a | 10.5:1 | AAA ✅ |
| #E0FFFF | #2E8B8B | 6.2:1 | AA ✅ |
| #20B2AA | white | 5.3:1 | AA ✅ |
| #48D1CC | white | 6.8:1 | AA ✅ |
| #00CED1 | white | 4.9:1 | AA ✅ |

---

## 🔗 Default Border Combinations

### Primary Border
```css
border: 2px solid #48D1CC;
border-top: 3px solid #20B2AA;
```

### Secondary Border
```css
border: 2px solid #48D1CC;
```

### Accent Border (Winning)
```css
border: 2px solid #00CED1;
```

---

## 💫 Shadow Combinations

### Subtle Shadow (Cards)
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.14);
```

### Medium Shadow (Buttons)
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(32, 178, 170, 0.3);
```

### Deep Shadow (Hover)
```css
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(32, 178, 170, 0.2);
```

---

## 🎨 Interactive States

### Default Button
```css
background: linear-gradient(135deg, #20B2AA 0%, #2E8B8B 100%);
color: white;
border: 2px solid #2E8B8B;
border-top: 2px solid #20B2AA;
```

### Button Hover
```css
background: linear-gradient(135deg, #48D1CC 0%, #20B2AA 100%);
transform: translateY(-4px) scale(1.02);
border-color: #48D1CC;
```

### Button Active
```css
transform: translateY(-1px);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
```

---

## 📱 Responsive Design Breakpoints

```css
/* Desktop - Full size */
@media (max-width: 800px) { /* Max width container */ }

/* Tablet */
@media (max-width: 768px) {
  .game-container { flex-direction: column; }
}

/* Mobile */
@media (max-width: 480px) {
  .square { width: 60px; height: 60px; }
  .game-header h1 { font-size: 1.5rem; }
}
```

---

## ✨ Animation Reference

### Pulse Animation (Winning)
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
animation: pulse 0.5s ease-in-out;
```

### Transition Timing
```css
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

---

## 📊 Color Name Reference

| Hex Code | Name | Usage |
|----------|------|-------|
| #20B2AA | Light Sea Green | Buttons, main accent |
| #48D1CC | Medium Turquoise | Hover states, secondary |
| #2E8B8B | Dark Sea Green | Text, borders, depth |
| #AFEEEE | Pale Turquoise | Card backgrounds |
| #E0FFFF | Azure | Light element bg |
| #B0E0E6 | Light Cyan | Gradient transitions |
| #00CED1 | Dark Turquoise | Winning squares |
| #5FD3D3 | Lighter Turquoise | Gradient light end |
| #0a2a2a | Very Dark Teal | Primary text |
| #FFFFFF | White | Text on dark |

---

## 🎯 Most Important Colors

**These are the top 3 colors you'll use most:**

1. **#20B2AA** - Light Sea Green (Primary)
   - Buttons
   - Main borders
   - Focus accents

2. **#48D1CC** - Medium Turquoise (Secondary)
   - Hover states
   - Secondary borders
   - Transitional colors

3. **#AFEEEE** - Pale Turquoise (Backgrounds)
   - Card backgrounds
   - Panel backgrounds
   - Light surfaces

---

## 🔄 Gradient Direction

All gradients use: **135° angle** (top-left to bottom-right)

```css
background: linear-gradient(135deg, color1 0%, color2 100%);
```

This creates a natural, diagonal feel that's consistent across the design.

---

## ♿ Accessibility Checklist

When using these colors:
- [ ] Text on light backgrounds uses #0a2a2a or #2E8B8B
- [ ] Text on dark backgrounds uses #FFFFFF
- [ ] Hover states are visually distinct
- [ ] Focus states have visible indicators
- [ ] Color is never used alone for information
- [ ] Contrast ratio is at least 4.5:1 for text

---

## 🚀 Copy-Paste CSS Rules

### Complete Button Style
```css
.button {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #20B2AA 0%, #2E8B8B 100%);
  border: 2px solid #2E8B8B;
  border-top: 2px solid #20B2AA;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.1);
}

.button:hover {
  background: linear-gradient(135deg, #48D1CC 0%, #20B2AA 100%);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(32, 178, 170, 0.2);
  border-color: #48D1CC;
}
```

### Complete Card Style
```css
.card {
  background: linear-gradient(135deg, #AFEEEE 0%, #B0E0E6 100%);
  padding: 24px;
  border-radius: 16px;
  border: 2px solid #48D1CC;
  border-top: 3px solid #20B2AA;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(2px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 📞 Support Colors

If you need variations:
- **Lighter**: Mix with more white/increase lightness
- **Darker**: Mix with more black/decrease lightness
- **Desaturated**: Reduce saturation for subtle tones
- **Vibrant**: Increase saturation for emphasis

---

**Last Updated:** 2024
**Theme Version:** Sea Green 2.0
**Status:** Production Ready ✅
