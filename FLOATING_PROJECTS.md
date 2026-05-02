# Adding Floating Project Images

This guide explains how to add new floating project showcase images to the hero section of the portfolio.

## Quick Start

To add a new floating project image:

1. **Prepare your image:**
   - Format: WebP (recommended for best performance)
   - Dimensions: ~800x600px (4:3 aspect ratio works best)
   - File size: Keep under 300KB for optimal loading
   - Name it with suffix `_float.webp` (e.g., `mynewproject_float.webp`)

2. **Add the image:**
   - Place your image in `/public/images/projects/`
   - Example: `/public/images/projects/mynewproject_float.webp`

3. **Register the image:**
   - Open `/src/lib/floating-projects.ts`
   - Add a new entry to the `floatingProjects` array:

```typescript
{
  src: "/images/projects/mynewproject_float.webp",
  alt: "My New Project Description",
  rotate: -1.5,  // Random rotation between -2 and 2 degrees
  delay: 1.0     // Stagger animation (increment by 0.1)
}
```

4. **Test your changes:**
   - Save the file
   - The development server will hot-reload
   - Check the hero section to see your new floating project

## Image Specifications

### Recommended Dimensions
- **Width:** 800px - 1200px
- **Height:** 600px - 900px
- **Aspect Ratio:** 4:3 or 3:2
- **Format:** WebP (for optimal performance)

### Compression Tips
- Use online tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Target file size: 150KB - 300KB
- Quality: 80-90% (WebP)

### Design Guidelines
- Use clean, high-quality screenshots or mockups
- Ensure text is readable even at smaller sizes
- Avoid cluttered interfaces
- Consider dark/light mode compatibility

## Configuration Options

### Rotation (`rotate`)
Controls the tilt angle of the floating card:
- Range: `-2` to `2` degrees
- Negative values tilt left
- Positive values tilt right
- `0` for no rotation

### Delay (`delay`)
Controls when the animation starts:
- Start at `0.5` for the first card
- Increment by `0.1` for each subsequent card
- Example: 0.5, 0.6, 0.7, 0.8, 0.9, 1.0

### Alt Text (`alt`)
Provide a descriptive alternative text for accessibility:
- Be concise but descriptive
- Include project name and type
- Example: "ViewVoice AI Invoice Analytics Platform"

## Layout

The floating projects are arranged in two rows:
- **Row 1 (Top):** First 3 cards
- **Row 2 (Bottom):** Remaining cards

The system automatically handles positioning and responsiveness.

## Current Floating Projects

1. **ViewVoice** - AI Invoice Analytics
2. **NeighborlyHub** - Community Platform
3. **Portfolio 1** - Training Management
4. **Portfolio 2** - Sport Management
5. **LabelFlow** - Digital Agency

## Troubleshooting

### Image not showing
- Verify the file path is correct
- Check that the image file exists in `/public/images/projects/`
- Ensure the file extension matches (`.webp`)
- Clear browser cache and hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Image appears broken
- Check file permissions (should be readable)
- Verify image file is not corrupted
- Try re-exporting the image

### Layout issues
- Ensure image dimensions are reasonable (not too large or small)
- Check that width/height attributes are set in the component
- Verify CSS classes are applied correctly

## Advanced Customization

### Changing Layout
To modify the floating card layout, edit `/src/components/sections/Hero.tsx`:
- Adjust `positions` array for custom placement
- Modify width classes for different sizes
- Change container height if needed

### Animation Timing
To adjust animation behavior:
- Modify `duration` in motion props
- Change `ease` function for different effects
- Adjust `delay` values for sequential animations

### Adding More Cards
The layout supports 5 cards by default. To add more:
1. Add your images to `floating-projects.ts`
2. Update the layout logic in `Hero.tsx`
3. Consider adjusting positions for more cards

## Example: Adding a New Project

```typescript
// In /src/lib/floating-projects.ts

{
  src: "/images/projects/myawesomeapp_float.webp",
  alt: "MyAwesomeApp - Task Management Platform",
  rotate: 1.5,
  delay: 1.0
}
```

## File Structure

```
krenil-portfolio-2026/
├── public/
│   └── images/
│       └── projects/
│           ├── viewvoice_float.webp
│           ├── neighborlyhub_float.webp
│           ├── protfolio1.webp
│           ├── protfolio2.webp
│           ├── labelflow_float.webp
│           └── mynewproject_float.webp  ← Add your image here
├── src/
│   ├── lib/
│   │   └── floating-projects.ts  ← Register your image here
│   └── components/
│       └── sections/
│           └── Hero.tsx  ← Layout configuration
```

## Future Enhancements

Planned features for automatic discovery:
- Server-side image scanning (Next.js API route)
- Automatic alt text generation using AI
- Dynamic positioning algorithm
- Admin panel for drag-and-drop management

---

**Need help?** Check the [main README](../README.md) or create an issue on GitHub.
