import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/lab', '/work', '/research', ...projects.map((project) => `/lab/${project.slug}`)]
  return routes.map((path) => ({
    url: path === '' ? site.url : `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
