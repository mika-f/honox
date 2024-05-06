import type { Plugin } from 'vite'

type Options = {
  entry?: string
  jsxImportSource?: string
  assetsDir?: string
}

export const defaultOptions: Options = {
  entry: '/app/client.ts',
  jsxImportSource: 'hono/jsx/dom',
  assetsDir: 'static',
}

function client(options?: Options): Plugin {
  return {
    name: 'honox-vite-client',
    config: () => {
      return {
        build: {
          rollupOptions: {
            input: [options?.entry ?? defaultOptions.entry],
          },
          assetsDir: options?.assetsDir ?? defaultOptions.assetsDir,
          manifest: true,
        },
        esbuild: {
          jsxImportSource: options?.jsxImportSource ?? defaultOptions.jsxImportSource,
        },
      }
    },
  }
}

export default client
