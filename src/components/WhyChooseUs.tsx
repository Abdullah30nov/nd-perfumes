"use client";

import { Box, Container, Typography } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { colors } from "../theme/theme";

const points = [
  { icon: VerifiedOutlinedIcon, title: "100% Original", desc: "Sourced and blended in-house, never diluted." },
  { icon: ScheduleOutlinedIcon, title: "Long-lasting", desc: "8–10 hours of wear from a single spray." },
  { icon: LocalShippingOutlinedIcon, title: "Fast Delivery", desc: "2–4 days nationwide across Pakistan." },
  { icon: PaymentsOutlinedIcon, title: "Cash on Delivery", desc: "Pay when your order arrives at the door." },
];

export default function WhyChooseUs() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: colors.bottleGreen }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {points.map(({ icon: Icon, title, desc }) => (
            <Box key={title} sx={{ textAlign: { xs: "left", md: "center" } }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  bgcolor: colors.sage,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  mx: { xs: 0, md: "auto" },
                }}
              >
                <Icon sx={{ color: colors.gold }} />
              </Box>
              <Typography sx={{ color: colors.ivory, fontWeight: 700, fontSize: "0.98rem", mb: 0.5 }}>
                {title}
              </Typography>
              <Typography sx={{ color: colors.taupe, fontSize: "0.85rem" }}>{desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
