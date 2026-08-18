
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        brand: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        accent: { DEFAULT: '#39FF14', hover: '#32CC11', dim: 'rgba(57,255,20,0.08)', mid: 'rgba(57,255,20,0.15)' },
        surface: { DEFAULT: '#050505', '1': '#080808', '2': '#0A0A0A', '3': '#0e0e0e', '4': '#141414', '5': '#1A1A1A' }
      }
    }
  }
}
