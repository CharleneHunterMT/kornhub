import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SpaIcon from "@material-ui/icons/Spa";
// import calculateJourney from "./helpers/calculator";
import mockCalculateJourney from "./calculators/mockCalculator";
import Table from "./components/Table/index";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        www.kornhub.co.uk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(12, 6),
    display: "flex",
    flexDirection: "column",
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [corn, setCorn] = useState(0);
  const [geese, setGeese] = useState(0);
  const [cornError, setCornError] = React.useState(false);
  const [geeseError, setGeeseError] = React.useState(false);
  const [costRows, setCostRows] = React.useState([]);
  const [routeRows, setRouteRows] = React.useState([]);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SpaIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kornhub
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Number of geese"
              type="number"
              id="geese"
              autoFocus
              defaultValue={geese}
              onChange={(e) => {
                setGeese(e.target.value);
              }}
              helperText="Please enter a valid number of geese"
              error={geeseError}
              InputProps={{ inputProps: { min: 0 } }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="corn"
              label="Number of corn bags"
              type="number"
              id="corn"
              defaultValue={corn}
              onChange={(e) => {
                setCorn(e.target.value);
              }}
              helperText="Please enter a valid number of corn bags"
              error={cornError}
              InputProps={{ inputProps: { min: 0 } }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                const intCorn = parseInt(corn);
                const intGeese = parseInt(geese);
                isNaN(intCorn) ? setCornError(true) : setCornError(false);
                isNaN(intGeese) ? setGeeseError(true) : setGeeseError(false);
                if (!(cornError || geeseError)) {
                  let [costResult, routeResult] = mockCalculateJourney(
                    intGeese,
                    intCorn
                  );
                  console.log(costResult, routeResult);
                  setCostRows((costRows) => [...costRows, costResult]);
                  setRouteRows((routeRows) => [...routeRows, routeResult]);
                }
              }}
            >
              Calculate Your Trip!
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className={classes.paper}>
          <Table data={costRows} cost />
        </div>
        <div className={classes.paper}>
          <Table data={routeRows} route />
        </div>
      </Grid>
    </Grid>
  );
}
