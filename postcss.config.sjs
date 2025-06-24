// postcss.config.js (v4 ESM)
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
}
