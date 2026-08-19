"use client";

import { createTheme } from "@mui/material/styles";

// ---- Brand tokens ----
// Deep bottle-green apothecary palette — avoids the generic cream/terracotta look.
export const colors = {
  bottleGreen: "#14211A", // primary background
  sage: "#23352A", // card / surface
  ivory: "#F4EFE4", // light text on dark, light section bg
  gold: "#C9A24B", // accent / CTA
  oxblood: "#8B3A3A", // secondary accent (used sparingly)
  taupe: "#9C9184", // muted text
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.gold, contrastText: colors.bottleGreen },
    secondary: { main: colors.oxblood, contrastText: colors.ivory },
    background: { default: colors.bottleGreen, paper: colors.sage },
    text: { primary: colors.ivory, secondary: colors.taupe },
  },
  typography: {
    // Fonts are loaded via next/font/google in app/layout.tsx and exposed
    // as CSS variables --font-display / --font-body. See layout.tsx.
    fontFamily: "var(--font-body), Manrope, sans-serif",
    h1: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2.4rem, 5vw + 1rem, 4.5rem)",
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.9rem, 3vw + 1rem, 3rem)",
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: "var(--font-display), Fraunces, serif",
      fontWeight: 500,
      fontSize: "clamp(1.4rem, 2vw + 1rem, 2rem)",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: colors.taupe,
    },
    button: {
      fontFamily: "var(--font-body), Manrope, sans-serif",
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    overline: {
      fontFamily: "var(--font-body), Manrope, sans-serif",
      letterSpacing: "0.18em",
      fontSize: "0.72rem",
      fontWeight: 700,
    },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, padding: "12px 28px" },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: { paddingLeft: 20, paddingRight: 20 },
      },
    },
  },
});

export default theme;
