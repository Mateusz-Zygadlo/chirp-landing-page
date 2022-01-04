module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F9F6F1',
        'blue': '#1DA1F2',
        'cyan': '#D7F5F5',
      },
      keyframes: {
        smoothMove: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        smoothMove: 'smoothMove 2s linear'
      }
    },
  },
  plugins: [],
}
