import { ChevronRightRounded } from "@mui/icons-material";
import { Typography, Box, Grid, Card } from "@mui/material";
import React from "react";

export default function Landing() {
  return (
    <Box>
      {/* Banner Page */}
      <Box sx={{ px: { md: 20, xs: 2 }, py: { md: 20, xs: 6 } }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 800, fontSize: { md: "100px", xs: "70px" } }}
        >
          AFKANERD 4.0 - We Code For The People
        </Typography>
        <Typography
          variant="h5"
          sx={{ mt: 7, opacity: "70%", pr: { md: 25, xs: 0 } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper, vel convallis ante tincidunt.
        </Typography>
      </Box>
      {/*  */}
      {/* About Section */}
      <Box sx={{ px: { md: 20, xs: 2 }, pb: { md: 15, xs: 6 }, pt: 4 }}>
        <Typography variant="h6" sx={{ color: "green" }}>
          afkanerd@afkanerd4.0: ~$ ./afkanerd
        </Typography>
        <Box
          component="img"
          src="lovelace.jpg"
          alt="Ada Lovelace"
          sx={{ width: "80%", mt: 7 }}
        />{" "}
        <br />
        Ada Lovelace (1815–1852)
        <Typography
          variant="h5"
          sx={{ mt: 7, opacity: "70%", pr: { md: 25, xs: 0 } }}
        >
          Donec vel sodales risus, eu commodo lectus. Fusce at ipsum consequat,
          vehicula dui id, ultricies neque. Ut in lorem vitae purus ultricies
          fermentum. Mauris tempus, dolor eget posuere tempus, mauris lacus
          vestibulum ipsum, vel accumsan elit sem id odio. Nulla non turpis eget
          risus facilisis gravida. Integer facilisis placerat quam id pharetra.
        </Typography>
      </Box>
      {/*  */}
      {/* About Section */}
      <Box sx={{ px: { md: 20, xs: 2 }, pb: { md: 15, xs: 6 }, pt: 4 }}>
        <Typography variant="h6" sx={{ color: "green", py: 3 }}>
          afkanerd@afkanerd4.0: ~$ ./projects
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item md={6} xs={12} sm={6}>
            <Card sx={{ p: 4 }}>
              <Box display="flex">
                <Box
                  component="img"
                  src="swob.png"
                  sx={{ width: { md: "9%", xs: "20%" } }}
                />
                <Typography variant="h6" sx={{ mt: 2, ml: 1 }}>
                  SMSWithoutBorders
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ py: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus eu nunc ullamcorper, vel convallis ante
                tincidunt. Vivamus lacinia, lacus nec tristique bibendum, velit
                libero consequat purus, ut finibus ex lectus eget nisi. Nulla
                facilisi.
              </Typography>
              <Typography variant="body1">
                Learn More <ChevronRightRounded />
              </Typography>
            </Card>
          </Grid>
          {/*  */}
          <Grid item md={6} xs={12} sm={6}>
            <Card sx={{ p: 4 }}>
              <Box display="flex">
                <Typography variant="h6" sx={{ mt: 2, ml: 1 }}>
                  Open API
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ py: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus eu nunc ullamcorper, vel convallis ante
                tincidunt. Vivamus lacinia, lacus nec tristique bibendum, velit
                libero consequat purus, ut finibus ex lectus eget nisi. Nulla
                facilisi.
              </Typography>
              <Typography variant="body1">
                Learn More <ChevronRightRounded />
              </Typography>
            </Card>
          </Grid>
          {/*  */}
          <Grid item md={6} xs={12} sm={6}>
            <Card sx={{ p: 4 }}>
              <Box display="flex">
                <Box component="img" src="chpris.png" sx={{ width: "20%" }} />
                <Typography variant="h6" sx={{ mt: 2, ml: 2 }}>
                  CHPRIS
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ py: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus eu nunc ullamcorper, vel convallis ante
                tincidunt. Vivamus lacinia, lacus nec tristique bibendum, velit
                libero consequat purus, ut finibus ex lectus eget nisi. Nulla
                facilisi.
              </Typography>
              <Typography variant="body1">
                Learn More <ChevronRightRounded />
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/* Blogs Section */}
      <Box sx={{ px: { md: 20, xs: 2 }, pb: { md: 15, xs: 6 }, pt: 4 }}>
        <Typography variant="h6" sx={{ color: "green", py: 3 }}>
          afkanerd@afkanerd4.0: ~$ ./blogs/latest
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item md={4} xs={12} sm={6}>
            <Box component="img" src="blog.jpg" sx={{ width: "100%" }} />
          </Grid>
          <Grid item md={4} xs={12} sm={6} my="auto">
            <Typography variant="h6" sx={{ mb: 2, textTransform: "uppercase" }}>
              The New Cool SMS App
            </Typography>
            <Typography>
              Donec vel sodales risus, eu commodo lectus. Fusce at ipsum
              consequat, vehicula dui id, ultricies neque. Ut in lorem vitae
              purus ultricies fermentum. Mauris tempus, dolor eget posuere
              tempus, mauris lacus vestibulum ipsum.
            </Typography>
            <Typography sx={{ mt: 2 }} variant="body1">
              Learn More <ChevronRightRounded />
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/* Events */}
      <Box sx={{ px: { md: 20, xs: 2 }, pb: { md: 15, xs: 6 }, pt: 4 }}>
        <Typography variant="h6" sx={{ color: "green", py: 3 }}>
          afkanerd@afkanerd4.0: ~$ ./location
        </Typography>
        <Typography variant="h6" sx={{ mb: 2, textTransform: "uppercase" }}>
          Looking for us?
        </Typography>
        <Box>
          <div style={{ width: "100%" }}>
            <iframe
              title="map"
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sonac%20street,%20Bamenda,%20Cameroon+(Afkanerd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </Box>
      </Box>
      {/*  */}
    </Box>
  );
}
