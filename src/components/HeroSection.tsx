"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { colors } from "../theme/theme";

const noteTags = [
  { label: "Top", note: "Bergamot" },
  { label: "Heart", note: "Jasmine" },
  { label: "Base", note: "Amber" },
];

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 80% 20%, rgba(201,162,75,0.14), transparent 55%), ${colors.bottleGreen}`,
        pt: { xs: 6, md: 4 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: { xs: 5, md: 4 },
            minHeight: { md: "72vh" },
          }}
        >
          {/* Text column */}
          <Box>
            <Typography
              variant="overline"
              sx={{ color: colors.gold, display: "block", mb: 2 }}
            >
              Signature Fragrance House
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: colors.ivory, mb: 3, maxWidth: 560 }}
            >
              Scent, built in{" "}
              <Box component="span" sx={{ fontStyle: "italic", color: colors.gold }}>
                layers
              </Box>
              .
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 460, mb: 4, fontSize: { xs: "0.95rem", md: "1.05rem" } }}
            >
              Every bottle opens in three acts — a first impression, a heart
              that lasts, and a base that stays on skin long after you've
              left the room.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 5 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowOutwardIcon />}
                href="/shop"
              >
                Shop the Collection
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/about"
                sx={{
                  color: colors.ivory,
                  borderColor: "rgba(244,239,228,0.3)",
                  "&:hover": { borderColor: colors.gold, color: colors.gold },
                }}
              >
                Our Story
              </Button>
            </Stack>

            {/* Signature note strip */}
            <Stack direction="row" spacing={{ xs: 2, sm: 4 }} flexWrap="wrap">
              {noteTags.map((n) => (
                <Box key={n.label}>
                  <Typography
                    variant="overline"
                    sx={{ color: colors.taupe, display: "block" }}
                  >
                    {n.label}
                  </Typography>
                  <Typography sx={{ color: colors.ivory, fontSize: "0.95rem" }}>
                    {n.note}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Visual column */}
          <Box
            sx={{
              position: "relative",
              height: { xs: 320, sm: 420, md: "100%" },
              minHeight: { md: 440 },
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: colors.sage,
            }}
          >
            <Box
              component="img"
              src="/images/hero-bottle.jpg"
              alt="Nuzup Parfum signature bottle"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(20,33,26,0.55) 0%, transparent 45%)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
