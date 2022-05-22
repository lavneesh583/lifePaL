import {
  Box,
  Typography,
  Stack,
  Button,
  Paper,
  TextField,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
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
          backgroundColor: "error.dark",
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
      </Box>
    </>
  );
};

export default Profile;
