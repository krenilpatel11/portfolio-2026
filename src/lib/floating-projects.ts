/**
 * Floating Projects Configuration
 * 
 * This file manages the floating project images shown in the hero section.
 * 
 * 📝 TO ADD A NEW FLOATING PROJECT:
 * ============================================
 * 
 * Step 1: Add your image to /public/images/projects/
 *   - Name it with suffix "_float.webp" (e.g., mynewproject_float.webp)
 *   - Recommended size: 800x600px, WebP format, < 300KB
 * 
 * Step 2: Add a new entry below in the floatingProjects array:
 *   {
 *     src: "/images/projects/mynewproject_float.webp",
 *     alt: "My New Project Description",
 *     rotate: -1.5,  // Random between -2 to 2 degrees
 *     delay: 1.0     // Increment by 0.1 from previous card
 *   }
 * 
 * Step 3: Save and refresh your browser!
 * 
 * 📖 For detailed instructions, see FLOATING_PROJECTS.md
 * ============================================
 */

export interface FloatingProject {
  src: string;
  alt: string;
  rotate: number;
  delay: number;
}

// Hardcoded project list - to make it truly dynamic, we'd need a server-side script
// or use Next.js dynamic imports, but for simplicity we'll keep it manual with clear instructions
export const floatingProjects: FloatingProject[] = [
  { 
    src: "/images/projects/viewvoice_float.webp", 
    alt: "ViewVoice AI Invoice Analytics",  
    rotate: -2,   
    delay: 0.5 
  },
  { 
    src: "/images/projects/neighborlyhub_float.webp", 
    alt: "SecurityGate Community Platform", 
    rotate: 1,    
    delay: 0.6 
  },
  { 
    src: "/images/projects/protfolio1.webp", 
    alt: "Training Management System",      
    rotate: -1.5, 
    delay: 0.7 
  },

  { 
    src: "/images/projects/labelflow_float.webp", 
    alt: "LabelFlow SaaS Platform",         
    rotate: -1,   
    delay: 0.9 
  },
];

/**
 * Get random rotation for new project cards
 */
export function getRandomRotation(): number {
  return Math.random() * 4 - 2; // Random between -2 and 2 degrees
}

/**
 * Calculate delay based on index
 */
export function calculateDelay(index: number): number {
  return 0.5 + (index * 0.1);
}
