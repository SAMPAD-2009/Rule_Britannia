import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rule Britannia: Historical Archive',
    short_name: 'Britannia',
    description: 'Explore the legacy of the British Empire through interactive 3D exhibits and maps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#15141F',
    theme_color: '#B88A2E',
    orientation: 'portrait',
    icons: [
      {
        src: 'https://placehold.co/192x192/B88A2E/FFF?text=B',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://placehold.co/512x512/B88A2E/FFF?text=Britannia',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
