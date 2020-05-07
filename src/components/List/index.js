import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import keyGenerator from "../../helpers/keyGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList(props) {
  const classes = useStyles();
  console.log(props.data);
  let flattenedList = [];
  for (let x of props.data) {
    for (let y of x) {
      flattenedList.push(y);
    }
  }

  let list = (
    <List>
      {flattenedList.map((q) => (
        <ListItem key={keyGenerator(5)}>{q}</ListItem>
      ))}
    </List>
  );

  return <div className={classes.root}>{list}</div>;
}
