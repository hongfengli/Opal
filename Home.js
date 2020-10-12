import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: 24
  },
  subtitle: {
    textAlign: "center"
  }
}));

function Home() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Welcome to Opal!
      </Typography>
      
      <p className={classes.subtitle}>
        {(user == null)
          ? "Register or login to continue."
          : `Welcome, ${user.firstName}! Use the menu on the left to continue.`
        }
      </p>
    </div>
  );
}

export default Home;
