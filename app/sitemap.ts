import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/works`, lastModified: new Date() },
    { url: `${base}/en/works`, lastModified: new Date() },
  ];
}
