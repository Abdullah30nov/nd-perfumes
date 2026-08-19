"use client";

import Link from "next/link";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { Product } from "../data/products";
import { colors } from "../theme/theme";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Box
      component={Link}
      href={`/product/${product.id}`}
      sx={{
        textDecoration: "none",
        display: "block",
        bgcolor: colors.sage,
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: { md: "translateY(-4px)" },
          boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
        },
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "4 / 5", bgcolor: "#1b2a22" }}>
        <Box
          component="img"
          src={product.images[0]}
          alt={product.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {product.bestseller && (
          <Chip
            label="Bestseller"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              bgcolor: colors.gold,
              color: colors.bottleGreen,
              fontWeight: 700,
              fontSize: "0.68rem",
            }}
          />
        )}
        <IconButton
          size="small"
          aria-label="Save to wishlist"
          onClick={(e) => e.preventDefault()}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(20,33,26,0.55)",
            color: colors.ivory,
            "&:hover": { bgcolor: "rgba(20,33,26,0.8)", color: colors.gold },
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ p: { xs: 1.5, md: 2 } }}>
        <Typography
          sx={{
            fontFamily: "var(--font-display), serif",
            color: colors.ivory,
            fontSize: { xs: "1rem", md: "1.1rem" },
            mb: 0.5,
          }}
        >
          {product.name}
        </Typography>
        <Typography sx={{ color: colors.taupe, fontSize: "0.8rem", mb: 1 }}>
          {product.notes.top}
        </Typography>
        <Typography sx={{ color: colors.gold, fontWeight: 700, fontSize: "0.95rem" }}>
          Rs. {product.price.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}
