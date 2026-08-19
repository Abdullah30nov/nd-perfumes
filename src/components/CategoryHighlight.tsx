"use client";

import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../theme/theme";

const categories = [
  { label: "For Him", slug: "men", img: "/images/category-men.jpg" },
  { label: "For Her", slug: "women", img: "/images/category-women.jpg" },
  { label: "Unisex", slug: "unisex", img: "/images/category-unisex.jpg" },
];

export default function CategoryHighlight() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: colors.sage }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 2, md: 3 },
          }}
        >
          {categories.map((c) => (
            <Box
              key={c.slug}
              component={Link}
              href={`/shop?category=${c.slug}`}
              sx={{
                position: "relative",
                height: { xs: 220, md: 320 },
                borderRadius: 2,
                overflow: "hidden",
                display: "block",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={c.img}
                alt={c.label}
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(0deg, rgba(20,33,26,0.75) 0%, rgba(20,33,26,0.1) 55%)",
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  left: 20,
                  bottom: 18,
                  color: colors.ivory,
                }}
              >
                {c.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
