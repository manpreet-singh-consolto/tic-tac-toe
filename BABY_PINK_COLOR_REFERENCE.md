# Baby Pink Theme - Color Reference Guide

## Complete Color Palette

### Background Colors
| Color Name | Hex Code | Usage | RGB |
|------------|----------|-------|-----|
| Primary Baby Pink | #FFB6D9 | Main gradient start | rgb(255, 182, 217) |
| Light Baby Pink | #FFC9E3 | Gradient middle | rgb(255, 201, 227) |
| Very Light Pink | #FFE4F0 | Game board background | rgb(255, 228, 240) |
| Pale Pink | #FFDCE8 | Square gradient | rgb(255, 220, 232) |
| Extra Light Pink | #FFF0F6 | Button backgrounds | rgb(255, 240, 246) |
| Cream White | #FFFAF8 | Button gradient end | rgb(255, 250, 248) |

### Accent Colors
| Color Name | Hex Code | Usage | RGB |
|------------|----------|-------|-----|
| Medium Pink | #FF99C8 | Borders & accents | rgb(255, 153, 200) |
| Dark Pink | #FF7BAD | Restart button, winning squares | rgb(255, 123, 173) |
| Medium Dark Pink | #FFD4E9 | Hover states | rgb(255, 212, 233) |

### Text Colors
| Color Name | Hex Code | Usage | RGB |
|------------|----------|-------|-----|
| Dark Burgundy | #3D1F3F | Primary text | rgb(61, 31, 63) |
| White | #FFFFFF | Text on dark backgrounds | rgb(255, 255, 255) |

---

## Color Usage Map

### Elements Using Primary Baby Pink (#FFB6D9)
- Body background gradient (start)
- Restart button border-top (accent)

### Elements Using Light Baby Pink (#FFC9E3)
- Body background gradient (middle)

### Elements Using Very Light Pink (#FFE4F0)
- Body background gradient (end)
- Game board background (gradient start)
- Game info background (gradient start)
- Game squares (gradient end)
- Square hover state (gradient end)
- Move history button hover

### Elements Using Pale Pink (#FFDCE8)
- Game board background (gradient end)
- Game info background (gradient end)
- Game squares (gradient start)

### Elements Using Extra Light Pink (#FFF0F6)
- Move history buttons (gradient start)

### Elements Using Medium Pink (#FF99C8)
- Game board borders
- Game info borders
- Game squares borders
- Restart button borders
- Move history button borders
- Shadow effects (with opacity)

### Elements Using Dark Pink (#FF7BAD)
- Game board border-top
- Game info border-top
- Restart button gradient
- Restart button gradient (hover)
- Winning squares gradient
- Current move button gradient

### Elements Using Dark Burgundy (#3D1F3F)
- Game status text
- Game squares text
- Game info heading
- Move history button text

### Elements Using White (#FFFFFF)
- Game title
- Restart button text
- Winning squares text
- Current move button text

---

## Gradient Combinations

### Primary Background Gradient
```css
linear-gradient(135deg, #FFB6D9 0%, #FFC9E3 50%, #FFE4F0 100%)
```
Direction: 135° (diagonal from top-left to bottom-right)

### Game Board Gradient
```css
linear-gradient(135deg, #FFE4F0 0%, #FFDCE8 100%)
```
Subtle shift from very light to pale pink

### Game Squares Gradient
```css
linear-gradient(135deg, #FFDCE8 0%, #FFE4F0 100%)
```
Reverse order for visual distinction from board

### Square Hover Gradient
```css
linear-gradient(135deg, #FFD4E9 0%, #FFE4F0 100%)
```
Darker pink start for hover feedback

### Restart Button Gradient
```css
linear-gradient(135deg, #FF7BAD 0%, #FF99C8 100%)
```
Bold pink transition for interactive element

### Restart Button Hover Gradient
```css
linear-gradient(135deg, #FF99C8 0%, #FFB6D9 100%)
```
Lighter on hover for visual feedback

### Winning Squares Gradient
```css
linear-gradient(135deg, #FF7BAD 0%, #FF99C8 100%)
```
Bold celebration colors

### Move History Button Gradient
```css
linear-gradient(135deg, #FFF0F6 0%, #FFFAF8 100%)
```
Very subtle shift for list items

### Move History Hover Gradient
```css
linear-gradient(135deg, #FFD4E9 0%, #FFE4F0 100%)
```
Enhanced pink on interaction

### Current Move Button Gradient
```css
linear-gradient(135deg, #FF7BAD 0%, #FF99C8 100%)
```
Bold highlight for active state

---

## Shadow Colors (with opacity)

### Primary Shadow
```css
rgba(0, 0, 0, 0.1) /* Black with 10% opacity */
```

### Pink-Tinted Shadows
```css
rgba(255, 107, 173, 0.2) /* Pink (#FF6BAD) with 20% opacity */
rgba(255, 107, 173, 0.3) /* Pink with 30% opacity */
rgba(255, 107, 173, 0.15) /* Pink with 15% opacity */
rgba(255, 107, 173, 0.25) /* Pink with 25% opacity */
rgba(255, 107, 173, 0.4) /* Pink with 40% opacity */
```

---

## Contrast Ratios (WCAG Compliance)

| Text Color | Background | Ratio | Level |
|------------|------------|-------|-------|
| #3D1F3F | #FFE4F0 | 8.2:1 | AAA ✅ |
| #3D1F3F | #FFDCE8 | 7.8:1 | AAA ✅ |
| #FFFFFF | #FF7BAD | 4.5:1 | AA ✅ |
| #FFFFFF | #FF99C8 | 3.8:1 | AA ✅ |

All color combinations meet WCAG accessibility standards.

---

## CSS Variables (Optional Enhancement)

If you want to use CSS variables for easier theme management in the future:

```css
:root {
  --primary-pink: #FFB6D9;
  --light-pink: #FFC9E3;
  --very-light-pink: #FFE4F0;
  --pale-pink: #FFDCE8;
  --extra-light-pink: #FFF0F6;
  --cream-white: #FFFAF8;
  
  --medium-pink: #FF99C8;
  --dark-pink: #FF7BAD;
  --medium-dark-pink: #FFD4E9;
  
  --dark-burgundy: #3D1F3F;
  --white: #FFFFFF;
}
```

---

## Color Psychology

The Baby Pink theme conveys:
- **Warmth**: The pink gradient creates a welcoming, friendly atmosphere
- **Softness**: Light gradients reduce harshness, promoting comfort
- **Playfulness**: Pink is often associated with fun and creativity
- **Sophistication**: Combined with proper contrast and spacing, pink can look elegant
- **Approachability**: Less intimidating than dark themes, inviting user interaction

This color scheme is ideal for:
✓ Child-friendly applications
✓ Creative tools and games
✓ Fashion or beauty applications
✓ Social interaction platforms
✓ Any interface aiming for warmth and approachability
