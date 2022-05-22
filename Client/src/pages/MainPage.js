import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  TextField,
  Grid,
} from "@mui/material";
import MuiCard from "../components/MuiCard";
import BloodArt from "../static/images/blood_art.jpg";
import Blood1 from "../static/images/blood_feature4.jpg";
import Blood2 from "../static/images/blood_feature2.jpg";
import Blood3 from "../static/images/blood_feature3.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Hero from "../static/images/hero_dark.jpg";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          zIndex: "-2",
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Stack direction="column" sx={{ alignItems: "center" }}>
            <Typography variant="h1" sx={{ fontWeight: "700", color: "white" }}>
              LifePaL
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "300", color: "white" }}>
              Make Life your best PAL by donating blood
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Info Section */}
      <Box sx={{ width: "100%", paddingBottom: "1rem" }}>
        <Stack
          direction="row"
          sx={{ margin: "6rem" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "error.light",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              About us
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "grey.900",
                fontWeight: "700",
                marginBottom: "2rem",
              }}
            >
              One stop solution for <br /> any kind of blood <br /> requirement
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(0,0,0,0.6)", marginBottom: "2rem" }}
            >
              Unable to get adequate blood supply in case of any emergency?
              <br />
              Don't worry LifePAL got your back
            </Typography>
            <NavLink
              to="/sign_up"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{
                  padding: "1rem 3rem",
                  borderRadius: "50px",
                  backgroundColor: "error.light",
                }}
              >
                Get Started
              </Button>
            </NavLink>
          </Box>
          <img src={BloodArt} alt="blood art" style={{ width: "50%" }} />
        </Stack>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          backgroundColor: "grey.900",
          width: "100%",
          paddingBottom: "6rem",
        }}
      >
        <Stack direction="column" alignItems="center">
          <Typography
            variant="h3"
            sx={{ fontWeight: "700", color: "white", padding: "3rem 0" }}
          >
            FEATURES
          </Typography>
          <Stack direction="row" spacing={10}>
            <MuiCard image={Blood1} />
            <MuiCard image={Blood2} />
            <MuiCard image={Blood3} />
          </Stack>
        </Stack>
      </Box>

      {/* Contact Us */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "error.light",
          padding: "6rem 0 5rem 0",
        }}
      >
        <Paper elevation={6} sx={{ margin: "0 5rem 0 5rem" }}>
          <Grid
            container
            spacing={2}
            sx={{ padding: "3rem" }}
            justifyContent="space-between"
          >
            <Grid item xs={6}>
              <TextField id="Name" label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                }}
              >
                Contact Us
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.8)" }}>
                info@lifepal.com
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                }}
              >
                Phone
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.8)" }}>
                1800-456-6588
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                }}
              >
                Based in
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.8)" }}>
                Patiala, Punjab
              </Typography>
              <Stack direction="row" spacing={2} mt={2}>
                <FacebookRoundedIcon />
                <InstagramIcon />
                <TwitterIcon />
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  padding: "1rem 3rem",
                  //   borderRadius: "50px",
                  backgroundColor: "error.light",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default MainPage;
