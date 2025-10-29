import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        income: {
          DEFAULT: "hsl(var(--income))",
          foreground: "hsl(var(--income-foreground))",
        },
        expense: {
          DEFAULT: "hsl(var(--expense))",
          foreground: "hsl(var(--expense-foreground))",
        },
        badge: {
          yellow: "hsl(var(--badge-yellow))",
          pink: "hsl(var(--badge-pink))",
          blue: "hsl(var(--badge-blue))",
          green: "hsl(var(--badge-green))",
        },
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "subtle-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "ease-in-out",
          },
        },
        "drift-right": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100vw)",
          },
        },
        "drift-bounce": {
          "0%": {
            transform: "translateX(-100%) translateY(0) rotate(0deg)",
          },
          "25%": {
            transform: "translateX(-25%) translateY(-20px) rotate(3deg)",
          },
          "50%": {
            transform: "translateX(50%) translateY(0) rotate(-2deg)",
          },
          "75%": {
            transform: "translateX(125%) translateY(-15px) rotate(2deg)",
          },
          "100%": {
            transform: "translateX(200%) translateY(0) rotate(0deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-bounce": "subtle-bounce 2s ease-in-out infinite",
        "drift-right": "drift-right 25s linear infinite",
        "drift-bounce": "drift-bounce 20s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
