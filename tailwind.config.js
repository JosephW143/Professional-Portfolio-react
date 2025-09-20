module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in-left": "fadeInLeft 1s ease-out",
        "fade-in-right": "fadeInRight 1s ease-out",
        "fade-in-down": "fadeInDown 1s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "swipe-right": "swipeRight 300ms ease-out",
        "blink": "blink 1s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        swipeRight: {
          "0%": {
            transform: "translateX(-100%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        },
        blink: {
          "0%, 50%": {
            opacity: "1"
          },
          "51%, 100%": {
            opacity: "0"
          }
        }
      },
    },
  },
  plugins: [],
}