import { UserConfigExport, defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import macrosPlugin from 'vite-plugin-babel-macros'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

import path from 'path'
import fs from 'fs'

export default defineConfig(({ command, mode }) => {
  const config: UserConfigExport = {
    resolve: {
      alias: {
        '@frontend': path.resolve(__dirname, './app/packs/frontend'),
      },
    },
    plugins: [
      RubyPlugin(),
      macrosPlugin(),
      react(),
      legacy({
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
  }

  return config
})
