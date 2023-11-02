/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '200px',
        'body' : '1fr auto'
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'layout': '1fr 4fr 1fr',
      },
    },
    plugins: [],
  }
}
