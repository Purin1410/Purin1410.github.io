import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://purin1410.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: { locales: ['en', 'vi'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  vite: { server: { watch: { usePolling: true } } },
});
