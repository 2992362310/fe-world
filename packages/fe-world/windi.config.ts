import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  preflight: false,
  alias: {
    btstack: 'flex items-center justify-between',
    hstack: 'flex items-center',
    vstack: 'flex flex-col'
  },
  plugins: [formsPlugin]
})
