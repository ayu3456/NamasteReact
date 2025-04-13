/** @type {import('tailwindcss').Config} */
export default {
    plugins: {
      '@tailwindcss/postcss': {},
      // Remove autoprefixer as it's redundant (Parcel handles this)
    },
  }