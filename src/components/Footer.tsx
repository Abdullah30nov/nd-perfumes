"use client";

import Link from "next/link";
import { Box, Container, Typography, Stack, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { colors } from "../theme/theme";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: colors.sage, pt: { xs: 6, md: 8 }, pb: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1.4fr 1fr 1fr" },
            gap: 4,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontSize: "1.4rem",
                color: colors.ivory,
                mb: 1.5,
              }}
            >
              Nuzup Parfum
            </Typography>
            <Typography sx={{ color: colors.taupe, fontSize: "0.9rem", maxWidth: 320 }}>
              Layered fragrances crafted in small batches. Karachi-made,
              worn everywhere.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: colors.ivory, border: "1px solid rgba(244,239,228,0.15)" }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="WhatsApp"
                href="https://wa.me/923000000000"
                target="_blank"
                sx={{ color: colors.ivory, border: "1px solid rgba(244,239,228,0.15)" }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: colors.gold, display: "block", mb: 1.5 }}>
              Shop
            </Typography>
            <Stack spacing={1}>
              {["All Fragrances", "Men", "Women", "Unisex"].map((l) => (
                <Typography
                  key={l}
                  component={Link}
                  href="/shop"
                  sx={{ color: colors.taupe, fontSize: "0.9rem", textDecoration: "none", "&:hover": { color: colors.ivory } }}
                >
                  {l}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: colors.gold, display: "block", mb: 1.5 }}>
              Support
            </Typography>
            <Stack spacing={1}>
              <Typography sx={{ color: colors.taupe, fontSize: "0.9rem" }}>
                +92 300 0000000
              </Typography>
              <Typography sx={{ color: colors.taupe, fontSize: "0.9rem" }}>
                Karachi, Pakistan
              </Typography>
              <Typography
                component={Link}
                href="/contact"
                sx={{ color: colors.taupe, fontSize: "0.9rem", textDecoration: "none", "&:hover": { color: colors.ivory } }}
              >
                Contact Us
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(244,239,228,0.08)", mb: 3 }} />
        <Typography sx={{ color: colors.taupe, fontSize: "0.78rem", textAlign: "center" }}>
          © {new Date().getFullYear()} Nuzup Parfum. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
