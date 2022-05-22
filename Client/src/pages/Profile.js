import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  TextField,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import RecordTable from "../components/Table";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Request Form */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "error.light",
          padding: "8rem 0 5rem 0",
        }}
      >
        <Stack
          direction="row"
          sx={{ margin: "0 5rem 2rem 5rem" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="white" sx={{ fontWeight: "700" }}>
            My Requests
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "grey.900" }}
            onClick={handleClickOpen}
          >
            + Add
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Request</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Make sure to enter all the details carefully in order to prevent
                any delays.
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    margin="dense"
                    id="aadhar_number"
                    label="Aadhar Number"
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    margin="dense"
                    id="blood_group"
                    label="Blood Group"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    margin="dense"
                    id="blood_units"
                    label="Blood Units"
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    margin="dense"
                    id="certificate"
                    label="Condition Certificate"
                    type="file"
                    fullWidth
                    variant="standard"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="standard-multiline-static"
                    label="Address"
                    type="text"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Send</Button>
            </DialogActions>
          </Dialog>
        </Stack>

        <Paper elevation={6} sx={{ margin: "0 5rem 0 5rem" }}>
          <RecordTable />
        </Paper>
        {/* <Paper elevation={6} sx={{ margin: "0 5rem 0 5rem" }}>
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
        </Paper> */}
      </Box>
    </>
  );
};

export default Profile;
