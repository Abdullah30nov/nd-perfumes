"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { colors } from "../theme/theme";

export default function BrandStoryTeaser() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: colors.sage }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: { xs: 260, md: 380 },
              borderRadius: 2,
              overflow: "hidden",
              order: { xs: 1, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/images/brand-story.jpg"
              alt="Nuzup Parfum blending process"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
          <Box>
            <Typography variant="overline" sx={{ color: colors.gold, display: "block", mb: 1.5 }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ color: colors.ivory, mb: 2.5 }}>
              Blended in small batches, right here in Karachi.
            </Typography>
            <Typography sx={{ color: colors.taupe, mb: 3, maxWidth: 480, fontSize: "0.98rem" }}>
              We started with a simple idea — fragrance shouldn't need an
              import tag to feel premium. Every bottle is mixed, tested, and
              bottled locally, built to hold up in Karachi's heat and last
              through a full day.
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowOutwardIcon fontSize="small" />}
              href="/about"
              sx={{
                color: colors.ivory,
                borderColor: "rgba(244,239,228,0.3)",
                "&:hover": { borderColor: colors.gold, color: colors.gold },
              }}
            >
              Read Our Story
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
