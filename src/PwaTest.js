import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function PwaTest() {
  const [user, setUser] = React.useState({
    name: "",
    panCardNumber: "",
    number: "",
    email: "",
  });

  let Name, value;
  const handleSubmit = (event) => {
    Name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [Name]: value });
    // console.log(user, "user data");
  };

  const postData = async (e) => {
    const { name, panCardNumber, number, email } = user;
    e.preventDefault();

    const resp = await fetch(
      "https://registeration-form-pwa-default-rtdb.asia-southeast1.firebasedatabase.app/registerationFormData.json",
      {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify({
          name,
          panCardNumber,
          number,
          email,
        }),
      }
    );
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration form
          </Typography>
          <form method="POST">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleSubmit}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="number"
                type="number"
                label="Mobile number"
                // type="password"
                value={user.number}
                onChange={handleSubmit}
                autoComplete="current-password"
              />

              <Grid container justifyContent="flex-start">
                <Grid spacing="8">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="panCardNumber"
                    onChange={handleSubmit}
                    type="panCardNumber"
                    label="PAN number"
                    value={user.panCardNumber}
                    // type="password"
                    autoComplete="current-password"
                  />
                  <p style={{ fontSize: "10px", marginTop: "8px" }}>
                  
                    Your PAN is required to check credit details and will help
                    us in giving you an accurate offer
                  </p>
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email id"
                onChange={handleSubmit}
                value={user.email}
                type="email"
                // id="password"
                autoComplete="current-password"
              />
              <Grid container justifyContent="flex-start">
                <Grid>
                <Typography style={{ fontSize: "12px" }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                />
                 
                    Consent to override any DND subscription, Bussiness
                    Executive to contact and fetch CIBIL score to process loan
                    request
                  </Typography>
               
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-start">
                <Grid spacing="8">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={postData}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
