/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: withOpacity("--bg-ink"),
          raised: withOpacity("--bg-ink-raised"),
          hover: withOpacity("--bg-ink-hover"),
        },
        paper: {
          DEFAULT: withOpacity("--color-paper"),
          dim: withOpacity("--color-paper-dim"),
          faint: withOpacity("--color-paper-faint"),
        },
        line: {
          DEFAULT: withOpacity("--color-line"),
          strong: withOpacity("--color-line-strong"),
        },
        blush: {
          DEFAULT: withOpacity("--color-blush"),
          soft: withOpacity("--color-blush-soft"),
          deep: withOpacity("--color-blush-deep"),
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
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 20px 40px -15px rgba(242, 167, 198, 0.22)",
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
