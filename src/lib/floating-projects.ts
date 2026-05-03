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

// All available project images from public/images/projects folder
export const floatingProjects: FloatingProject[] = [ 
  { 
    src: "/images/projects/viewvoice_float.webp", 
    alt: "ViewVoice Dashboard Interface",      
    rotate: 4, 
    delay: 0.5 
  },
  { 
    src: "/images/projects/agency/ViewVoice.webp", 
    alt: "ViewVoice AI Invoice Analytics",  
    rotate: -4,   
    delay: 0 
  },
  { 
    src: "/images/projects/agency/communityhub.webp", 
    alt: "NeighborlyHub Community Platform", 
    rotate: 3,    
    delay: 0.1 
  },
  { 
    src: "/images/projects/labelflow_feature.webp", 
    alt: "LabelFlow Digital Agency",         
    rotate: -3,   
    delay: 0.2 
  },
  { 
    src: "/images/projects/agency/sports.webp", 
    alt: "Sport Dynamic Website",         
    rotate: 3,   
    delay: 0.3 
  },
  { 
    src: "/images/projects/agency/trafalgar.webp", 
    alt: "Trafalgar Healthcare Platform",         
    rotate: -4,   
    delay: 0.4 
  },
  { 
    src: "/images/projects/agency/portfolio_V1.webp", 
    alt: "Portfolio Website V1",         
    rotate: 2,   
    delay: 0.7 
  },
  { 
    src: "/images/projects/neighborlyhubdark_float.webp", 
    alt: "NeighborlyHub Dark Mode",         
    rotate: -3,   
    delay: 0.6 
  },
];

/**
 * Get random rotation for new project cards
 */
export function getRandomRotation(): number {
  return Math.random() * 3 - 1; // Random between -2 and 2 degrees
}

/**
 * Calculate delay based on index
 */
export function calculateDelay(index: number): number {
  return 0.5 + (index * 0.1);
}
