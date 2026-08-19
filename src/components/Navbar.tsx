"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Badge,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { colors } from "../theme/theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(20,33,26,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid rgba(244,239,228,0.08)`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.5 }, justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            component={Link}
            href="/"
            sx={{
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              color: colors.ivory,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Nuzup Parfum
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: colors.ivory,
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  letterSpacing: "0.03em",
                  position: "relative",
                  "&:hover": { color: colors.gold },
                }}
              >
                {link.label}
              </Typography>
            ))}
            <IconButton component={Link} href="/cart" aria-label="Cart" sx={{ color: colors.ivory }}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile controls */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <IconButton component={Link} href="/cart" aria-label="Cart" sx={{ color: colors.ivory }}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ color: colors.ivory }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { bgcolor: colors.bottleGreen, width: "78vw", maxWidth: 320 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: colors.ivory }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component={Link}
              href={link.href}
              onClick={() => setOpen(false)}
              sx={{ py: 1.5 }}
            >
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.3rem",
                  color: colors.ivory,
                }}
                primary={link.label}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 3, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            href="/shop"
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
