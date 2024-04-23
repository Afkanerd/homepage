import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ChevronRightRounded } from "@mui/icons-material";

export default function PageNotFound() {
  return (
    <Box sx={{ px: { md: 17, xs: 2 }, py: { md: 15, xs: 6 } }}>
      <Grid container columnSpacing={4} rowSpacing={4}>
        <Grid item md={6} xs={12} sm={6}>
          <Box component="img" src="confused.PNG" sx={{ width: "100%" }} />
        </Grid>
        <Grid item md={6} xs={12} sm={6} my="auto">
          <Typography variant="h3" sx={{ mb: 2, textTransform: "uppercase" }}>
            We do not have this page in our folders
          </Typography>
          <Typography variant="h6">How did you even get here?!</Typography>
          <Typography sx={{ mt: 2 }} variant="body1" component="a" href="/">
            Go back home <ChevronRightRounded />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
