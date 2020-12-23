import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./Button1.css";
import "./ladki.jpg";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(5),
      },
    },
  }),
);

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className="">
    <div className="center">
    <div className={classes.root}>
      <div className="w">
      <Link to ="/Res1" >
      <Button variant="outlined" color="primary">
        Project
      </Button>
      </Link>
      </div>
      
      <div className="Quali">
        
      </div>
    </div>
    </div>
    </div>
  );
}