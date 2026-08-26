/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#120f13",
          raised: "#1a151d",
          hover: "#221a25",
        },
        paper: {
          DEFAULT: "#efe9ed",
          dim: "#a89aa5",
          faint: "#776b75",
        },
        line: {
          DEFAULT: "#2c2430",
          strong: "#46394d",
        },
        blush: {
          DEFAULT: "#f2a7c6",
          soft: "#f7c9db",
          deep: "#d97ba6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        glow: "0 0 24px rgba(242, 167, 198, 0.35)",
        "glow-lg": "0 8px 40px rgba(242, 167, 198, 0.35)",
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.85) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.1) rotate(15deg)" },
        },
      },
      animation: {
        wave: "wave 2.4s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        "floaty-slow": "floaty 7s ease-in-out infinite",
        twinkle: "twinkle 3.5s ease-in-out infinite",
        "twinkle-slow": "twinkle 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
