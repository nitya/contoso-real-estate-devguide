import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

  // Added Configuration for 
  // Deployment to GitHub Pages
  site: 'https://nitya.github.io',
  base: '/contoso-real-estate-devguide/',

  integrations: [
    starlight({
      title: 'Dev Guide',
      social: {
        github: 'https://github.com/30DaysOf/astro-starlight-ghpages',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
