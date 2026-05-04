import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://krenilpatel.dev";
  
  const projectPages = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { 
      url: base, 
      lastModified: new Date(), 
      changeFrequency: "weekly", 
      priority: 1 
    },
    { 
      url: `${base}/projects`, 
      lastModified: new Date(), 
      changeFrequency: "weekly", 
      priority: 0.9 
    },
    { 
      url: `${base}/#about`, 
      lastModified: new Date(), 
      changeFrequency: "monthly", 
      priority: 0.7 
    },
    { 
      url: `${base}/#services`, 
      lastModified: new Date(), 
      changeFrequency: "monthly", 
      priority: 0.7 
    },
    { 
      url: `${base}/#experience`, 
      lastModified: new Date(), 
      changeFrequency: "monthly", 
      priority: 0.6 
    },
    { 
      url: `${base}/#contact`, 
      lastModified: new Date(), 
      changeFrequency: "monthly", 
      priority: 0.6 
    },
    ...projectPages,
  ];
}
