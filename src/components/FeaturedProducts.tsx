"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { colors } from "../theme/theme";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.bestseller);

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.bottleGreen }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
          spacing={2}
          sx={{ mb: { xs: 4, md: 5 } }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: colors.gold, display: "block", mb: 1 }}>
              Bestsellers
            </Typography>
            <Typography variant="h2" sx={{ color: colors.ivory }}>
              Most worn this season
            </Typography>
          </Box>
          <Button
            variant="text"
            href="/shop"
            endIcon={<ArrowOutwardIcon fontSize="small" />}
            sx={{ color: colors.ivory, "&:hover": { color: colors.gold } }}
          >
            View all
          </Button>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
